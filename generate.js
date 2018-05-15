const fs = require('fs');
const path = require('path');
const dust = require('dustjs-linkedin');
const acorn = require('acorn');
const codeGen = require('escodegen');

const templateFileNames = fs.readdirSync('templates');

for (const templateFileName of templateFileNames) {
  const src = fs.readFileSync(`./templates/${templateFileName}`, 'utf8');
  const compiled = dust.compile(src, templateFileName.slice(0, templateFileName.length - 5));
  dust.loadSource(compiled);
}

const schemaFileNames = fs.readdirSync('resource-schemas');

for (const schemaFileName of schemaFileNames) {
  const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/resource-schemas/${schemaFileName}`, 'utf8')));

  for (const [className, definition] of Object.entries(schema.definitions)) {
    console.log(`Generating: ${className}.js`);
    let superClass;
    if (definition.allOf[0].$ref) {
      superClass = definition.allOf[0].$ref.slice(definition.allOf[0].$ref.lastIndexOf('/') + 1);
    }
    const rawParams = definition.allOf[definition.allOf.length - 1];
    const params = Object.entries(rawParams.properties).map(([name, properties]) => {
      const array = properties.type === 'array';
      let type;
      if (array) {
        if (properties.items.$ref) {
          type = properties.items.$ref.slice(properties.items.$ref.lastIndexOf('/') + 1);
        } else {
          type = properties.items.type;
        }
      } else {
        if (properties.$ref) {
          type = properties.$ref.slice(properties.$ref.lastIndexOf('/') + 1);
        } else {
          type = properties.type;
        }
      }
      const primitive = type[0] < 'A' || type[0] > 'Z';
      return {
        name,
        type,
        array,
        primitive,
      };
    });
    dust.render('element-template', { className, superClass, params }, function(err, out) {
      if (err) {
        console.log(err);
        return;
      }
      const ast = acorn.parse(out);
      const prettyJS = codeGen.generate(ast, {
        format: {
          indent: {
            style: '  ',
          }
        }
      });
      fs.writeFileSync(`./lib/${className}.js`, prettyJS);
    });
  }
}