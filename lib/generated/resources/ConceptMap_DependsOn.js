const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ConceptMap_DependsOn extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConceptMap_DependsOn || values instanceof BackboneElement) {
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
}

module.exports = ConceptMap_DependsOn;

