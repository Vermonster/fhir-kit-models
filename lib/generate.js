const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const loadTemplates = () => {
  const baseTemplateFilename = 'element-template.hbs';
  const templateFileNames = fs.readdirSync(path.normalize(`${__dirname}/../templates`));
  templateFileNames.forEach(filename => {
    if (filename === baseTemplateFilename) {
      return;
    }
    const template = fs.readFileSync(path.normalize(`${__dirname}/../templates/${filename}`), 'utf8');
    Handlebars.registerPartial(filename.slice(0, filename.length - 4), template);
  });
  const baseTemplate = fs.readFileSync(path.normalize(`${__dirname}/../templates/${baseTemplateFilename}`), 'utf8');
  return Handlebars.compile(baseTemplate);
};

const propertyParams = ([name, properties]) => {
  const array = properties.type === 'array';
  let type;
  if (array) {
    if (properties.items.$ref) {
      type = properties.items.$ref.slice(properties.items.$ref.lastIndexOf('/') + 1);
    } else {
      ({ type } = properties.items);
    }
  } else if (properties.$ref) {
    type = properties.$ref.slice(properties.$ref.lastIndexOf('/') + 1);
  } else {
    ({ type } = properties);
  }

  const primitive = type[0] < 'A' || type[0] > 'Z';
  return {
    name,
    type,
    array,
    primitive,
  };
};

const renderClass = (params, outputPath, template) => {
  const output = `${template(params)}\n`;
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  fs.writeFileSync(path.normalize(`${outputPath}/${params.className}.js`), output);
};

const generateClass = (schema, outputPath, template) => {
  for (const [className, definition] of Object.entries(schema.definitions)) {
    console.log(`Generating: ${className}.js`);
    let superClass;
    if (definition.allOf[0].$ref) {
      superClass = definition.allOf[0].$ref.slice(definition.allOf[0].$ref.lastIndexOf('/') + 1);
    }
    const rawParams = definition.allOf[definition.allOf.length - 1];
    const params = Object.entries(rawParams.properties).map(propertyParams);
    renderClass({ className, superClass, params }, outputPath, template);
  }
};

const generateClasses = (schemaFileNames, outputPath, template) => {
  for (const schemaFileName of schemaFileNames) {
    const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/../resource-schemas/${schemaFileName}`), 'utf8'));
    generateClass(schema, outputPath, template);
  }
};

const createClasses = () => {
  const template = loadTemplates();

  const schemaFileNames = fs.readdirSync(path.normalize(`${__dirname}/../resource-schemas`));
  generateClasses(schemaFileNames, `${__dirname}/generated/resources`, template);
};

module.exports = {
  loadTemplates,
  generateClass,
  createClasses,
};
