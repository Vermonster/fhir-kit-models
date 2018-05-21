
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestReport_Action1 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestReport_Action1 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get operation() {
    if (!isPresent(this[_values].operation)) {
      const klass = require('./TestReport_Operation');
      this[_values].operation = new klass();
    }
    return this[_values].operation;
  }

  set operation(value) {
    const klass = require('./TestReport_Operation');
    return this[_values].operation = new klass(value);
  }

  get assert() {
    if (!isPresent(this[_values].assert)) {
      const klass = require('./TestReport_Assert');
      this[_values].assert = new klass();
    }
    return this[_values].assert;
  }

  set assert(value) {
    const klass = require('./TestReport_Assert');
    return this[_values].assert = new klass(value);
  }
}

module.exports = TestReport_Action1;

