const fs = require('fs');
const { normalize } = require('path');
const rimraf = require('rimraf');

const Handlebars = require('handlebars'); // eslint-disable-line import/no-extraneous-dependencies

const baseTemplatepath = normalize(`${__dirname}/templates`);

const schemas = [];

const isPrimative = ref => {
  const nameArray = /[^/]*$/.exec(ref);
  const { definitions = {} } = schemas[0] || {};
  const defintion = definitions[nameArray[0]];
  if (defintion) {
    const { properties } = defintion;
    return !properties;
  }
  return true;
};

const loadResourceTemplates = () => {
  const baseTemplateFilename = 'element-template.hbs';
  const templateFileNames = fs.readdirSync(baseTemplatepath);
  templateFileNames.forEach(filename => {
    if (filename === baseTemplateFilename || filename === 'index.hbs') {
      return;
    }
    const template = fs.readFileSync(normalize(`${baseTemplatepath}/${filename}`), 'utf8');
    Handlebars.registerPartial(filename.slice(0, filename.length - 4), template);
  });
  const baseTemplate = fs.readFileSync(normalize(`${baseTemplatepath}/${baseTemplateFilename}`), 'utf8');
  return Handlebars.compile(baseTemplate);
};

const propertyParams = ([name, properties]) => {
  const array = properties.type === 'array';
  const objectProperties = array ? properties.items : properties;
  const type = objectProperties.$ref
    ? objectProperties.$ref.slice(objectProperties.$ref.lastIndexOf('/') + 1)
    : objectProperties.type;

  const anyResource = type === 'ResourceList';
  const primitive = isPrimative(objectProperties.$ref) && !anyResource;
  return {
    name,
    type: type && type.replace('_', ''),
    array,
    primitive,
    anyResource,
  };
};

const renderClass = (params, outputPath, template) => {
  const output = `${template(params)}`;
  fs.writeFileSync(normalize(`${outputPath}/${params.className}.js`), output);
};

const classParams = definition => {
  const { properties } = definition;
  if (properties) {
    return Object.entries(properties).map(propertyParams);
  }
  console.warn(`warning: ${JSON.stringify(definition, null, 2)}`); // eslint-disable-line no-console
};

const generateClass = (schema, outputPath, template) => {
  schemas.push(schema);
  for (const [className, definition] of Object.entries(schema.definitions)) {
    const camelCaseClassName = className.replace('_', '');
    console.log(`Generating: ${camelCaseClassName}.js`); // eslint-disable-line no-console
    let superClass;
    const definitionReference = definition.allOf
      && definition.allOf.length > 0
      && definition.allOf[0]
      && definition.allOf[0].$ref;

    if (definitionReference) {
      superClass = definitionReference.slice(definitionReference.lastIndexOf('/') + 1);
    }
    const params = classParams(definition);

    try {
      const usesArrayProxy = params.some(properties => properties.array && !properties.primitive);

      const usesIsPresent = !superClass
        || params.some(param => !param.primitive);

      const usesLoadResource = params.some(param => param.anyResource && !param.array);

      const isResource = params.some(param => param.name === 'resourceType');

      renderClass(
        {
          className: camelCaseClassName,
          superClass: superClass && superClass.replace('_', ''),
          usesArrayProxy,
          usesIsPresent,
          usesLoadResource,
          isResource,
          params,
        },
        outputPath,
        template,
      );
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }
};

const generateEntryPont = destinationPath => {
  const resourceFileNames = fs.readdirSync(normalize(`${destinationPath}`)).map(fileName => fileName.slice(0, fileName.indexOf('.')));
  const entryPointTemplate = Handlebars.compile(fs.readFileSync(normalize(`${baseTemplatepath}/index.hbs`), 'utf8'));
  const output = entryPointTemplate({ resourceFileNames });

  console.log('Generating: index.js'); // eslint-disable-line no-console
  fs.writeFileSync(normalize(`${destinationPath}/index.js`), output);
};

const copyFilesSync = (staticFiles, destinationPath) => {
  const sourcePath = normalize(`${__dirname}/../src`);

  staticFiles.forEach(file => {
    fs.copyFileSync(`${sourcePath}/${file}`, `${destinationPath}/${file}`, err => {
      if (err) throw err;
      console.log(`Generating: ${file}`); // eslint-disable-line no-console
    });
  });
};

const generateClasses = (schemaFileNames, outputPath, template) => {
  for (const schemaFileName of schemaFileNames) {
    // if (schemaFileName !== 'ResourceList.schema.json' && schemaFileName !== 'fhir.schema.json') {
    if (schemaFileName === 'fhir.schema.json') {
      const schema = JSON.parse(fs.readFileSync(normalize(`${__dirname}/../resource-schemas/${schemaFileName}`), 'utf8'));
      generateClass(schema, outputPath, template);
    }
  }
};

const initializeDirectory = outputPath => {
  rimraf.sync(outputPath);
  fs.mkdirSync(outputPath);
};

const createClasses = () => {
  // TODO Consider moving resourceTemplate to generateEntryPont
  const resourceTemplate = loadResourceTemplates();
  const destinationPath = normalize(`${__dirname}/../dist`);
  const schemaFileNames = fs.readdirSync(normalize(`${__dirname}/../resource-schemas`));

  initializeDirectory(destinationPath);
  // expandSchemas(schemaFileNames);
  generateClasses(schemaFileNames, destinationPath, resourceTemplate);
  generateEntryPont(destinationPath);
  copyFilesSync(['helpers.js', 'ArrayProxy.js'], destinationPath);
};

module.exports = {
  loadResourceTemplates,
  generateClass,
  initializeDirectory,
  generateEntryPont,
  copyFilesSync,
  createClasses,
};
