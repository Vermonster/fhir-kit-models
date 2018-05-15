const Element = require('./lib/Element');
const BackboneElement = require('./lib/BackboneElement');
const { isPresent } = require('./helpers');

const element = new Element();
const belement = new BackboneElement;

element.id = 1;
console.log(element.id);
element._id = {id: 'abc'};

debugger;
