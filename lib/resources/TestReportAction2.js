
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestReportAction2 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestReportAction2 ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get operation() {
    if (!isPresent(this[_values].operation)) {
      const klass = require('./TestReportOperation');
      this[_values].operation = new klass();
    }
    return this[_values].operation;
  }

  set operation(value) {
    const klass = require('./TestReportOperation');
    return this[_values].operation = new klass(value);
  }
}

module.exports = TestReportAction2;

