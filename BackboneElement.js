const Element = require('./Element');
const defaultValue = require('./default-value');
const ArrayProxy = require('./ArrayProxy');

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

const _values = Symbol.for('values');
const _structure = Symbol.for('structure');

const notEmpty = value => value && value.empty && !value.empty();

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

  * [Symbol.iterator]() {
    const presentEntries = Object.entries(this[_values])
      .filter(([_key, value]) => {
        if (notEmpty(value)) {
          return false;
        }
        return true;
      });
    for (const entry of presentEntries) {
      yield entry;
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

  empty() {
    for (const [_key, value] of Object.entries(this[_values])) {
      if (notEmpty(value)) {
        return false;
      }
    }
    return true;
  }
};

BackboneElement[_structure] = structure;

module.exports = BackboneElement;
