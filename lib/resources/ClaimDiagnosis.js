const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ClaimDiagnosis extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClaimDiagnosis || values instanceof BackboneElement) {
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

  get diagnosisCodeableConcept() {
    if (!isPresent(this[_values].diagnosisCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].diagnosisCodeableConcept = new klass();
    }
    return this[_values].diagnosisCodeableConcept;
  }

  set diagnosisCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].diagnosisCodeableConcept = new klass(value);
  }

  get diagnosisReference() {
    if (!isPresent(this[_values].diagnosisReference)) {
      const klass = require('./Reference');
      this[_values].diagnosisReference = new klass();
    }
    return this[_values].diagnosisReference;
  }

  set diagnosisReference(value) {
    const klass = require('./Reference');
    return this[_values].diagnosisReference = new klass(value);
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = ArrayProxy(klass);
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    this[_values].type = ArrayProxy(klass);
    value.forEach(entry => this[_values].type.push(entry));
    return this[_values].type;
  }

  get packageCode() {
    if (!isPresent(this[_values].packageCode)) {
      const klass = require('./CodeableConcept');
      this[_values].packageCode = new klass();
    }
    return this[_values].packageCode;
  }

  set packageCode(value) {
    const klass = require('./CodeableConcept');
    return this[_values].packageCode = new klass(value);
  }
}

module.exports = ClaimDiagnosis;

