const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Encounter extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Encounter || values instanceof DomainResource) {
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

  get statusHistory() {
    if (!isPresent(this[_values].statusHistory)) {
      const klass = require('./EncounterStatusHistory');
      this[_values].statusHistory = ArrayProxy(klass);
    }
    return this[_values].statusHistory;
  }

  set statusHistory(value) {
    const klass = require('./EncounterStatusHistory');
    this[_values].statusHistory = ArrayProxy(klass);
    value.forEach(entry => this[_values].statusHistory.push(entry));
    return this[_values].statusHistory;
  }

  get class() {
    if (!isPresent(this[_values].class)) {
      const klass = require('./Coding');
      this[_values].class = new klass();
    }
    return this[_values].class;
  }

  set class(value) {
    const klass = require('./Coding');
    return this[_values].class = new klass(value);
  }

  get classHistory() {
    if (!isPresent(this[_values].classHistory)) {
      const klass = require('./EncounterClassHistory');
      this[_values].classHistory = ArrayProxy(klass);
    }
    return this[_values].classHistory;
  }

  set classHistory(value) {
    const klass = require('./EncounterClassHistory');
    this[_values].classHistory = ArrayProxy(klass);
    value.forEach(entry => this[_values].classHistory.push(entry));
    return this[_values].classHistory;
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

  get priority() {
    if (!isPresent(this[_values].priority)) {
      const klass = require('./CodeableConcept');
      this[_values].priority = new klass();
    }
    return this[_values].priority;
  }

  set priority(value) {
    const klass = require('./CodeableConcept');
    return this[_values].priority = new klass(value);
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

  get episodeOfCare() {
    if (!isPresent(this[_values].episodeOfCare)) {
      const klass = require('./Reference');
      this[_values].episodeOfCare = ArrayProxy(klass);
    }
    return this[_values].episodeOfCare;
  }

  set episodeOfCare(value) {
    const klass = require('./Reference');
    this[_values].episodeOfCare = ArrayProxy(klass);
    value.forEach(entry => this[_values].episodeOfCare.push(entry));
    return this[_values].episodeOfCare;
  }

  get incomingReferral() {
    if (!isPresent(this[_values].incomingReferral)) {
      const klass = require('./Reference');
      this[_values].incomingReferral = ArrayProxy(klass);
    }
    return this[_values].incomingReferral;
  }

  set incomingReferral(value) {
    const klass = require('./Reference');
    this[_values].incomingReferral = ArrayProxy(klass);
    value.forEach(entry => this[_values].incomingReferral.push(entry));
    return this[_values].incomingReferral;
  }

  get participant() {
    if (!isPresent(this[_values].participant)) {
      const klass = require('./EncounterParticipant');
      this[_values].participant = ArrayProxy(klass);
    }
    return this[_values].participant;
  }

  set participant(value) {
    const klass = require('./EncounterParticipant');
    this[_values].participant = ArrayProxy(klass);
    value.forEach(entry => this[_values].participant.push(entry));
    return this[_values].participant;
  }

  get appointment() {
    if (!isPresent(this[_values].appointment)) {
      const klass = require('./Reference');
      this[_values].appointment = new klass();
    }
    return this[_values].appointment;
  }

  set appointment(value) {
    const klass = require('./Reference');
    return this[_values].appointment = new klass(value);
  }

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }

  get length() {
    if (!isPresent(this[_values].length)) {
      const klass = require('./Duration');
      this[_values].length = new klass();
    }
    return this[_values].length;
  }

  set length(value) {
    const klass = require('./Duration');
    return this[_values].length = new klass(value);
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

  get diagnosis() {
    if (!isPresent(this[_values].diagnosis)) {
      const klass = require('./EncounterDiagnosis');
      this[_values].diagnosis = ArrayProxy(klass);
    }
    return this[_values].diagnosis;
  }

  set diagnosis(value) {
    const klass = require('./EncounterDiagnosis');
    this[_values].diagnosis = ArrayProxy(klass);
    value.forEach(entry => this[_values].diagnosis.push(entry));
    return this[_values].diagnosis;
  }

  get account() {
    if (!isPresent(this[_values].account)) {
      const klass = require('./Reference');
      this[_values].account = ArrayProxy(klass);
    }
    return this[_values].account;
  }

  set account(value) {
    const klass = require('./Reference');
    this[_values].account = ArrayProxy(klass);
    value.forEach(entry => this[_values].account.push(entry));
    return this[_values].account;
  }

  get hospitalization() {
    if (!isPresent(this[_values].hospitalization)) {
      const klass = require('./EncounterHospitalization');
      this[_values].hospitalization = new klass();
    }
    return this[_values].hospitalization;
  }

  set hospitalization(value) {
    const klass = require('./EncounterHospitalization');
    return this[_values].hospitalization = new klass(value);
  }

  get location() {
    if (!isPresent(this[_values].location)) {
      const klass = require('./EncounterLocation');
      this[_values].location = ArrayProxy(klass);
    }
    return this[_values].location;
  }

  set location(value) {
    const klass = require('./EncounterLocation');
    this[_values].location = ArrayProxy(klass);
    value.forEach(entry => this[_values].location.push(entry));
    return this[_values].location;
  }

  get serviceProvider() {
    if (!isPresent(this[_values].serviceProvider)) {
      const klass = require('./Reference');
      this[_values].serviceProvider = new klass();
    }
    return this[_values].serviceProvider;
  }

  set serviceProvider(value) {
    const klass = require('./Reference');
    return this[_values].serviceProvider = new klass(value);
  }

  get partOf() {
    if (!isPresent(this[_values].partOf)) {
      const klass = require('./Reference');
      this[_values].partOf = new klass();
    }
    return this[_values].partOf;
  }

  set partOf(value) {
    const klass = require('./Reference');
    return this[_values].partOf = new klass(value);
  }
}

module.exports = Encounter;

