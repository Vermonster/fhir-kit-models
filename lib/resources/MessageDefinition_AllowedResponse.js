
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MessageDefinition_AllowedResponse extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MessageDefinition_AllowedResponse || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get message() {
    if (!isPresent(this[_values].message)) {
      const klass = require('./Reference');
      this[_values].message = new klass();
    }
    return this[_values].message;
  }

  set message(value) {
    const klass = require('./Reference');
    return this[_values].message = new klass(value);
  }

  get situation() {
    return this[_values].situation;
  }

  set situation(value) {
    return this[_values].situation = value;
  }

  get _situation() {
    if (!isPresent(this[_values]._situation)) {
      const klass = require('./Element');
      this[_values]._situation = new klass();
    }
    return this[_values]._situation;
  }

  set _situation(value) {
    const klass = require('./Element');
    return this[_values]._situation = new klass(value);
  }
}

module.exports = MessageDefinition_AllowedResponse;

