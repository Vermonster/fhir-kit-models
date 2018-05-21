
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CapabilityStatementOperation extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatementOperation || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }

  get definition() {
    if (!isPresent(this[_values].definition)) {
      const klass = require('./Reference');
      this[_values].definition = new klass();
    }
    return this[_values].definition;
  }

  set definition(value) {
    const klass = require('./Reference');
    return this[_values].definition = new klass(value);
  }
}

module.exports = CapabilityStatementOperation;

