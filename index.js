const Element = require('./Element');

const element = new Element();

console.log('before debugger');

element.id = 1;
console.log(element.id);
element._id = {id: 'abc'};
console.log(element._id);
element.extension = [{id: 'extension0'}];
console.log(element.extension);

debugger;

console.log('after debugger');
