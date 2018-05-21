const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const Element = require('./Element');

class Coding extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Coding || values instanceof Element) {
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

  get userSelected() {
    return this[_values].userSelected;
  }

  set userSelected(value) {
    return this[_values].userSelected = value;
  }

  get _userSelected() {
    if (!isPresent(this[_values]._userSelected)) {
      const klass = require('./Element');
      this[_values]._userSelected = new klass();
    }
    return this[_values]._userSelected;
  }

  set _userSelected(value) {
    const klass = require('./Element');
    return this[_values]._userSelected = new klass(value);
  }
}

module.exports = Coding;

