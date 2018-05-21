const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Immunization_Explanation extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Immunization_Explanation || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get reason() {
    if (!isPresent(this[_values].reason)) {
      const klass = require('./CodeableConcept');
      this[_values].reason = ArrayProxy(klass);
    }
    return this[_values].reason;
  }

  set reason(value) {
    const klass = require('./CodeableConcept');
    this[_values].reason = ArrayProxy(klass);
    value.forEach(entry => this[_values].reason.push(entry));
    return this[_values].reason;
  }

  get reasonNotGiven() {
    if (!isPresent(this[_values].reasonNotGiven)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonNotGiven = ArrayProxy(klass);
    }
    return this[_values].reasonNotGiven;
  }

  set reasonNotGiven(value) {
    const klass = require('./CodeableConcept');
    this[_values].reasonNotGiven = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonNotGiven.push(entry));
    return this[_values].reasonNotGiven;
  }
}

module.exports = Immunization_Explanation;

