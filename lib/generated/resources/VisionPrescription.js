const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class VisionPrescription extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof VisionPrescription || values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get patient() {
    if (!isPresent(this[_values].patient)) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }

  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }

  get encounter() {
    if (!isPresent(this[_values].encounter)) {
      const klass = require('./Reference');
      this[_values].encounter = new klass();
    }
    return this[_values].encounter;
  }

  set encounter(value) {
    const klass = require('./Reference');
    return this[_values].encounter = new klass(value);
  }

  get dateWritten() {
    return this[_values].dateWritten;
  }

  set dateWritten(value) {
    return this[_values].dateWritten = value;
  }

  get _dateWritten() {
    if (!isPresent(this[_values]._dateWritten)) {
      const klass = require('./Element');
      this[_values]._dateWritten = new klass();
    }
    return this[_values]._dateWritten;
  }

  set _dateWritten(value) {
    const klass = require('./Element');
    return this[_values]._dateWritten = new klass(value);
  }

  get prescriber() {
    if (!isPresent(this[_values].prescriber)) {
      const klass = require('./Reference');
      this[_values].prescriber = new klass();
    }
    return this[_values].prescriber;
  }

  set prescriber(value) {
    const klass = require('./Reference');
    return this[_values].prescriber = new klass(value);
  }

  get reasonCodeableConcept() {
    if (!isPresent(this[_values].reasonCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCodeableConcept = new klass();
    }
    return this[_values].reasonCodeableConcept;
  }

  set reasonCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reasonCodeableConcept = new klass(value);
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = new klass();
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    return this[_values].reasonReference = new klass(value);
  }

  get dispense() {
    if (!isPresent(this[_values].dispense)) {
      const klass = require('./VisionPrescription_Dispense');
      this[_values].dispense = ArrayProxy(klass);
    }
    return this[_values].dispense;
  }

  set dispense(value) {
    const klass = require('./VisionPrescription_Dispense');
    this[_values].dispense = ArrayProxy(klass);
    value.forEach(entry => this[_values].dispense.push(entry));
    return this[_values].dispense;
  }
}

module.exports = VisionPrescription;

