const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Consent extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Consent || values instanceof DomainResource) {
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

  get patient() {
    if (!isPresent(this[_values].patient)) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }

  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
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

  get dateTime() {
    return this[_values].dateTime;
  }

  set dateTime(value) {
    return this[_values].dateTime = value;
  }

  get _dateTime() {
    if (!isPresent(this[_values]._dateTime)) {
      const klass = require('./Element');
      this[_values]._dateTime = new klass();
    }
    return this[_values]._dateTime;
  }

  set _dateTime(value) {
    const klass = require('./Element');
    return this[_values]._dateTime = new klass(value);
  }

  get consentingParty() {
    if (!isPresent(this[_values].consentingParty)) {
      const klass = require('./Reference');
      this[_values].consentingParty = ArrayProxy(klass);
    }
    return this[_values].consentingParty;
  }

  set consentingParty(value) {
    const klass = require('./Reference');
    this[_values].consentingParty = ArrayProxy(klass);
    value.forEach(entry => this[_values].consentingParty.push(entry));
    return this[_values].consentingParty;
  }

  get actor() {
    if (!isPresent(this[_values].actor)) {
      const klass = require('./Consent_Actor');
      this[_values].actor = ArrayProxy(klass);
    }
    return this[_values].actor;
  }

  set actor(value) {
    const klass = require('./Consent_Actor');
    this[_values].actor = ArrayProxy(klass);
    value.forEach(entry => this[_values].actor.push(entry));
    return this[_values].actor;
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./CodeableConcept');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./CodeableConcept');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }

  get organization() {
    if (!isPresent(this[_values].organization)) {
      const klass = require('./Reference');
      this[_values].organization = ArrayProxy(klass);
    }
    return this[_values].organization;
  }

  set organization(value) {
    const klass = require('./Reference');
    this[_values].organization = ArrayProxy(klass);
    value.forEach(entry => this[_values].organization.push(entry));
    return this[_values].organization;
  }

  get sourceAttachment() {
    if (!isPresent(this[_values].sourceAttachment)) {
      const klass = require('./Attachment');
      this[_values].sourceAttachment = new klass();
    }
    return this[_values].sourceAttachment;
  }

  set sourceAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].sourceAttachment = new klass(value);
  }

  get sourceIdentifier() {
    if (!isPresent(this[_values].sourceIdentifier)) {
      const klass = require('./Identifier');
      this[_values].sourceIdentifier = new klass();
    }
    return this[_values].sourceIdentifier;
  }

  set sourceIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].sourceIdentifier = new klass(value);
  }

  get sourceReference() {
    if (!isPresent(this[_values].sourceReference)) {
      const klass = require('./Reference');
      this[_values].sourceReference = new klass();
    }
    return this[_values].sourceReference;
  }

  set sourceReference(value) {
    const klass = require('./Reference');
    return this[_values].sourceReference = new klass(value);
  }

  get policy() {
    if (!isPresent(this[_values].policy)) {
      const klass = require('./Consent_Policy');
      this[_values].policy = ArrayProxy(klass);
    }
    return this[_values].policy;
  }

  set policy(value) {
    const klass = require('./Consent_Policy');
    this[_values].policy = ArrayProxy(klass);
    value.forEach(entry => this[_values].policy.push(entry));
    return this[_values].policy;
  }

  get policyRule() {
    return this[_values].policyRule;
  }

  set policyRule(value) {
    return this[_values].policyRule = value;
  }

  get _policyRule() {
    if (!isPresent(this[_values]._policyRule)) {
      const klass = require('./Element');
      this[_values]._policyRule = new klass();
    }
    return this[_values]._policyRule;
  }

  set _policyRule(value) {
    const klass = require('./Element');
    return this[_values]._policyRule = new klass(value);
  }

  get securityLabel() {
    if (!isPresent(this[_values].securityLabel)) {
      const klass = require('./Coding');
      this[_values].securityLabel = ArrayProxy(klass);
    }
    return this[_values].securityLabel;
  }

  set securityLabel(value) {
    const klass = require('./Coding');
    this[_values].securityLabel = ArrayProxy(klass);
    value.forEach(entry => this[_values].securityLabel.push(entry));
    return this[_values].securityLabel;
  }

  get purpose() {
    if (!isPresent(this[_values].purpose)) {
      const klass = require('./Coding');
      this[_values].purpose = ArrayProxy(klass);
    }
    return this[_values].purpose;
  }

  set purpose(value) {
    const klass = require('./Coding');
    this[_values].purpose = ArrayProxy(klass);
    value.forEach(entry => this[_values].purpose.push(entry));
    return this[_values].purpose;
  }

  get dataPeriod() {
    if (!isPresent(this[_values].dataPeriod)) {
      const klass = require('./Period');
      this[_values].dataPeriod = new klass();
    }
    return this[_values].dataPeriod;
  }

  set dataPeriod(value) {
    const klass = require('./Period');
    return this[_values].dataPeriod = new klass(value);
  }

  get data() {
    if (!isPresent(this[_values].data)) {
      const klass = require('./Consent_Data');
      this[_values].data = ArrayProxy(klass);
    }
    return this[_values].data;
  }

  set data(value) {
    const klass = require('./Consent_Data');
    this[_values].data = ArrayProxy(klass);
    value.forEach(entry => this[_values].data.push(entry));
    return this[_values].data;
  }

  get except() {
    if (!isPresent(this[_values].except)) {
      const klass = require('./Consent_Except');
      this[_values].except = ArrayProxy(klass);
    }
    return this[_values].except;
  }

  set except(value) {
    const klass = require('./Consent_Except');
    this[_values].except = ArrayProxy(klass);
    value.forEach(entry => this[_values].except.push(entry));
    return this[_values].except;
  }
}

module.exports = Consent;

