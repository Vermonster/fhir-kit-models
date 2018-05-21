const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const Element = require('./Element');

class Reference extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Reference || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get reference() {
    return this[_values].reference;
  }

  set reference(value) {
    return this[_values].reference = value;
  }

  get _reference() {
    if (!isPresent(this[_values]._reference)) {
      const klass = require('./Element');
      this[_values]._reference = new klass();
    }
    return this[_values]._reference;
  }

  set _reference(value) {
    const klass = require('./Element');
    return this[_values]._reference = new klass(value);
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

module.exports = Reference;

