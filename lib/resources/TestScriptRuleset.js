const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptRuleset extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptRuleset || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resource() {
    if (!isPresent(this[_values].resource)) {
      const klass = require('./Reference');
      this[_values].resource = new klass();
    }
    return this[_values].resource;
  }

  set resource(value) {
    const klass = require('./Reference');
    return this[_values].resource = new klass(value);
  }

  get rule() {
    if (!isPresent(this[_values].rule)) {
      const klass = require('./TestScriptRule1');
      this[_values].rule = ArrayProxy(klass);
    }
    return this[_values].rule;
  }

  set rule(value) {
    const klass = require('./TestScriptRule1');
    this[_values].rule = ArrayProxy(klass);
    value.forEach(entry => this[_values].rule.push(entry));
    return this[_values].rule;
  }
}

module.exports = TestScriptRuleset;

