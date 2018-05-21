const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptSetup extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptSetup || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./TestScriptAction');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./TestScriptAction');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }
}

module.exports = TestScriptSetup;

