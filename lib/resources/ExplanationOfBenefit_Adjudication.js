
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ExplanationOfBenefit_Adjudication extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefit_Adjudication || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
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

  get amount() {
    if (!isPresent(this[_values].amount)) {
      const klass = require('./Money');
      this[_values].amount = new klass();
    }
    return this[_values].amount;
  }

  set amount(value) {
    const klass = require('./Money');
    return this[_values].amount = new klass(value);
  }

  get value() {
    return this[_values].value;
  }

  set value(value) {
    return this[_values].value = value;
  }

  get _value() {
    if (!isPresent(this[_values]._value)) {
      const klass = require('./Element');
      this[_values]._value = new klass();
    }
    return this[_values]._value;
  }

  set _value(value) {
    const klass = require('./Element');
    return this[_values]._value = new klass(value);
  }
}

module.exports = ExplanationOfBenefit_Adjudication;

