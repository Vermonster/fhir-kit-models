const fs = require('fs');
const { normalize } = require('path');
const Handlebars = require('handlebars'); // eslint-disable-line import/no-extraneous-dependencies

const baseTemplatepath = normalize(`${__dirname}/templates`);

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
  const type = objectProperties.$ref ? objectProperties.$ref.slice(objectProperties.$ref.lastIndexOf('/') + 1) : objectProperties.type;

  const primitive = !objectProperties.$ref;
  const anyResource = type === 'ResourceList';
  return {
    name,
    type: type.replace('_', ''),
    array,
    primitive,
    anyResource,
  };
};

const renderClass = (params, outputPath, template) => {
  const output = `${template(params)}\n`;
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  fs.writeFileSync(normalize(`${outputPath}/${params.className}.js`), output);
};

const classParams = definition => {
  const rawParams = definition.allOf[definition.allOf.length - 1];
  return Object.entries(rawParams.properties).map(propertyParams);
};

const generateClass = (schema, outputPath, template) => {
  for (const [className, definition] of Object.entries(schema.definitions)) {
    console.log(`Generating: ${className}.js`); // eslint-disable-line no-console
    let superClass;
    const definitionReference = definition.allOf[0].$ref;
    if (definitionReference) {
      superClass = definitionReference.slice(definitionReference.lastIndexOf('/') + 1);
    }
    const params = classParams(definition);

    const usesArrayProxy = params.some(properties => properties.array && !properties.primitive);
    const usesIsPresent = !superClass || params.some(param => !param.primitive);
    const usesLoadResource = params.some(param => param.anyResource && !param.array);
    const isResource = params.some(param => param.name === 'resourceType');
    renderClass(
      {
        className: className.replace('_', ''),
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
  }
};


const generateEntryPont = (resouceFileNames, destinationPath) => {
  const entryPointTemplate = Handlebars.compile(fs.readFileSync(normalize(`${baseTemplatepath}/index.hbs`), 'utf8'));
  const resourceFileNames = resouceFileNames.map(fileName => fileName.slice(0, fileName.indexOf('.')));

  const output = entryPointTemplate({ resourceFileNames: resourceFileNames });

  fs.writeFileSync(normalize(`${destinationPath}/index.js`), output);
  console.log('Generating: index.js'); // eslint-disable-line no-console
};

const generateClasses = (schemaFileNames, outputPath, template) => {
  const selectedSchemaFileNames = [];
  for (const schemaFileName of schemaFileNames) {
    if (schemaFileName === 'ResourceList.schema.json' || schemaFileName === 'fhir.schema.json') {
      continue;
    }
    const schema = JSON.parse(fs.readFileSync(normalize(`${__dirname}/../resource-schemas/${schemaFileName}`), 'utf8'));
    generateClass(schema, outputPath, template);
    selectedSchemaFileNames.push(schemaFileName);
  }
  generateEntryPont(selectedSchemaFileNames, outputPath);
};

const copyStaticFiles = destinationPath => {
  const staticFiles = ['helpers.js', 'ArrayProxy.js'];
  const sourcePath = normalize(`${__dirname}/../src`);

  staticFiles.forEach(file => {
    fs.copyFile(`${sourcePath}/${file}`, `${destinationPath}/${file}`, err => {
      if (err) throw err;
      console.log(`Generating: ${file}`); // eslint-disable-line no-console
    });
  });
};


const createClasses = () => {
  // TODO Consider movingg resourceTemplate to generateEntryPont
  const resourceTemplate = loadResourceTemplates();
  const destinationPath = normalize(`${__dirname}/../dist`);
  const schemaFileNames = fs.readdirSync(normalize(`${__dirname}/../resource-schemas`));

  generateClasses(schemaFileNames, destinationPath, resourceTemplate);
  copyStaticFiles(destinationPath);
};

module.exports = {
  loadResourceTemplates,
  generateClass,
  copyStaticFiles,
  createClasses,
};
