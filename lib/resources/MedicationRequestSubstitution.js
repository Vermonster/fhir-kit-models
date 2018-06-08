
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MedicationRequestSubstitution extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationRequestSubstitution ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get allowed() {
    return this[_values].allowed;
  }

  set allowed(value) {
    return this[_values].allowed = value;
  }

  get _allowed() {
    if (!isPresent(this[_values]._allowed)) {
      const klass = require('./Element');
      this[_values]._allowed = new klass();
    }
    return this[_values]._allowed;
  }

  set _allowed(value) {
    const klass = require('./Element');
    return this[_values]._allowed = new klass(value);
  }

  get reason() {
    if (!isPresent(this[_values].reason)) {
      const klass = require('./CodeableConcept');
      this[_values].reason = new klass();
    }
    return this[_values].reason;
  }

  set reason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reason = new klass(value);
  }
}

module.exports = MedicationRequestSubstitution;
