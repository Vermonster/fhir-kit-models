const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const Element = require('./Element');

class Quantity extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Quantity || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get comparator() {
    return this[_values].comparator;
  }

  set comparator(value) {
    return this[_values].comparator = value;
  }

  get _comparator() {
    if (!isPresent(this[_values]._comparator)) {
      const klass = require('./Element');
      this[_values]._comparator = new klass();
    }
    return this[_values]._comparator;
  }

  set _comparator(value) {
    const klass = require('./Element');
    return this[_values]._comparator = new klass(value);
  }

  get unit() {
    return this[_values].unit;
  }

  set unit(value) {
    return this[_values].unit = value;
  }

  get _unit() {
    if (!isPresent(this[_values]._unit)) {
      const klass = require('./Element');
      this[_values]._unit = new klass();
    }
    return this[_values]._unit;
  }

  set _unit(value) {
    const klass = require('./Element');
    return this[_values]._unit = new klass(value);
  }

  get system() {
    return this[_values].system;
  }

  set system(value) {
    return this[_values].system = value;
  }

  get _system() {
    if (!isPresent(this[_values]._system)) {
      const klass = require('./Element');
      this[_values]._system = new klass();
    }
    return this[_values]._system;
  }

  set _system(value) {
    const klass = require('./Element');
    return this[_values]._system = new klass(value);
  }

  get code() {
    return this[_values].code;
  }

  set code(value) {
    return this[_values].code = value;
  }

  get _code() {
    if (!isPresent(this[_values]._code)) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }

  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
  }
}

module.exports = Quantity;

