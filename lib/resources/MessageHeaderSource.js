
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MessageHeaderSource extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MessageHeaderSource || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get software() {
    return this[_values].software;
  }

  set software(value) {
    return this[_values].software = value;
  }

  get _software() {
    if (!isPresent(this[_values]._software)) {
      const klass = require('./Element');
      this[_values]._software = new klass();
    }
    return this[_values]._software;
  }

  set _software(value) {
    const klass = require('./Element');
    return this[_values]._software = new klass(value);
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

  get contact() {
    if (!isPresent(this[_values].contact)) {
      const klass = require('./ContactPoint');
      this[_values].contact = new klass();
    }
    return this[_values].contact;
  }

  set contact(value) {
    const klass = require('./ContactPoint');
    return this[_values].contact = new klass(value);
  }

  get endpoint() {
    return this[_values].endpoint;
  }

  set endpoint(value) {
    return this[_values].endpoint = value;
  }

  get _endpoint() {
    if (!isPresent(this[_values]._endpoint)) {
      const klass = require('./Element');
      this[_values]._endpoint = new klass();
    }
    return this[_values]._endpoint;
  }

  set _endpoint(value) {
    const klass = require('./Element');
    return this[_values]._endpoint = new klass(value);
  }
}

module.exports = MessageHeaderSource;

