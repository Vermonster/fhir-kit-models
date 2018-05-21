
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptAction2 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptAction2 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get operation() {
    if (!isPresent(this[_values].operation)) {
      const klass = require('./TestScriptOperation');
      this[_values].operation = new klass();
    }
    return this[_values].operation;
  }

  set operation(value) {
    const klass = require('./TestScriptOperation');
    return this[_values].operation = new klass(value);
  }
}

module.exports = TestScriptAction2;

