const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const Element = require('./Element');

class BackboneElement extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof BackboneElement || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get modifierExtension() {
    if (!isPresent(this[_values].modifierExtension)) {
      const klass = require('./Extension');
      this[_values].modifierExtension = ArrayProxy(klass);
    }
    return this[_values].modifierExtension;
  }

  set modifierExtension(value) {
    const klass = require('./Extension');
    this[_values].modifierExtension = ArrayProxy(klass);
    value.forEach(entry => this[_values].modifierExtension.push(entry));
    return this[_values].modifierExtension;
  }
}

module.exports = BackboneElement;

