const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Security extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatement_Security || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get cors() {
    return this[_values].cors;
  }

  set cors(value) {
    return this[_values].cors = value;
  }

  get _cors() {
    if (!isPresent(this[_values]._cors)) {
      const klass = require('./Element');
      this[_values]._cors = new klass();
    }
    return this[_values]._cors;
  }

  set _cors(value) {
    const klass = require('./Element');
    return this[_values]._cors = new klass(value);
  }

  get service() {
    if (!isPresent(this[_values].service)) {
      const klass = require('./CodeableConcept');
      this[_values].service = ArrayProxy(klass);
    }
    return this[_values].service;
  }

  set service(value) {
    const klass = require('./CodeableConcept');
    this[_values].service = ArrayProxy(klass);
    value.forEach(entry => this[_values].service.push(entry));
    return this[_values].service;
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get certificate() {
    if (!isPresent(this[_values].certificate)) {
      const klass = require('./CapabilityStatement_Certificate');
      this[_values].certificate = ArrayProxy(klass);
    }
    return this[_values].certificate;
  }

  set certificate(value) {
    const klass = require('./CapabilityStatement_Certificate');
    this[_values].certificate = ArrayProxy(klass);
    value.forEach(entry => this[_values].certificate.push(entry));
    return this[_values].certificate;
  }
}

module.exports = CapabilityStatement_Security;

