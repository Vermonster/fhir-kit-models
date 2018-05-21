
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Consent_Actor extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Consent_Actor || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get role() {
    if (!isPresent(this[_values].role)) {
      const klass = require('./CodeableConcept');
      this[_values].role = new klass();
    }
    return this[_values].role;
  }

  set role(value) {
    const klass = require('./CodeableConcept');
    return this[_values].role = new klass(value);
  }

  get reference() {
    if (!isPresent(this[_values].reference)) {
      const klass = require('./Reference');
      this[_values].reference = new klass();
    }
    return this[_values].reference;
  }

  set reference(value) {
    const klass = require('./Reference');
    return this[_values].reference = new klass(value);
  }
}

module.exports = Consent_Actor;

