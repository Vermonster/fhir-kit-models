const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars'); // eslint-disable-line import/no-extraneous-dependencies

const loadTemplates = () => {
  const baseTemplateFilename = 'element-template.hbs';
  const baseTemplatepath = path.normalize(`${__dirname}/../templates`);
  const templateFileNames = fs.readdirSync(baseTemplatepath);
  templateFileNames.forEach(filename => {
    if (filename === baseTemplateFilename) {
      return;
    }
    const template = fs.readFileSync(path.normalize(`${baseTemplatepath}/${filename}`), 'utf8');
    Handlebars.registerPartial(filename.slice(0, filename.length - 4), template);
  });
  const baseTemplate = fs.readFileSync(path.normalize(`${baseTemplatepath}/${baseTemplateFilename}`), 'utf8');
  return Handlebars.compile(baseTemplate);
};

const propertyParams = ([name, properties]) => {
  const array = properties.type === 'array';
  let objectProperties = array ? properties.items : properties;
  let type = objectProperties.$ref ? objectProperties.$ref.slice(objectProperties.$ref.lastIndexOf('/') + 1) : objectProperties.type;

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
  fs.writeFileSync(path.normalize(`${outputPath}/${params.className}.js`), output);
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

const generateClasses = (schemaFileNames, outputPath, template) => {
  for (const schemaFileName of schemaFileNames) {
    if (schemaFileName === 'ResourceList.schema.json' || schemaFileName === 'fhir.schema.json') {
      continue;
    }
    const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/../resource-schemas/${schemaFileName}`), 'utf8'));
    generateClass(schema, outputPath, template);
  }
};

const createClasses = () => {
  const template = loadTemplates();

  const schemaFileNames = fs.readdirSync(path.normalize(`${__dirname}/../resource-schemas`));
  generateClasses(schemaFileNames, `${__dirname}/resources`, template);
};

module.exports = {
  loadTemplates,
  generateClass,
  createClasses,
};