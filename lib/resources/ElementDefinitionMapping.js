
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ElementDefinitionMapping extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ElementDefinitionMapping || values instanceof BackboneElement) {
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

  get language() {
    return this[_values].language;
  }

  set language(value) {
    return this[_values].language = value;
  }

  get _language() {
    if (!isPresent(this[_values]._language)) {
      const klass = require('./Element');
      this[_values]._language = new klass();
    }
    return this[_values]._language;
  }

  set _language(value) {
    const klass = require('./Element');
    return this[_values]._language = new klass(value);
  }

  get map() {
    return this[_values].map;
  }

  set map(value) {
    return this[_values].map = value;
  }

  get _map() {
    if (!isPresent(this[_values]._map)) {
      const klass = require('./Element');
      this[_values]._map = new klass();
    }
    return this[_values]._map;
  }

  set _map(value) {
    const klass = require('./Element');
    return this[_values]._map = new klass(value);
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

module.exports = ElementDefinitionMapping;

