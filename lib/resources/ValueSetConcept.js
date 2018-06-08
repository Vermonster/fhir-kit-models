const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ValueSetConcept extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ValueSetConcept ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get display() {
    return this[_values].display;
  }

  set display(value) {
    return this[_values].display = value;
  }

  get _display() {
    if (!isPresent(this[_values]._display)) {
      const klass = require('./Element');
      this[_values]._display = new klass();
    }
    return this[_values]._display;
  }

  set _display(value) {
    const klass = require('./Element');
    return this[_values]._display = new klass(value);
  }

  get designation() {
    if (!isPresent(this[_values].designation)) {
      const klass = require('./ValueSetDesignation');
      this[_values].designation = ArrayProxy(klass);
    }
    return this[_values].designation;
  }

  set designation(value) {
    const klass = require('./ValueSetDesignation');
    this[_values].designation = ArrayProxy(klass);
    value.forEach(entry => this[_values].designation.push(entry));
    return this[_values].designation;
  }
}

module.exports = ValueSetConcept;

