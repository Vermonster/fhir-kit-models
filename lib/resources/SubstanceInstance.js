
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class SubstanceInstance extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof SubstanceInstance ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get expiry() {
    return this[_values].expiry;
  }

  set expiry(value) {
    return this[_values].expiry = value;
  }

  get _expiry() {
    if (!isPresent(this[_values]._expiry)) {
      const klass = require('./Element');
      this[_values]._expiry = new klass();
    }
    return this[_values]._expiry;
  }

  set _expiry(value) {
    const klass = require('./Element');
    return this[_values]._expiry = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }
}

module.exports = SubstanceInstance;

