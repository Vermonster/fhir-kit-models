
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MessageHeaderDestination extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MessageHeaderDestination || values instanceof BackboneElement) {
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

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./Reference');
      this[_values].target = new klass();
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./Reference');
    return this[_values].target = new klass(value);
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

module.exports = MessageHeaderDestination;

