const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptRuleset1 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptRuleset1 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get rulesetId() {
    return this[_values].rulesetId;
  }

  set rulesetId(value) {
    return this[_values].rulesetId = value;
  }

  get _rulesetId() {
    if (!isPresent(this[_values]._rulesetId)) {
      const klass = require('./Element');
      this[_values]._rulesetId = new klass();
    }
    return this[_values]._rulesetId;
  }

  set _rulesetId(value) {
    const klass = require('./Element');
    return this[_values]._rulesetId = new klass(value);
  }

  get rule() {
    if (!isPresent(this[_values].rule)) {
      const klass = require('./TestScriptRule3');
      this[_values].rule = ArrayProxy(klass);
    }
    return this[_values].rule;
  }

  set rule(value) {
    const klass = require('./TestScriptRule3');
    this[_values].rule = ArrayProxy(klass);
    value.forEach(entry => this[_values].rule.push(entry));
    return this[_values].rule;
  }
}

module.exports = TestScriptRuleset1;

