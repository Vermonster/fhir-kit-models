const Element = require('./Element');
const BackboneElement = require('./BackboneElement');

const element = new Element();
const belement = new BackboneElement;

element.id = 1;
console.log(element.id);
element._id = {id: 'abc'};
console.log(element._id);
element.extension = [{id: 'extension0'}];
console.log(element.extension);

debugger;
