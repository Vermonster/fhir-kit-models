
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class EligibilityResponseError extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof EligibilityResponseError ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }
}

module.exports = EligibilityResponseError;

