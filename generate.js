const fs = require('fs');
const path = require('path');
const dust = require('dustjs-linkedin');

const templateFileNames = fs.readdirSync('templates');

for (const templateFileName of templateFileNames) {
  const src = fs.readFileSync(`./templates/${templateFileName}`, 'utf8');
  const compiled = dust.compile(src, templateFileName.slice(0, templateFileName.length - 5));
  dust.loadSource(compiled);
}

const params = {
  className: 'BackboneElement',
  superClass: 'Element',
  params: [
    {
      name: 'id',
      primitive: true,
    },
    {
      name: '_id',
      type: 'Element',
    },
    {
      name: 'extension',
      array: true,
      type: 'Element',
    }
  ]
};
dust.render('element-template', params, function(err, out) {
  console.log(err);
  console.log(out);
});



// const schemaFileNames = fs.readdirSync('resource-schemas');

// for (const schemaFileName of schemaFileNames) {
//   const schema = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/resource-schemas/${schemaFileName}`, 'utf8')));

//   for (const [className, definition] of Object.entries(schema.definitions)) {
//     const superClass = definition.allOf && definition.allOf.find(element => element.$ref);
//     if (superClass) {
//       const superClassName = superClass.$ref.slice(superClass.$ref.lastIndexOf('/') + 1);
//       console.log(`${className}: ${superClassName}`);
//     } else {
//       console.log(className);
//     }
//   }
// }
