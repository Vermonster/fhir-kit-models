const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class MedicationAdministration extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationAdministration || values instanceof DomainResource) {
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

  get definition() {
    if (!isPresent(this[_values].definition)) {
      const klass = require('./Reference');
      this[_values].definition = ArrayProxy(klass);
    }
    return this[_values].definition;
  }

  set definition(value) {
    const klass = require('./Reference');
    this[_values].definition = ArrayProxy(klass);
    value.forEach(entry => this[_values].definition.push(entry));
    return this[_values].definition;
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

  get supportingInformation() {
    if (!isPresent(this[_values].supportingInformation)) {
      const klass = require('./Reference');
      this[_values].supportingInformation = ArrayProxy(klass);
    }
    return this[_values].supportingInformation;
  }

  set supportingInformation(value) {
    const klass = require('./Reference');
    this[_values].supportingInformation = ArrayProxy(klass);
    value.forEach(entry => this[_values].supportingInformation.push(entry));
    return this[_values].supportingInformation;
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

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./MedicationAdministrationPerformer');
      this[_values].performer = ArrayProxy(klass);
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./MedicationAdministrationPerformer');
    this[_values].performer = ArrayProxy(klass);
    value.forEach(entry => this[_values].performer.push(entry));
    return this[_values].performer;
  }

  get notGiven() {
    return this[_values].notGiven;
  }

  set notGiven(value) {
    return this[_values].notGiven = value;
  }

  get _notGiven() {
    if (!isPresent(this[_values]._notGiven)) {
      const klass = require('./Element');
      this[_values]._notGiven = new klass();
    }
    return this[_values]._notGiven;
  }

  set _notGiven(value) {
    const klass = require('./Element');
    return this[_values]._notGiven = new klass(value);
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

  get prescription() {
    if (!isPresent(this[_values].prescription)) {
      const klass = require('./Reference');
      this[_values].prescription = new klass();
    }
    return this[_values].prescription;
  }

  set prescription(value) {
    const klass = require('./Reference');
    return this[_values].prescription = new klass(value);
  }

  get device() {
    if (!isPresent(this[_values].device)) {
      const klass = require('./Reference');
      this[_values].device = ArrayProxy(klass);
    }
    return this[_values].device;
  }

  set device(value) {
    const klass = require('./Reference');
    this[_values].device = ArrayProxy(klass);
    value.forEach(entry => this[_values].device.push(entry));
    return this[_values].device;
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
      const klass = require('./MedicationAdministrationDosage');
      this[_values].dosage = new klass();
    }
    return this[_values].dosage;
  }

  set dosage(value) {
    const klass = require('./MedicationAdministrationDosage');
    return this[_values].dosage = new klass(value);
  }

  get eventHistory() {
    if (!isPresent(this[_values].eventHistory)) {
      const klass = require('./Reference');
      this[_values].eventHistory = ArrayProxy(klass);
    }
    return this[_values].eventHistory;
  }

  set eventHistory(value) {
    const klass = require('./Reference');
    this[_values].eventHistory = ArrayProxy(klass);
    value.forEach(entry => this[_values].eventHistory.push(entry));
    return this[_values].eventHistory;
  }
}

module.exports = MedicationAdministration;

