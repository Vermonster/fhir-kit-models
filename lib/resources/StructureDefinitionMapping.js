
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class StructureDefinitionMapping extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureDefinitionMapping ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get identity() {
    return this[_values].identity;
  }

  set identity(value) {
    return this[_values].identity = value;
  }

  get _identity() {
    if (!isPresent(this[_values]._identity)) {
      const klass = require('./Element');
      this[_values]._identity = new klass();
    }
    return this[_values]._identity;
  }

  set _identity(value) {
    const klass = require('./Element');
    return this[_values]._identity = new klass(value);
  }

  get uri() {
    return this[_values].uri;
  }

  set uri(value) {
    return this[_values].uri = value;
  }

  get _uri() {
    if (!isPresent(this[_values]._uri)) {
      const klass = require('./Element');
      this[_values]._uri = new klass();
    }
    return this[_values]._uri;
  }

  set _uri(value) {
    const klass = require('./Element');
    return this[_values]._uri = new klass(value);
  }

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }

  get comment() {
    return this[_values].comment;
  }

  set comment(value) {
    return this[_values].comment = value;
  }

  get _comment() {
    if (!isPresent(this[_values]._comment)) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }

  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }
}

module.exports = StructureDefinitionMapping;

