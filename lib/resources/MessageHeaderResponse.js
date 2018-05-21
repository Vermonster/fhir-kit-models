
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MessageHeaderResponse extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MessageHeaderResponse || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get identifier() {
    return this[_values].identifier;
  }

  set identifier(value) {
    return this[_values].identifier = value;
  }

  get _identifier() {
    if (!isPresent(this[_values]._identifier)) {
      const klass = require('./Element');
      this[_values]._identifier = new klass();
    }
    return this[_values]._identifier;
  }

  set _identifier(value) {
    const klass = require('./Element');
    return this[_values]._identifier = new klass(value);
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

  get details() {
    if (!isPresent(this[_values].details)) {
      const klass = require('./Reference');
      this[_values].details = new klass();
    }
    return this[_values].details;
  }

  set details(value) {
    const klass = require('./Reference');
    return this[_values].details = new klass(value);
  }
}

module.exports = MessageHeaderResponse;

