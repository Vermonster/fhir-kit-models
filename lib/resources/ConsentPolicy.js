
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ConsentPolicy extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConsentPolicy ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get authority() {
    return this[_values].authority;
  }

  set authority(value) {
    return this[_values].authority = value;
  }

  get _authority() {
    if (!isPresent(this[_values]._authority)) {
      const klass = require('./Element');
      this[_values]._authority = new klass();
    }
    return this[_values]._authority;
  }

  set _authority(value) {
    const klass = require('./Element');
    return this[_values]._authority = new klass(value);
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
}

module.exports = ConsentPolicy;
