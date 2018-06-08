const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ChargeItem extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'ChargeItem';
    if (values instanceof ChargeItem ||
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
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get definition() {
    return this[_values].definition;
  }

  set definition(value) {
    return this[_values].definition = value;
  }

  get _definition() {
    if (!isPresent(this[_values]._definition)) {
      const klass = require('./Element');
      this[_values]._definition = ArrayProxy(klass);
    }
    return this[_values]._definition;
  }

  set _definition(value) {
    const klass = require('./Element');
    this[_values]._definition = ArrayProxy(klass);
    value.forEach(entry => this[_values]._definition.push(entry));
    return this[_values]._definition;
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

  get participant() {
    if (!isPresent(this[_values].participant)) {
      const klass = require('./ChargeItemParticipant');
      this[_values].participant = ArrayProxy(klass);
    }
    return this[_values].participant;
  }

  set participant(value) {
    const klass = require('./ChargeItemParticipant');
    this[_values].participant = ArrayProxy(klass);
    value.forEach(entry => this[_values].participant.push(entry));
    return this[_values].participant;
  }

  get performingOrganization() {
    if (!isPresent(this[_values].performingOrganization)) {
      const klass = require('./Reference');
      this[_values].performingOrganization = new klass();
    }
    return this[_values].performingOrganization;
  }

  set performingOrganization(value) {
    const klass = require('./Reference');
    return this[_values].performingOrganization = new klass(value);
  }

  get requestingOrganization() {
    if (!isPresent(this[_values].requestingOrganization)) {
      const klass = require('./Reference');
      this[_values].requestingOrganization = new klass();
    }
    return this[_values].requestingOrganization;
  }

  set requestingOrganization(value) {
    const klass = require('./Reference');
    return this[_values].requestingOrganization = new klass(value);
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

  get bodysite() {
    if (!isPresent(this[_values].bodysite)) {
      const klass = require('./CodeableConcept');
      this[_values].bodysite = ArrayProxy(klass);
    }
    return this[_values].bodysite;
  }

  set bodysite(value) {
    const klass = require('./CodeableConcept');
    this[_values].bodysite = ArrayProxy(klass);
    value.forEach(entry => this[_values].bodysite.push(entry));
    return this[_values].bodysite;
  }

  get factorOverride() {
    return this[_values].factorOverride;
  }

  set factorOverride(value) {
    return this[_values].factorOverride = value;
  }

  get _factorOverride() {
    if (!isPresent(this[_values]._factorOverride)) {
      const klass = require('./Element');
      this[_values]._factorOverride = new klass();
    }
    return this[_values]._factorOverride;
  }

  set _factorOverride(value) {
    const klass = require('./Element');
    return this[_values]._factorOverride = new klass(value);
  }

  get priceOverride() {
    if (!isPresent(this[_values].priceOverride)) {
      const klass = require('./Money');
      this[_values].priceOverride = new klass();
    }
    return this[_values].priceOverride;
  }

  set priceOverride(value) {
    const klass = require('./Money');
    return this[_values].priceOverride = new klass(value);
  }

  get overrideReason() {
    return this[_values].overrideReason;
  }

  set overrideReason(value) {
    return this[_values].overrideReason = value;
  }

  get _overrideReason() {
    if (!isPresent(this[_values]._overrideReason)) {
      const klass = require('./Element');
      this[_values]._overrideReason = new klass();
    }
    return this[_values]._overrideReason;
  }

  set _overrideReason(value) {
    const klass = require('./Element');
    return this[_values]._overrideReason = new klass(value);
  }

  get enterer() {
    if (!isPresent(this[_values].enterer)) {
      const klass = require('./Reference');
      this[_values].enterer = new klass();
    }
    return this[_values].enterer;
  }

  set enterer(value) {
    const klass = require('./Reference');
    return this[_values].enterer = new klass(value);
  }

  get enteredDate() {
    return this[_values].enteredDate;
  }

  set enteredDate(value) {
    return this[_values].enteredDate = value;
  }

  get _enteredDate() {
    if (!isPresent(this[_values]._enteredDate)) {
      const klass = require('./Element');
      this[_values]._enteredDate = new klass();
    }
    return this[_values]._enteredDate;
  }

  set _enteredDate(value) {
    const klass = require('./Element');
    return this[_values]._enteredDate = new klass(value);
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

  get service() {
    if (!isPresent(this[_values].service)) {
      const klass = require('./Reference');
      this[_values].service = ArrayProxy(klass);
    }
    return this[_values].service;
  }

  set service(value) {
    const klass = require('./Reference');
    this[_values].service = ArrayProxy(klass);
    value.forEach(entry => this[_values].service.push(entry));
    return this[_values].service;
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
}

module.exports = ChargeItem;

