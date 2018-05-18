const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class TestScript_Rule2 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript_Rule2 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get ruleId() {
    return this[_values].ruleId;
  }
  set ruleId(value) {
    return this[_values].ruleId = value;
  }
  get _ruleId() {
    if (!this[_values]._ruleId) {
      const klass = require('./Element');
      this[_values]._ruleId = new klass();
    }
    return this[_values]._ruleId;
  }
  set _ruleId(value) {
    const klass = require('./Element');
    return this[_values]._ruleId = new klass(value);
  }
  get param() {
    if (!this[_values].param) {
      const klass = require('./TestScript_Param2');
      this[_values].param = ArrayProxy(klass);
    }
    return this[_values].param;
  }
  set param(value) {
    const klass = require('./TestScript_Param2');
    this[_values].param = ArrayProxy(klass);
    value.forEach(entry => this[_values].param.push(entry));
    return this[_values].param;
  }
}
module.exports = TestScript_Rule2;