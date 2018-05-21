const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Claim extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Claim || values instanceof DomainResource) {
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

  get subType() {
    if (!isPresent(this[_values].subType)) {
      const klass = require('./CodeableConcept');
      this[_values].subType = ArrayProxy(klass);
    }
    return this[_values].subType;
  }

  set subType(value) {
    const klass = require('./CodeableConcept');
    this[_values].subType = ArrayProxy(klass);
    value.forEach(entry => this[_values].subType.push(entry));
    return this[_values].subType;
  }

  get use() {
    return this[_values].use;
  }

  set use(value) {
    return this[_values].use = value;
  }

  get _use() {
    if (!isPresent(this[_values]._use)) {
      const klass = require('./Element');
      this[_values]._use = new klass();
    }
    return this[_values]._use;
  }

  set _use(value) {
    const klass = require('./Element');
    return this[_values]._use = new klass(value);
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

  get billablePeriod() {
    if (!isPresent(this[_values].billablePeriod)) {
      const klass = require('./Period');
      this[_values].billablePeriod = new klass();
    }
    return this[_values].billablePeriod;
  }

  set billablePeriod(value) {
    const klass = require('./Period');
    return this[_values].billablePeriod = new klass(value);
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

  get insurer() {
    if (!isPresent(this[_values].insurer)) {
      const klass = require('./Reference');
      this[_values].insurer = new klass();
    }
    return this[_values].insurer;
  }

  set insurer(value) {
    const klass = require('./Reference');
    return this[_values].insurer = new klass(value);
  }

  get provider() {
    if (!isPresent(this[_values].provider)) {
      const klass = require('./Reference');
      this[_values].provider = new klass();
    }
    return this[_values].provider;
  }

  set provider(value) {
    const klass = require('./Reference');
    return this[_values].provider = new klass(value);
  }

  get organization() {
    if (!isPresent(this[_values].organization)) {
      const klass = require('./Reference');
      this[_values].organization = new klass();
    }
    return this[_values].organization;
  }

  set organization(value) {
    const klass = require('./Reference');
    return this[_values].organization = new klass(value);
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

  get fundsReserve() {
    if (!isPresent(this[_values].fundsReserve)) {
      const klass = require('./CodeableConcept');
      this[_values].fundsReserve = new klass();
    }
    return this[_values].fundsReserve;
  }

  set fundsReserve(value) {
    const klass = require('./CodeableConcept');
    return this[_values].fundsReserve = new klass(value);
  }

  get related() {
    if (!isPresent(this[_values].related)) {
      const klass = require('./Claim_Related');
      this[_values].related = ArrayProxy(klass);
    }
    return this[_values].related;
  }

  set related(value) {
    const klass = require('./Claim_Related');
    this[_values].related = ArrayProxy(klass);
    value.forEach(entry => this[_values].related.push(entry));
    return this[_values].related;
  }

  get prescription() {
    if (!isPresent(this[_values].prescription)) {
      const klass = require('./Reference');
      this[_values].prescription = new klass();
    }
    return this[_values].prescription;
  }

  set prescription(value) {
    const klass = require('./Reference');
    return this[_values].prescription = new klass(value);
  }

  get originalPrescription() {
    if (!isPresent(this[_values].originalPrescription)) {
      const klass = require('./Reference');
      this[_values].originalPrescription = new klass();
    }
    return this[_values].originalPrescription;
  }

  set originalPrescription(value) {
    const klass = require('./Reference');
    return this[_values].originalPrescription = new klass(value);
  }

  get payee() {
    if (!isPresent(this[_values].payee)) {
      const klass = require('./Claim_Payee');
      this[_values].payee = new klass();
    }
    return this[_values].payee;
  }

  set payee(value) {
    const klass = require('./Claim_Payee');
    return this[_values].payee = new klass(value);
  }

  get referral() {
    if (!isPresent(this[_values].referral)) {
      const klass = require('./Reference');
      this[_values].referral = new klass();
    }
    return this[_values].referral;
  }

  set referral(value) {
    const klass = require('./Reference');
    return this[_values].referral = new klass(value);
  }

  get facility() {
    if (!isPresent(this[_values].facility)) {
      const klass = require('./Reference');
      this[_values].facility = new klass();
    }
    return this[_values].facility;
  }

  set facility(value) {
    const klass = require('./Reference');
    return this[_values].facility = new klass(value);
  }

  get careTeam() {
    if (!isPresent(this[_values].careTeam)) {
      const klass = require('./Claim_CareTeam');
      this[_values].careTeam = ArrayProxy(klass);
    }
    return this[_values].careTeam;
  }

  set careTeam(value) {
    const klass = require('./Claim_CareTeam');
    this[_values].careTeam = ArrayProxy(klass);
    value.forEach(entry => this[_values].careTeam.push(entry));
    return this[_values].careTeam;
  }

  get information() {
    if (!isPresent(this[_values].information)) {
      const klass = require('./Claim_Information');
      this[_values].information = ArrayProxy(klass);
    }
    return this[_values].information;
  }

  set information(value) {
    const klass = require('./Claim_Information');
    this[_values].information = ArrayProxy(klass);
    value.forEach(entry => this[_values].information.push(entry));
    return this[_values].information;
  }

  get diagnosis() {
    if (!isPresent(this[_values].diagnosis)) {
      const klass = require('./Claim_Diagnosis');
      this[_values].diagnosis = ArrayProxy(klass);
    }
    return this[_values].diagnosis;
  }

  set diagnosis(value) {
    const klass = require('./Claim_Diagnosis');
    this[_values].diagnosis = ArrayProxy(klass);
    value.forEach(entry => this[_values].diagnosis.push(entry));
    return this[_values].diagnosis;
  }

  get procedure() {
    if (!isPresent(this[_values].procedure)) {
      const klass = require('./Claim_Procedure');
      this[_values].procedure = ArrayProxy(klass);
    }
    return this[_values].procedure;
  }

  set procedure(value) {
    const klass = require('./Claim_Procedure');
    this[_values].procedure = ArrayProxy(klass);
    value.forEach(entry => this[_values].procedure.push(entry));
    return this[_values].procedure;
  }

  get insurance() {
    if (!isPresent(this[_values].insurance)) {
      const klass = require('./Claim_Insurance');
      this[_values].insurance = ArrayProxy(klass);
    }
    return this[_values].insurance;
  }

  set insurance(value) {
    const klass = require('./Claim_Insurance');
    this[_values].insurance = ArrayProxy(klass);
    value.forEach(entry => this[_values].insurance.push(entry));
    return this[_values].insurance;
  }

  get accident() {
    if (!isPresent(this[_values].accident)) {
      const klass = require('./Claim_Accident');
      this[_values].accident = new klass();
    }
    return this[_values].accident;
  }

  set accident(value) {
    const klass = require('./Claim_Accident');
    return this[_values].accident = new klass(value);
  }

  get employmentImpacted() {
    if (!isPresent(this[_values].employmentImpacted)) {
      const klass = require('./Period');
      this[_values].employmentImpacted = new klass();
    }
    return this[_values].employmentImpacted;
  }

  set employmentImpacted(value) {
    const klass = require('./Period');
    return this[_values].employmentImpacted = new klass(value);
  }

  get hospitalization() {
    if (!isPresent(this[_values].hospitalization)) {
      const klass = require('./Period');
      this[_values].hospitalization = new klass();
    }
    return this[_values].hospitalization;
  }

  set hospitalization(value) {
    const klass = require('./Period');
    return this[_values].hospitalization = new klass(value);
  }

  get item() {
    if (!isPresent(this[_values].item)) {
      const klass = require('./Claim_Item');
      this[_values].item = ArrayProxy(klass);
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./Claim_Item');
    this[_values].item = ArrayProxy(klass);
    value.forEach(entry => this[_values].item.push(entry));
    return this[_values].item;
  }

  get total() {
    if (!isPresent(this[_values].total)) {
      const klass = require('./Money');
      this[_values].total = new klass();
    }
    return this[_values].total;
  }

  set total(value) {
    const klass = require('./Money');
    return this[_values].total = new klass(value);
  }
}

module.exports = Claim;

