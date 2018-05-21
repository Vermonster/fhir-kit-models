
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestReport_Assert extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestReport_Assert || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get result() {
    return this[_values].result;
  }

  set result(value) {
    return this[_values].result = value;
  }

  get _result() {
    if (!isPresent(this[_values]._result)) {
      const klass = require('./Element');
      this[_values]._result = new klass();
    }
    return this[_values]._result;
  }

  set _result(value) {
    const klass = require('./Element');
    return this[_values]._result = new klass(value);
  }

  get message() {
    return this[_values].message;
  }

  set message(value) {
    return this[_values].message = value;
  }

  get _message() {
    if (!isPresent(this[_values]._message)) {
      const klass = require('./Element');
      this[_values]._message = new klass();
    }
    return this[_values]._message;
  }

  set _message(value) {
    const klass = require('./Element');
    return this[_values]._message = new klass(value);
  }

  get detail() {
    return this[_values].detail;
  }

  set detail(value) {
    return this[_values].detail = value;
  }

  get _detail() {
    if (!isPresent(this[_values]._detail)) {
      const klass = require('./Element');
      this[_values]._detail = new klass();
    }
    return this[_values]._detail;
  }

  set _detail(value) {
    const klass = require('./Element');
    return this[_values]._detail = new klass(value);
  }
}

module.exports = TestReport_Assert;

