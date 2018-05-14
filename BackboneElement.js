const ArrayProxy = require('./ArrayProxy');
const { isPresent } = require('./helpers');

const Element = require('./Element');

const _values = Symbol.for('values');
const _structure = Symbol.for('structure');

const structure = {
  properties: {
    modifierExtension: {
      min: 0,
      max: '*',
      // items: 'Extension',
      items: 'Element',
    },
  }
};

class BackboneElement extends Element {
  constructor(values = {}) {
    super();
    const properties = Object.assign({}, Element[_structure].properties, BackboneElement[_structure].properties);
    this[_structure] = Object.assign({}, Element[_structure], BackboneElement[_structure], { properties });
    this[_values] = {};
    if (values instanceof Element || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get modifierExtension() {
    if (!this[_values].modifierExtension) {
      this[_values].modifierExtension = ArrayProxy(this[_structure].properties.modifierExtension.items);
    }
    return this[_values].modifierExtension;
  }

  set modifierExtension(value) {
    this[_values].modifierExtension = ArrayProxy(this[_structure].properties.modifierExtension.items);
    value.forEach(entry => this[_values].modifierExtension.push(entry));
  }
};

BackboneElement[_structure] = structure;

module.exports = BackboneElement;
