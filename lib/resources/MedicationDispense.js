const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class MedicationDispense extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationDispense ||
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

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./MedicationDispensePerformer');
      this[_values].performer = ArrayProxy(klass);
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./MedicationDispensePerformer');
    this[_values].performer = ArrayProxy(klass);
    value.forEach(entry => this[_values].performer.push(entry));
    return this[_values].performer;
  }

  get authorizingPrescription() {
    if (!isPresent(this[_values].authorizingPrescription)) {
      const klass = require('./Reference');
      this[_values].authorizingPrescription = ArrayProxy(klass);
    }
    return this[_values].authorizingPrescription;
  }

  set authorizingPrescription(value) {
    const klass = require('./Reference');
    this[_values].authorizingPrescription = ArrayProxy(klass);
    value.forEach(entry => this[_values].authorizingPrescription.push(entry));
    return this[_values].authorizingPrescription;
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get daysSupply() {
    if (!isPresent(this[_values].daysSupply)) {
      const klass = require('./Quantity');
      this[_values].daysSupply = new klass();
    }
    return this[_values].daysSupply;
  }

  set daysSupply(value) {
    const klass = require('./Quantity');
    return this[_values].daysSupply = new klass(value);
  }

  get whenPrepared() {
    return this[_values].whenPrepared;
  }

  set whenPrepared(value) {
    return this[_values].whenPrepared = value;
  }

  get _whenPrepared() {
    if (!isPresent(this[_values]._whenPrepared)) {
      const klass = require('./Element');
      this[_values]._whenPrepared = new klass();
    }
    return this[_values]._whenPrepared;
  }

  set _whenPrepared(value) {
    const klass = require('./Element');
    return this[_values]._whenPrepared = new klass(value);
  }

  get whenHandedOver() {
    return this[_values].whenHandedOver;
  }

  set whenHandedOver(value) {
    return this[_values].whenHandedOver = value;
  }

  get _whenHandedOver() {
    if (!isPresent(this[_values]._whenHandedOver)) {
      const klass = require('./Element');
      this[_values]._whenHandedOver = new klass();
    }
    return this[_values]._whenHandedOver;
  }

  set _whenHandedOver(value) {
    const klass = require('./Element');
    return this[_values]._whenHandedOver = new klass(value);
  }

  get destination() {
    if (!isPresent(this[_values].destination)) {
      const klass = require('./Reference');
      this[_values].destination = new klass();
    }
    return this[_values].destination;
  }

  set destination(value) {
    const klass = require('./Reference');
    return this[_values].destination = new klass(value);
  }

  get receiver() {
    if (!isPresent(this[_values].receiver)) {
      const klass = require('./Reference');
      this[_values].receiver = ArrayProxy(klass);
    }
    return this[_values].receiver;
  }

  set receiver(value) {
    const klass = require('./Reference');
    this[_values].receiver = ArrayProxy(klass);
    value.forEach(entry => this[_values].receiver.push(entry));
    return this[_values].receiver;
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

  get dosageInstruction() {
    if (!isPresent(this[_values].dosageInstruction)) {
      const klass = require('./Dosage');
      this[_values].dosageInstruction = ArrayProxy(klass);
    }
    return this[_values].dosageInstruction;
  }

  set dosageInstruction(value) {
    const klass = require('./Dosage');
    this[_values].dosageInstruction = ArrayProxy(klass);
    value.forEach(entry => this[_values].dosageInstruction.push(entry));
    return this[_values].dosageInstruction;
  }

  get substitution() {
    if (!isPresent(this[_values].substitution)) {
      const klass = require('./MedicationDispenseSubstitution');
      this[_values].substitution = new klass();
    }
    return this[_values].substitution;
  }

  set substitution(value) {
    const klass = require('./MedicationDispenseSubstitution');
    return this[_values].substitution = new klass(value);
  }

  get detectedIssue() {
    if (!isPresent(this[_values].detectedIssue)) {
      const klass = require('./Reference');
      this[_values].detectedIssue = ArrayProxy(klass);
    }
    return this[_values].detectedIssue;
  }

  set detectedIssue(value) {
    const klass = require('./Reference');
    this[_values].detectedIssue = ArrayProxy(klass);
    value.forEach(entry => this[_values].detectedIssue.push(entry));
    return this[_values].detectedIssue;
  }

  get notDone() {
    return this[_values].notDone;
  }

  set notDone(value) {
    return this[_values].notDone = value;
  }

  get _notDone() {
    if (!isPresent(this[_values]._notDone)) {
      const klass = require('./Element');
      this[_values]._notDone = new klass();
    }
    return this[_values]._notDone;
  }

  set _notDone(value) {
    const klass = require('./Element');
    return this[_values]._notDone = new klass(value);
  }

  get notDoneReasonCodeableConcept() {
    if (!isPresent(this[_values].notDoneReasonCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].notDoneReasonCodeableConcept = new klass();
    }
    return this[_values].notDoneReasonCodeableConcept;
  }

  set notDoneReasonCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].notDoneReasonCodeableConcept = new klass(value);
  }

  get notDoneReasonReference() {
    if (!isPresent(this[_values].notDoneReasonReference)) {
      const klass = require('./Reference');
      this[_values].notDoneReasonReference = new klass();
    }
    return this[_values].notDoneReasonReference;
  }

  set notDoneReasonReference(value) {
    const klass = require('./Reference');
    return this[_values].notDoneReasonReference = new klass(value);
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

module.exports = MedicationDispense;

