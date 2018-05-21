const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Task extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'Task';
    if (values instanceof Task ||
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

  get definitionUri() {
    return this[_values].definitionUri;
  }

  set definitionUri(value) {
    return this[_values].definitionUri = value;
  }

  get _definitionUri() {
    if (!isPresent(this[_values]._definitionUri)) {
      const klass = require('./Element');
      this[_values]._definitionUri = new klass();
    }
    return this[_values]._definitionUri;
  }

  set _definitionUri(value) {
    const klass = require('./Element');
    return this[_values]._definitionUri = new klass(value);
  }

  get definitionReference() {
    if (!isPresent(this[_values].definitionReference)) {
      const klass = require('./Reference');
      this[_values].definitionReference = new klass();
    }
    return this[_values].definitionReference;
  }

  set definitionReference(value) {
    const klass = require('./Reference');
    return this[_values].definitionReference = new klass(value);
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

  get statusReason() {
    if (!isPresent(this[_values].statusReason)) {
      const klass = require('./CodeableConcept');
      this[_values].statusReason = new klass();
    }
    return this[_values].statusReason;
  }

  set statusReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].statusReason = new klass(value);
  }

  get businessStatus() {
    if (!isPresent(this[_values].businessStatus)) {
      const klass = require('./CodeableConcept');
      this[_values].businessStatus = new klass();
    }
    return this[_values].businessStatus;
  }

  set businessStatus(value) {
    const klass = require('./CodeableConcept');
    return this[_values].businessStatus = new klass(value);
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

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
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

  get focus() {
    if (!isPresent(this[_values].focus)) {
      const klass = require('./Reference');
      this[_values].focus = new klass();
    }
    return this[_values].focus;
  }

  set focus(value) {
    const klass = require('./Reference');
    return this[_values].focus = new klass(value);
  }

  get for() {
    if (!isPresent(this[_values].for)) {
      const klass = require('./Reference');
      this[_values].for = new klass();
    }
    return this[_values].for;
  }

  set for(value) {
    const klass = require('./Reference');
    return this[_values].for = new klass(value);
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

  get executionPeriod() {
    if (!isPresent(this[_values].executionPeriod)) {
      const klass = require('./Period');
      this[_values].executionPeriod = new klass();
    }
    return this[_values].executionPeriod;
  }

  set executionPeriod(value) {
    const klass = require('./Period');
    return this[_values].executionPeriod = new klass(value);
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

  get lastModified() {
    return this[_values].lastModified;
  }

  set lastModified(value) {
    return this[_values].lastModified = value;
  }

  get _lastModified() {
    if (!isPresent(this[_values]._lastModified)) {
      const klass = require('./Element');
      this[_values]._lastModified = new klass();
    }
    return this[_values]._lastModified;
  }

  set _lastModified(value) {
    const klass = require('./Element');
    return this[_values]._lastModified = new klass(value);
  }

  get requester() {
    if (!isPresent(this[_values].requester)) {
      const klass = require('./TaskRequester');
      this[_values].requester = new klass();
    }
    return this[_values].requester;
  }

  set requester(value) {
    const klass = require('./TaskRequester');
    return this[_values].requester = new klass(value);
  }

  get performerType() {
    if (!isPresent(this[_values].performerType)) {
      const klass = require('./CodeableConcept');
      this[_values].performerType = ArrayProxy(klass);
    }
    return this[_values].performerType;
  }

  set performerType(value) {
    const klass = require('./CodeableConcept');
    this[_values].performerType = ArrayProxy(klass);
    value.forEach(entry => this[_values].performerType.push(entry));
    return this[_values].performerType;
  }

  get owner() {
    if (!isPresent(this[_values].owner)) {
      const klass = require('./Reference');
      this[_values].owner = new klass();
    }
    return this[_values].owner;
  }

  set owner(value) {
    const klass = require('./Reference');
    return this[_values].owner = new klass(value);
  }

  get reason() {
    if (!isPresent(this[_values].reason)) {
      const klass = require('./CodeableConcept');
      this[_values].reason = new klass();
    }
    return this[_values].reason;
  }

  set reason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reason = new klass(value);
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

  get restriction() {
    if (!isPresent(this[_values].restriction)) {
      const klass = require('./TaskRestriction');
      this[_values].restriction = new klass();
    }
    return this[_values].restriction;
  }

  set restriction(value) {
    const klass = require('./TaskRestriction');
    return this[_values].restriction = new klass(value);
  }

  get input() {
    if (!isPresent(this[_values].input)) {
      const klass = require('./TaskInput');
      this[_values].input = ArrayProxy(klass);
    }
    return this[_values].input;
  }

  set input(value) {
    const klass = require('./TaskInput');
    this[_values].input = ArrayProxy(klass);
    value.forEach(entry => this[_values].input.push(entry));
    return this[_values].input;
  }

  get output() {
    if (!isPresent(this[_values].output)) {
      const klass = require('./TaskOutput');
      this[_values].output = ArrayProxy(klass);
    }
    return this[_values].output;
  }

  set output(value) {
    const klass = require('./TaskOutput');
    this[_values].output = ArrayProxy(klass);
    value.forEach(entry => this[_values].output.push(entry));
    return this[_values].output;
  }
}

module.exports = Task;

