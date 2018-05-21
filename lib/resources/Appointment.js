const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Appointment extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Appointment || values instanceof DomainResource) {
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

  get serviceCategory() {
    if (!isPresent(this[_values].serviceCategory)) {
      const klass = require('./CodeableConcept');
      this[_values].serviceCategory = new klass();
    }
    return this[_values].serviceCategory;
  }

  set serviceCategory(value) {
    const klass = require('./CodeableConcept');
    return this[_values].serviceCategory = new klass(value);
  }

  get serviceType() {
    if (!isPresent(this[_values].serviceType)) {
      const klass = require('./CodeableConcept');
      this[_values].serviceType = ArrayProxy(klass);
    }
    return this[_values].serviceType;
  }

  set serviceType(value) {
    const klass = require('./CodeableConcept');
    this[_values].serviceType = ArrayProxy(klass);
    value.forEach(entry => this[_values].serviceType.push(entry));
    return this[_values].serviceType;
  }

  get specialty() {
    if (!isPresent(this[_values].specialty)) {
      const klass = require('./CodeableConcept');
      this[_values].specialty = ArrayProxy(klass);
    }
    return this[_values].specialty;
  }

  set specialty(value) {
    const klass = require('./CodeableConcept');
    this[_values].specialty = ArrayProxy(klass);
    value.forEach(entry => this[_values].specialty.push(entry));
    return this[_values].specialty;
  }

  get appointmentType() {
    if (!isPresent(this[_values].appointmentType)) {
      const klass = require('./CodeableConcept');
      this[_values].appointmentType = new klass();
    }
    return this[_values].appointmentType;
  }

  set appointmentType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].appointmentType = new klass(value);
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

  get indication() {
    if (!isPresent(this[_values].indication)) {
      const klass = require('./Reference');
      this[_values].indication = ArrayProxy(klass);
    }
    return this[_values].indication;
  }

  set indication(value) {
    const klass = require('./Reference');
    this[_values].indication = ArrayProxy(klass);
    value.forEach(entry => this[_values].indication.push(entry));
    return this[_values].indication;
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

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
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

  get start() {
    return this[_values].start;
  }

  set start(value) {
    return this[_values].start = value;
  }

  get _start() {
    if (!isPresent(this[_values]._start)) {
      const klass = require('./Element');
      this[_values]._start = new klass();
    }
    return this[_values]._start;
  }

  set _start(value) {
    const klass = require('./Element');
    return this[_values]._start = new klass(value);
  }

  get end() {
    return this[_values].end;
  }

  set end(value) {
    return this[_values].end = value;
  }

  get _end() {
    if (!isPresent(this[_values]._end)) {
      const klass = require('./Element');
      this[_values]._end = new klass();
    }
    return this[_values]._end;
  }

  set _end(value) {
    const klass = require('./Element');
    return this[_values]._end = new klass(value);
  }

  get minutesDuration() {
    return this[_values].minutesDuration;
  }

  set minutesDuration(value) {
    return this[_values].minutesDuration = value;
  }

  get _minutesDuration() {
    if (!isPresent(this[_values]._minutesDuration)) {
      const klass = require('./Element');
      this[_values]._minutesDuration = new klass();
    }
    return this[_values]._minutesDuration;
  }

  set _minutesDuration(value) {
    const klass = require('./Element');
    return this[_values]._minutesDuration = new klass(value);
  }

  get slot() {
    if (!isPresent(this[_values].slot)) {
      const klass = require('./Reference');
      this[_values].slot = ArrayProxy(klass);
    }
    return this[_values].slot;
  }

  set slot(value) {
    const klass = require('./Reference');
    this[_values].slot = ArrayProxy(klass);
    value.forEach(entry => this[_values].slot.push(entry));
    return this[_values].slot;
  }

  get created() {
    return this[_values].created;
  }

  set created(value) {
    return this[_values].created = value;
  }

  get _created() {
    if (!isPresent(this[_values]._created)) {
      const klass = require('./Element');
      this[_values]._created = new klass();
    }
    return this[_values]._created;
  }

  set _created(value) {
    const klass = require('./Element');
    return this[_values]._created = new klass(value);
  }

  get comment() {
    return this[_values].comment;
  }

  set comment(value) {
    return this[_values].comment = value;
  }

  get _comment() {
    if (!isPresent(this[_values]._comment)) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }

  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
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
      const klass = require('./AppointmentParticipant');
      this[_values].participant = ArrayProxy(klass);
    }
    return this[_values].participant;
  }

  set participant(value) {
    const klass = require('./AppointmentParticipant');
    this[_values].participant = ArrayProxy(klass);
    value.forEach(entry => this[_values].participant.push(entry));
    return this[_values].participant;
  }

  get requestedPeriod() {
    if (!isPresent(this[_values].requestedPeriod)) {
      const klass = require('./Period');
      this[_values].requestedPeriod = ArrayProxy(klass);
    }
    return this[_values].requestedPeriod;
  }

  set requestedPeriod(value) {
    const klass = require('./Period');
    this[_values].requestedPeriod = ArrayProxy(klass);
    value.forEach(entry => this[_values].requestedPeriod.push(entry));
    return this[_values].requestedPeriod;
  }
}

module.exports = Appointment;

