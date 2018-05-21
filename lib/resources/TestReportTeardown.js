const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestReportTeardown extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestReportTeardown || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./TestReportAction2');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./TestReportAction2');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }
}

module.exports = TestReportTeardown;

