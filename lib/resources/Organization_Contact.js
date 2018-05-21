const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Organization_Contact extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Organization_Contact || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get purpose() {
    if (!isPresent(this[_values].purpose)) {
      const klass = require('./CodeableConcept');
      this[_values].purpose = new klass();
    }
    return this[_values].purpose;
  }

  set purpose(value) {
    const klass = require('./CodeableConcept');
    return this[_values].purpose = new klass(value);
  }

  get name() {
    if (!isPresent(this[_values].name)) {
      const klass = require('./HumanName');
      this[_values].name = new klass();
    }
    return this[_values].name;
  }

  set name(value) {
    const klass = require('./HumanName');
    return this[_values].name = new klass(value);
  }

  get telecom() {
    if (!isPresent(this[_values].telecom)) {
      const klass = require('./ContactPoint');
      this[_values].telecom = ArrayProxy(klass);
    }
    return this[_values].telecom;
  }

  set telecom(value) {
    const klass = require('./ContactPoint');
    this[_values].telecom = ArrayProxy(klass);
    value.forEach(entry => this[_values].telecom.push(entry));
    return this[_values].telecom;
  }

  get address() {
    if (!isPresent(this[_values].address)) {
      const klass = require('./Address');
      this[_values].address = new klass();
    }
    return this[_values].address;
  }

  set address(value) {
    const klass = require('./Address');
    return this[_values].address = new klass(value);
  }
}

module.exports = Organization_Contact;

