const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class MedicationRequest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'MedicationRequest';
    if (values instanceof MedicationRequest ||
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

  get groupIdentifier() {
    if (!isPresent(this[_values].groupIdentifier)) {
      const klass = require('./Identifier');
      this[_values].groupIdentifier = new klass();
    }
    return this[_values].groupIdentifier;
  }

  set groupIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].groupIdentifier = new klass(value);
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

  get intent() {
    return this[_values].intent;
  }

  set intent(value) {
    return this[_values].intent = value;
  }

  get _intent() {
    if (!isPresent(this[_values]._intent)) {
      const klass = require('./Element');
      this[_values]._intent = new klass();
    }
    return this[_values]._intent;
  }

  set _intent(value) {
    const klass = require('./Element');
    return this[_values]._intent = new klass(value);
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

  get priority() {
    return this[_values].priority;
  }

  set priority(value) {
    return this[_values].priority = value;
  }

  get _priority() {
    if (!isPresent(this[_values]._priority)) {
      const klass = require('./Element');
      this[_values]._priority = new klass();
    }
    return this[_values]._priority;
  }

  set _priority(value) {
    const klass = require('./Element');
    return this[_values]._priority = new klass(value);
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

  get authoredOn() {
    return this[_values].authoredOn;
  }

  set authoredOn(value) {
    return this[_values].authoredOn = value;
  }

  get _authoredOn() {
    if (!isPresent(this[_values]._authoredOn)) {
      const klass = require('./Element');
      this[_values]._authoredOn = new klass();
    }
    return this[_values]._authoredOn;
  }

  set _authoredOn(value) {
    const klass = require('./Element');
    return this[_values]._authoredOn = new klass(value);
  }

  get requester() {
    if (!isPresent(this[_values].requester)) {
      const klass = require('./MedicationRequestRequester');
      this[_values].requester = new klass();
    }
    return this[_values].requester;
  }

  set requester(value) {
    const klass = require('./MedicationRequestRequester');
    return this[_values].requester = new klass(value);
  }

  get recorder() {
    if (!isPresent(this[_values].recorder)) {
      const klass = require('./Reference');
      this[_values].recorder = new klass();
    }
    return this[_values].recorder;
  }

  set recorder(value) {
    const klass = require('./Reference');
    return this[_values].recorder = new klass(value);
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

  get dispenseRequest() {
    if (!isPresent(this[_values].dispenseRequest)) {
      const klass = require('./MedicationRequestDispenseRequest');
      this[_values].dispenseRequest = new klass();
    }
    return this[_values].dispenseRequest;
  }

  set dispenseRequest(value) {
    const klass = require('./MedicationRequestDispenseRequest');
    return this[_values].dispenseRequest = new klass(value);
  }

  get substitution() {
    if (!isPresent(this[_values].substitution)) {
      const klass = require('./MedicationRequestSubstitution');
      this[_values].substitution = new klass();
    }
    return this[_values].substitution;
  }

  set substitution(value) {
    const klass = require('./MedicationRequestSubstitution');
    return this[_values].substitution = new klass(value);
  }

  get priorPrescription() {
    if (!isPresent(this[_values].priorPrescription)) {
      const klass = require('./Reference');
      this[_values].priorPrescription = new klass();
    }
    return this[_values].priorPrescription;
  }

  set priorPrescription(value) {
    const klass = require('./Reference');
    return this[_values].priorPrescription = new klass(value);
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

module.exports = MedicationRequest;
