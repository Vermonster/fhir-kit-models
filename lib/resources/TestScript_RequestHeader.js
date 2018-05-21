
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScript_RequestHeader extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript_RequestHeader || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get field() {
    return this[_values].field;
  }

  set field(value) {
    return this[_values].field = value;
  }

  get _field() {
    if (!isPresent(this[_values]._field)) {
      const klass = require('./Element');
      this[_values]._field = new klass();
    }
    return this[_values]._field;
  }

  set _field(value) {
    const klass = require('./Element');
    return this[_values]._field = new klass(value);
  }

  get value() {
    return this[_values].value;
  }

  set value(value) {
    return this[_values].value = value;
  }

  get _value() {
    if (!isPresent(this[_values]._value)) {
      const klass = require('./Element');
      this[_values]._value = new klass();
    }
    return this[_values]._value;
  }

  set _value(value) {
    const klass = require('./Element');
    return this[_values]._value = new klass(value);
  }
}

module.exports = TestScript_RequestHeader;

