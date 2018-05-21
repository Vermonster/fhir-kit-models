const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ValueSet_Filter extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ValueSet_Filter || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get property() {
    return this[_values].property;
  }

  set property(value) {
    return this[_values].property = value;
  }

  get _property() {
    if (!isPresent(this[_values]._property)) {
      const klass = require('./Element');
      this[_values]._property = new klass();
    }
    return this[_values]._property;
  }

  set _property(value) {
    const klass = require('./Element');
    return this[_values]._property = new klass(value);
  }

  get op() {
    return this[_values].op;
  }

  set op(value) {
    return this[_values].op = value;
  }

  get _op() {
    if (!isPresent(this[_values]._op)) {
      const klass = require('./Element');
      this[_values]._op = new klass();
    }
    return this[_values]._op;
  }

  set _op(value) {
    const klass = require('./Element');
    return this[_values]._op = new klass(value);
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

module.exports = ValueSet_Filter;

