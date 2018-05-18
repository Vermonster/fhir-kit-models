const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class EpisodeOfCare extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof EpisodeOfCare || values instanceof DomainResource) {
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
    if (!this[_values].identifier) {
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
    if (!this[_values]._status) {
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
    if (!this[_values].statusHistory) {
      const klass = require('./EpisodeOfCare_StatusHistory');
      this[_values].statusHistory = ArrayProxy(klass);
    }
    return this[_values].statusHistory;
  }
  set statusHistory(value) {
    const klass = require('./EpisodeOfCare_StatusHistory');
    this[_values].statusHistory = ArrayProxy(klass);
    value.forEach(entry => this[_values].statusHistory.push(entry));
    return this[_values].statusHistory;
  }
  get type() {
    if (!this[_values].type) {
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
  get diagnosis() {
    if (!this[_values].diagnosis) {
      const klass = require('./EpisodeOfCare_Diagnosis');
      this[_values].diagnosis = ArrayProxy(klass);
    }
    return this[_values].diagnosis;
  }
  set diagnosis(value) {
    const klass = require('./EpisodeOfCare_Diagnosis');
    this[_values].diagnosis = ArrayProxy(klass);
    value.forEach(entry => this[_values].diagnosis.push(entry));
    return this[_values].diagnosis;
  }
  get patient() {
    if (!this[_values].patient) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }
  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }
  get managingOrganization() {
    if (!this[_values].managingOrganization) {
      const klass = require('./Reference');
      this[_values].managingOrganization = new klass();
    }
    return this[_values].managingOrganization;
  }
  set managingOrganization(value) {
    const klass = require('./Reference');
    return this[_values].managingOrganization = new klass(value);
  }
  get period() {
    if (!this[_values].period) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }
  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
  get referralRequest() {
    if (!this[_values].referralRequest) {
      const klass = require('./Reference');
      this[_values].referralRequest = ArrayProxy(klass);
    }
    return this[_values].referralRequest;
  }
  set referralRequest(value) {
    const klass = require('./Reference');
    this[_values].referralRequest = ArrayProxy(klass);
    value.forEach(entry => this[_values].referralRequest.push(entry));
    return this[_values].referralRequest;
  }
  get careManager() {
    if (!this[_values].careManager) {
      const klass = require('./Reference');
      this[_values].careManager = new klass();
    }
    return this[_values].careManager;
  }
  set careManager(value) {
    const klass = require('./Reference');
    return this[_values].careManager = new klass(value);
  }
  get team() {
    if (!this[_values].team) {
      const klass = require('./Reference');
      this[_values].team = ArrayProxy(klass);
    }
    return this[_values].team;
  }
  set team(value) {
    const klass = require('./Reference');
    this[_values].team = ArrayProxy(klass);
    value.forEach(entry => this[_values].team.push(entry));
    return this[_values].team;
  }
  get account() {
    if (!this[_values].account) {
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
}
module.exports = EpisodeOfCare;