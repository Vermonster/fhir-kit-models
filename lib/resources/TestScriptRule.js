const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptRule extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptRule ||
      values instanceof BackboneElement) {
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

  get param() {
    if (!isPresent(this[_values].param)) {
      const klass = require('./TestScriptParam');
      this[_values].param = ArrayProxy(klass);
    }
    return this[_values].param;
  }

  set param(value) {
    const klass = require('./TestScriptParam');
    this[_values].param = ArrayProxy(klass);
    value.forEach(entry => this[_values].param.push(entry));
    return this[_values].param;
  }
}

module.exports = TestScriptRule;

