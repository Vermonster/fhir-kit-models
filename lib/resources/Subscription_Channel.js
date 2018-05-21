const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Subscription_Channel extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Subscription_Channel || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
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

  get payload() {
    return this[_values].payload;
  }

  set payload(value) {
    return this[_values].payload = value;
  }

  get _payload() {
    if (!isPresent(this[_values]._payload)) {
      const klass = require('./Element');
      this[_values]._payload = new klass();
    }
    return this[_values]._payload;
  }

  set _payload(value) {
    const klass = require('./Element');
    return this[_values]._payload = new klass(value);
  }

  get header() {
    return this[_values].header;
  }

  set header(value) {
    return this[_values].header = value;
  }

  get _header() {
    if (!isPresent(this[_values]._header)) {
      const klass = require('./Element');
      this[_values]._header = ArrayProxy(klass);
    }
    return this[_values]._header;
  }

  set _header(value) {
    const klass = require('./Element');
    this[_values]._header = ArrayProxy(klass);
    value.forEach(entry => this[_values]._header.push(entry));
    return this[_values]._header;
  }
}

module.exports = Subscription_Channel;

