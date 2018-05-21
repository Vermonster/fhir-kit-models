
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptAction extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptAction || values instanceof BackboneElement) {
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

  get assert() {
    if (!isPresent(this[_values].assert)) {
      const klass = require('./TestScriptAssert');
      this[_values].assert = new klass();
    }
    return this[_values].assert;
  }

  set assert(value) {
    const klass = require('./TestScriptAssert');
    return this[_values].assert = new klass(value);
  }
}

module.exports = TestScriptAction;

