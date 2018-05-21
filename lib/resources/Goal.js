const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Goal extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Goal || values instanceof DomainResource) {
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

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = ArrayProxy(klass);
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    this[_values].category = ArrayProxy(klass);
    value.forEach(entry => this[_values].category.push(entry));
    return this[_values].category;
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

  get description() {
    if (!isPresent(this[_values].description)) {
      const klass = require('./CodeableConcept');
      this[_values].description = new klass();
    }
    return this[_values].description;
  }

  set description(value) {
    const klass = require('./CodeableConcept');
    return this[_values].description = new klass(value);
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

  get startDate() {
    return this[_values].startDate;
  }

  set startDate(value) {
    return this[_values].startDate = value;
  }

  get _startDate() {
    if (!isPresent(this[_values]._startDate)) {
      const klass = require('./Element');
      this[_values]._startDate = new klass();
    }
    return this[_values]._startDate;
  }

  set _startDate(value) {
    const klass = require('./Element');
    return this[_values]._startDate = new klass(value);
  }

  get startCodeableConcept() {
    if (!isPresent(this[_values].startCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].startCodeableConcept = new klass();
    }
    return this[_values].startCodeableConcept;
  }

  set startCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].startCodeableConcept = new klass(value);
  }

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./Goal_Target');
      this[_values].target = new klass();
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./Goal_Target');
    return this[_values].target = new klass(value);
  }

  get statusDate() {
    return this[_values].statusDate;
  }

  set statusDate(value) {
    return this[_values].statusDate = value;
  }

  get _statusDate() {
    if (!isPresent(this[_values]._statusDate)) {
      const klass = require('./Element');
      this[_values]._statusDate = new klass();
    }
    return this[_values]._statusDate;
  }

  set _statusDate(value) {
    const klass = require('./Element');
    return this[_values]._statusDate = new klass(value);
  }

  get statusReason() {
    return this[_values].statusReason;
  }

  set statusReason(value) {
    return this[_values].statusReason = value;
  }

  get _statusReason() {
    if (!isPresent(this[_values]._statusReason)) {
      const klass = require('./Element');
      this[_values]._statusReason = new klass();
    }
    return this[_values]._statusReason;
  }

  set _statusReason(value) {
    const klass = require('./Element');
    return this[_values]._statusReason = new klass(value);
  }

  get expressedBy() {
    if (!isPresent(this[_values].expressedBy)) {
      const klass = require('./Reference');
      this[_values].expressedBy = new klass();
    }
    return this[_values].expressedBy;
  }

  set expressedBy(value) {
    const klass = require('./Reference');
    return this[_values].expressedBy = new klass(value);
  }

  get addresses() {
    if (!isPresent(this[_values].addresses)) {
      const klass = require('./Reference');
      this[_values].addresses = ArrayProxy(klass);
    }
    return this[_values].addresses;
  }

  set addresses(value) {
    const klass = require('./Reference');
    this[_values].addresses = ArrayProxy(klass);
    value.forEach(entry => this[_values].addresses.push(entry));
    return this[_values].addresses;
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

  get outcomeCode() {
    if (!isPresent(this[_values].outcomeCode)) {
      const klass = require('./CodeableConcept');
      this[_values].outcomeCode = ArrayProxy(klass);
    }
    return this[_values].outcomeCode;
  }

  set outcomeCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].outcomeCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].outcomeCode.push(entry));
    return this[_values].outcomeCode;
  }

  get outcomeReference() {
    if (!isPresent(this[_values].outcomeReference)) {
      const klass = require('./Reference');
      this[_values].outcomeReference = ArrayProxy(klass);
    }
    return this[_values].outcomeReference;
  }

  set outcomeReference(value) {
    const klass = require('./Reference');
    this[_values].outcomeReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].outcomeReference.push(entry));
    return this[_values].outcomeReference;
  }
}

module.exports = Goal;

