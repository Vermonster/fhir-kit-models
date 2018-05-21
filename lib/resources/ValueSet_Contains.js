const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ValueSet_Contains extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ValueSet_Contains || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get abstract() {
    return this[_values].abstract;
  }

  set abstract(value) {
    return this[_values].abstract = value;
  }

  get _abstract() {
    if (!isPresent(this[_values]._abstract)) {
      const klass = require('./Element');
      this[_values]._abstract = new klass();
    }
    return this[_values]._abstract;
  }

  set _abstract(value) {
    const klass = require('./Element');
    return this[_values]._abstract = new klass(value);
  }

  get inactive() {
    return this[_values].inactive;
  }

  set inactive(value) {
    return this[_values].inactive = value;
  }

  get _inactive() {
    if (!isPresent(this[_values]._inactive)) {
      const klass = require('./Element');
      this[_values]._inactive = new klass();
    }
    return this[_values]._inactive;
  }

  set _inactive(value) {
    const klass = require('./Element');
    return this[_values]._inactive = new klass(value);
  }

  get version() {
    return this[_values].version;
  }

  set version(value) {
    return this[_values].version = value;
  }

  get _version() {
    if (!isPresent(this[_values]._version)) {
      const klass = require('./Element');
      this[_values]._version = new klass();
    }
    return this[_values]._version;
  }

  set _version(value) {
    const klass = require('./Element');
    return this[_values]._version = new klass(value);
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
      const klass = require('./ValueSet_Designation');
      this[_values].designation = ArrayProxy(klass);
    }
    return this[_values].designation;
  }

  set designation(value) {
    const klass = require('./ValueSet_Designation');
    this[_values].designation = ArrayProxy(klass);
    value.forEach(entry => this[_values].designation.push(entry));
    return this[_values].designation;
  }

  get contains() {
    if (!isPresent(this[_values].contains)) {
      const klass = require('./ValueSet_Contains');
      this[_values].contains = ArrayProxy(klass);
    }
    return this[_values].contains;
  }

  set contains(value) {
    const klass = require('./ValueSet_Contains');
    this[_values].contains = ArrayProxy(klass);
    value.forEach(entry => this[_values].contains.push(entry));
    return this[_values].contains;
  }
}

module.exports = ValueSet_Contains;

