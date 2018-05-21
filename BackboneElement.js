const ArrayProxy = require('./lib/ArrayProxy');
const { isPresent, _values } = require('./lib/helpers');

const Element = require('./Element');

class BackboneElement extends Element {
  constructor(values = {}) {
    super();
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
      this[_values].modifierExtension = ArrayProxy('Element');
    }
    return this[_values].modifierExtension;
  }

  set modifierExtension(value) {
    this[_values].modifierExtension = ArrayProxy('Element');
    value.forEach(entry => this[_values].modifierExtension.push(entry));
  }
};

module.exports = BackboneElement;
