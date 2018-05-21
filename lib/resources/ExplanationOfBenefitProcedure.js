
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ExplanationOfBenefitProcedure extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefitProcedure || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sequence() {
    return this[_values].sequence;
  }

  set sequence(value) {
    return this[_values].sequence = value;
  }

  get _sequence() {
    if (!isPresent(this[_values]._sequence)) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }

  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
  }

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get procedureCodeableConcept() {
    if (!isPresent(this[_values].procedureCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].procedureCodeableConcept = new klass();
    }
    return this[_values].procedureCodeableConcept;
  }

  set procedureCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].procedureCodeableConcept = new klass(value);
  }

  get procedureReference() {
    if (!isPresent(this[_values].procedureReference)) {
      const klass = require('./Reference');
      this[_values].procedureReference = new klass();
    }
    return this[_values].procedureReference;
  }

  set procedureReference(value) {
    const klass = require('./Reference');
    return this[_values].procedureReference = new klass(value);
  }
}

module.exports = ExplanationOfBenefitProcedure;

