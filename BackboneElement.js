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

class BackboneElement extends Element {
  constructor(values = {}) {
    super();
    const properties = Object.assign({}, Element.structure.properties, BackboneElement.structure.properties);
    this.structure = Object.assign({}, Element.structure, BackboneElement.structure, { properties });
    this.values = {};
    if (values instanceof Element || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  * [Symbol.iterator]() {
    const presentEntries = Object.entries(this.values)
      .filter(([_key, value]) => {
        if (value && value.empty && !value.empty()) {
          return false;
        }
        return !!value;
      });
    for (const entry of presentEntries) {
      yield entry;
    }
  }

  get modifierExtension() {
    if (!this.values.modifierExtension) {
      this.values.modifierExtension = ArrayProxy(this.structure.properties.modifierExtension.items);
    }
    return this.values.modifierExtension;
  }

  set modifierExtension(value) {
    this.values.modifierExtension = ArrayProxy(this.structure.properties.modifierExtension.items);
    value.forEach(entry => this.values.modifierExtension.push(entry));
  }

  empty() {
    for (const [_key, value] of Object.entries(this.values)) {
      if (value && value.empty && !value.empty()) {
        return false;
      }
    }
    return true;
  }
};

BackboneElement.structure = structure;

module.exports = BackboneElement;
