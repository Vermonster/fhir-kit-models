const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class DeviceRequest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DeviceRequest || values instanceof DomainResource) {
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

  get priorRequest() {
    if (!isPresent(this[_values].priorRequest)) {
      const klass = require('./Reference');
      this[_values].priorRequest = ArrayProxy(klass);
    }
    return this[_values].priorRequest;
  }

  set priorRequest(value) {
    const klass = require('./Reference');
    this[_values].priorRequest = ArrayProxy(klass);
    value.forEach(entry => this[_values].priorRequest.push(entry));
    return this[_values].priorRequest;
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
    if (!isPresent(this[_values].intent)) {
      const klass = require('./CodeableConcept');
      this[_values].intent = new klass();
    }
    return this[_values].intent;
  }

  set intent(value) {
    const klass = require('./CodeableConcept');
    return this[_values].intent = new klass(value);
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

  get codeReference() {
    if (!isPresent(this[_values].codeReference)) {
      const klass = require('./Reference');
      this[_values].codeReference = new klass();
    }
    return this[_values].codeReference;
  }

  set codeReference(value) {
    const klass = require('./Reference');
    return this[_values].codeReference = new klass(value);
  }

  get codeCodeableConcept() {
    if (!isPresent(this[_values].codeCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].codeCodeableConcept = new klass();
    }
    return this[_values].codeCodeableConcept;
  }

  set codeCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].codeCodeableConcept = new klass(value);
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

  get occurrenceDateTime() {
    return this[_values].occurrenceDateTime;
  }

  set occurrenceDateTime(value) {
    return this[_values].occurrenceDateTime = value;
  }

  get _occurrenceDateTime() {
    if (!isPresent(this[_values]._occurrenceDateTime)) {
      const klass = require('./Element');
      this[_values]._occurrenceDateTime = new klass();
    }
    return this[_values]._occurrenceDateTime;
  }

  set _occurrenceDateTime(value) {
    const klass = require('./Element');
    return this[_values]._occurrenceDateTime = new klass(value);
  }

  get occurrencePeriod() {
    if (!isPresent(this[_values].occurrencePeriod)) {
      const klass = require('./Period');
      this[_values].occurrencePeriod = new klass();
    }
    return this[_values].occurrencePeriod;
  }

  set occurrencePeriod(value) {
    const klass = require('./Period');
    return this[_values].occurrencePeriod = new klass(value);
  }

  get occurrenceTiming() {
    if (!isPresent(this[_values].occurrenceTiming)) {
      const klass = require('./Timing');
      this[_values].occurrenceTiming = new klass();
    }
    return this[_values].occurrenceTiming;
  }

  set occurrenceTiming(value) {
    const klass = require('./Timing');
    return this[_values].occurrenceTiming = new klass(value);
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
      const klass = require('./DeviceRequestRequester');
      this[_values].requester = new klass();
    }
    return this[_values].requester;
  }

  set requester(value) {
    const klass = require('./DeviceRequestRequester');
    return this[_values].requester = new klass(value);
  }

  get performerType() {
    if (!isPresent(this[_values].performerType)) {
      const klass = require('./CodeableConcept');
      this[_values].performerType = new klass();
    }
    return this[_values].performerType;
  }

  set performerType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].performerType = new klass(value);
  }

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./Reference');
      this[_values].performer = new klass();
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./Reference');
    return this[_values].performer = new klass(value);
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

  get supportingInfo() {
    if (!isPresent(this[_values].supportingInfo)) {
      const klass = require('./Reference');
      this[_values].supportingInfo = ArrayProxy(klass);
    }
    return this[_values].supportingInfo;
  }

  set supportingInfo(value) {
    const klass = require('./Reference');
    this[_values].supportingInfo = ArrayProxy(klass);
    value.forEach(entry => this[_values].supportingInfo.push(entry));
    return this[_values].supportingInfo;
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

  get relevantHistory() {
    if (!isPresent(this[_values].relevantHistory)) {
      const klass = require('./Reference');
      this[_values].relevantHistory = ArrayProxy(klass);
    }
    return this[_values].relevantHistory;
  }

  set relevantHistory(value) {
    const klass = require('./Reference');
    this[_values].relevantHistory = ArrayProxy(klass);
    value.forEach(entry => this[_values].relevantHistory.push(entry));
    return this[_values].relevantHistory;
  }
}

module.exports = DeviceRequest;

