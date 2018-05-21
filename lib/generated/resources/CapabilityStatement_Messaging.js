const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Messaging extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatement_Messaging || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get endpoint() {
    if (!isPresent(this[_values].endpoint)) {
      const klass = require('./CapabilityStatement_Endpoint');
      this[_values].endpoint = ArrayProxy(klass);
    }
    return this[_values].endpoint;
  }

  set endpoint(value) {
    const klass = require('./CapabilityStatement_Endpoint');
    this[_values].endpoint = ArrayProxy(klass);
    value.forEach(entry => this[_values].endpoint.push(entry));
    return this[_values].endpoint;
  }

  get reliableCache() {
    return this[_values].reliableCache;
  }

  set reliableCache(value) {
    return this[_values].reliableCache = value;
  }

  get _reliableCache() {
    if (!isPresent(this[_values]._reliableCache)) {
      const klass = require('./Element');
      this[_values]._reliableCache = new klass();
    }
    return this[_values]._reliableCache;
  }

  set _reliableCache(value) {
    const klass = require('./Element');
    return this[_values]._reliableCache = new klass(value);
  }

  get documentation() {
    return this[_values].documentation;
  }

  set documentation(value) {
    return this[_values].documentation = value;
  }

  get _documentation() {
    if (!isPresent(this[_values]._documentation)) {
      const klass = require('./Element');
      this[_values]._documentation = new klass();
    }
    return this[_values]._documentation;
  }

  set _documentation(value) {
    const klass = require('./Element');
    return this[_values]._documentation = new klass(value);
  }

  get supportedMessage() {
    if (!isPresent(this[_values].supportedMessage)) {
      const klass = require('./CapabilityStatement_SupportedMessage');
      this[_values].supportedMessage = ArrayProxy(klass);
    }
    return this[_values].supportedMessage;
  }

  set supportedMessage(value) {
    const klass = require('./CapabilityStatement_SupportedMessage');
    this[_values].supportedMessage = ArrayProxy(klass);
    value.forEach(entry => this[_values].supportedMessage.push(entry));
    return this[_values].supportedMessage;
  }

  get event() {
    if (!isPresent(this[_values].event)) {
      const klass = require('./CapabilityStatement_Event');
      this[_values].event = ArrayProxy(klass);
    }
    return this[_values].event;
  }

  set event(value) {
    const klass = require('./CapabilityStatement_Event');
    this[_values].event = ArrayProxy(klass);
    value.forEach(entry => this[_values].event.push(entry));
    return this[_values].event;
  }
}

module.exports = CapabilityStatement_Messaging;

