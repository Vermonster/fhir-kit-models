const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class MedicationStatement extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'MedicationStatement';
    if (values instanceof MedicationStatement ||
      values instanceof DomainResource) {
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

  get basedOn() {
    if (!isPresent(this[_values].basedOn)) {
      const klass = require('./Reference');
      this[_values].basedOn = ArrayProxy(klass);
    }
    return this[_values].basedOn;
  }

  set basedOn(value) {
    const klass = require('./Reference');
    this[_values].basedOn = ArrayProxy(klass);
    value.forEach(entry => this[_values].basedOn.push(entry));
    return this[_values].basedOn;
  }

  get partOf() {
    if (!isPresent(this[_values].partOf)) {
      const klass = require('./Reference');
      this[_values].partOf = ArrayProxy(klass);
    }
    return this[_values].partOf;
  }

  set partOf(value) {
    const klass = require('./Reference');
    this[_values].partOf = ArrayProxy(klass);
    value.forEach(entry => this[_values].partOf.push(entry));
    return this[_values].partOf;
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
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

  get medicationCodeableConcept() {
    if (!isPresent(this[_values].medicationCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].medicationCodeableConcept = new klass();
    }
    return this[_values].medicationCodeableConcept;
  }

  set medicationCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].medicationCodeableConcept = new klass(value);
  }

  get medicationReference() {
    if (!isPresent(this[_values].medicationReference)) {
      const klass = require('./Reference');
      this[_values].medicationReference = new klass();
    }
    return this[_values].medicationReference;
  }

  set medicationReference(value) {
    const klass = require('./Reference');
    return this[_values].medicationReference = new klass(value);
  }

  get effectiveDateTime() {
    return this[_values].effectiveDateTime;
  }

  set effectiveDateTime(value) {
    return this[_values].effectiveDateTime = value;
  }

  get _effectiveDateTime() {
    if (!isPresent(this[_values]._effectiveDateTime)) {
      const klass = require('./Element');
      this[_values]._effectiveDateTime = new klass();
    }
    return this[_values]._effectiveDateTime;
  }

  set _effectiveDateTime(value) {
    const klass = require('./Element');
    return this[_values]._effectiveDateTime = new klass(value);
  }

  get effectivePeriod() {
    if (!isPresent(this[_values].effectivePeriod)) {
      const klass = require('./Period');
      this[_values].effectivePeriod = new klass();
    }
    return this[_values].effectivePeriod;
  }

  set effectivePeriod(value) {
    const klass = require('./Period');
    return this[_values].effectivePeriod = new klass(value);
  }

  get dateAsserted() {
    return this[_values].dateAsserted;
  }

  set dateAsserted(value) {
    return this[_values].dateAsserted = value;
  }

  get _dateAsserted() {
    if (!isPresent(this[_values]._dateAsserted)) {
      const klass = require('./Element');
      this[_values]._dateAsserted = new klass();
    }
    return this[_values]._dateAsserted;
  }

  set _dateAsserted(value) {
    const klass = require('./Element');
    return this[_values]._dateAsserted = new klass(value);
  }

  get informationSource() {
    if (!isPresent(this[_values].informationSource)) {
      const klass = require('./Reference');
      this[_values].informationSource = new klass();
    }
    return this[_values].informationSource;
  }

  set informationSource(value) {
    const klass = require('./Reference');
    return this[_values].informationSource = new klass(value);
  }

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get derivedFrom() {
    if (!isPresent(this[_values].derivedFrom)) {
      const klass = require('./Reference');
      this[_values].derivedFrom = ArrayProxy(klass);
    }
    return this[_values].derivedFrom;
  }

  set derivedFrom(value) {
    const klass = require('./Reference');
    this[_values].derivedFrom = ArrayProxy(klass);
    value.forEach(entry => this[_values].derivedFrom.push(entry));
    return this[_values].derivedFrom;
  }

  get taken() {
    return this[_values].taken;
  }

  set taken(value) {
    return this[_values].taken = value;
  }

  get _taken() {
    if (!isPresent(this[_values]._taken)) {
      const klass = require('./Element');
      this[_values]._taken = new klass();
    }
    return this[_values]._taken;
  }

  set _taken(value) {
    const klass = require('./Element');
    return this[_values]._taken = new klass(value);
  }

  get reasonNotTaken() {
    if (!isPresent(this[_values].reasonNotTaken)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonNotTaken = ArrayProxy(klass);
    }
    return this[_values].reasonNotTaken;
  }

  set reasonNotTaken(value) {
    const klass = require('./CodeableConcept');
    this[_values].reasonNotTaken = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonNotTaken.push(entry));
    return this[_values].reasonNotTaken;
  }

  get reasonCode() {
    if (!isPresent(this[_values].reasonCode)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCode = ArrayProxy(klass);
    }
    return this[_values].reasonCode;
  }

  set reasonCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].reasonCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonCode.push(entry));
    return this[_values].reasonCode;
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = ArrayProxy(klass);
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    this[_values].reasonReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonReference.push(entry));
    return this[_values].reasonReference;
  }

  get note() {
    if (!isPresent(this[_values].note)) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }

  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }

  get dosage() {
    if (!isPresent(this[_values].dosage)) {
      const klass = require('./Dosage');
      this[_values].dosage = ArrayProxy(klass);
    }
    return this[_values].dosage;
  }

  set dosage(value) {
    const klass = require('./Dosage');
    this[_values].dosage = ArrayProxy(klass);
    value.forEach(entry => this[_values].dosage.push(entry));
    return this[_values].dosage;
  }
}

module.exports = MedicationStatement;

