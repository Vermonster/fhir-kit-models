const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class ExplanationOfBenefit extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefit || values instanceof DomainResource) {
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

  get claim() {
    if (!isPresent(this[_values].claim)) {
      const klass = require('./Reference');
      this[_values].claim = new klass();
    }
    return this[_values].claim;
  }

  set claim(value) {
    const klass = require('./Reference');
    return this[_values].claim = new klass(value);
  }

  get claimResponse() {
    if (!isPresent(this[_values].claimResponse)) {
      const klass = require('./Reference');
      this[_values].claimResponse = new klass();
    }
    return this[_values].claimResponse;
  }

  set claimResponse(value) {
    const klass = require('./Reference');
    return this[_values].claimResponse = new klass(value);
  }

  get outcome() {
    if (!isPresent(this[_values].outcome)) {
      const klass = require('./CodeableConcept');
      this[_values].outcome = new klass();
    }
    return this[_values].outcome;
  }

  set outcome(value) {
    const klass = require('./CodeableConcept');
    return this[_values].outcome = new klass(value);
  }

  get disposition() {
    return this[_values].disposition;
  }

  set disposition(value) {
    return this[_values].disposition = value;
  }

  get _disposition() {
    if (!isPresent(this[_values]._disposition)) {
      const klass = require('./Element');
      this[_values]._disposition = new klass();
    }
    return this[_values]._disposition;
  }

  set _disposition(value) {
    const klass = require('./Element');
    return this[_values]._disposition = new klass(value);
  }

  get related() {
    if (!isPresent(this[_values].related)) {
      const klass = require('./ExplanationOfBenefit_Related');
      this[_values].related = ArrayProxy(klass);
    }
    return this[_values].related;
  }

  set related(value) {
    const klass = require('./ExplanationOfBenefit_Related');
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
      const klass = require('./ExplanationOfBenefit_Payee');
      this[_values].payee = new klass();
    }
    return this[_values].payee;
  }

  set payee(value) {
    const klass = require('./ExplanationOfBenefit_Payee');
    return this[_values].payee = new klass(value);
  }

  get information() {
    if (!isPresent(this[_values].information)) {
      const klass = require('./ExplanationOfBenefit_Information');
      this[_values].information = ArrayProxy(klass);
    }
    return this[_values].information;
  }

  set information(value) {
    const klass = require('./ExplanationOfBenefit_Information');
    this[_values].information = ArrayProxy(klass);
    value.forEach(entry => this[_values].information.push(entry));
    return this[_values].information;
  }

  get careTeam() {
    if (!isPresent(this[_values].careTeam)) {
      const klass = require('./ExplanationOfBenefit_CareTeam');
      this[_values].careTeam = ArrayProxy(klass);
    }
    return this[_values].careTeam;
  }

  set careTeam(value) {
    const klass = require('./ExplanationOfBenefit_CareTeam');
    this[_values].careTeam = ArrayProxy(klass);
    value.forEach(entry => this[_values].careTeam.push(entry));
    return this[_values].careTeam;
  }

  get diagnosis() {
    if (!isPresent(this[_values].diagnosis)) {
      const klass = require('./ExplanationOfBenefit_Diagnosis');
      this[_values].diagnosis = ArrayProxy(klass);
    }
    return this[_values].diagnosis;
  }

  set diagnosis(value) {
    const klass = require('./ExplanationOfBenefit_Diagnosis');
    this[_values].diagnosis = ArrayProxy(klass);
    value.forEach(entry => this[_values].diagnosis.push(entry));
    return this[_values].diagnosis;
  }

  get procedure() {
    if (!isPresent(this[_values].procedure)) {
      const klass = require('./ExplanationOfBenefit_Procedure');
      this[_values].procedure = ArrayProxy(klass);
    }
    return this[_values].procedure;
  }

  set procedure(value) {
    const klass = require('./ExplanationOfBenefit_Procedure');
    this[_values].procedure = ArrayProxy(klass);
    value.forEach(entry => this[_values].procedure.push(entry));
    return this[_values].procedure;
  }

  get precedence() {
    return this[_values].precedence;
  }

  set precedence(value) {
    return this[_values].precedence = value;
  }

  get _precedence() {
    if (!isPresent(this[_values]._precedence)) {
      const klass = require('./Element');
      this[_values]._precedence = new klass();
    }
    return this[_values]._precedence;
  }

  set _precedence(value) {
    const klass = require('./Element');
    return this[_values]._precedence = new klass(value);
  }

  get insurance() {
    if (!isPresent(this[_values].insurance)) {
      const klass = require('./ExplanationOfBenefit_Insurance');
      this[_values].insurance = new klass();
    }
    return this[_values].insurance;
  }

  set insurance(value) {
    const klass = require('./ExplanationOfBenefit_Insurance');
    return this[_values].insurance = new klass(value);
  }

  get accident() {
    if (!isPresent(this[_values].accident)) {
      const klass = require('./ExplanationOfBenefit_Accident');
      this[_values].accident = new klass();
    }
    return this[_values].accident;
  }

  set accident(value) {
    const klass = require('./ExplanationOfBenefit_Accident');
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
      const klass = require('./ExplanationOfBenefit_Item');
      this[_values].item = ArrayProxy(klass);
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./ExplanationOfBenefit_Item');
    this[_values].item = ArrayProxy(klass);
    value.forEach(entry => this[_values].item.push(entry));
    return this[_values].item;
  }

  get addItem() {
    if (!isPresent(this[_values].addItem)) {
      const klass = require('./ExplanationOfBenefit_AddItem');
      this[_values].addItem = ArrayProxy(klass);
    }
    return this[_values].addItem;
  }

  set addItem(value) {
    const klass = require('./ExplanationOfBenefit_AddItem');
    this[_values].addItem = ArrayProxy(klass);
    value.forEach(entry => this[_values].addItem.push(entry));
    return this[_values].addItem;
  }

  get totalCost() {
    if (!isPresent(this[_values].totalCost)) {
      const klass = require('./Money');
      this[_values].totalCost = new klass();
    }
    return this[_values].totalCost;
  }

  set totalCost(value) {
    const klass = require('./Money');
    return this[_values].totalCost = new klass(value);
  }

  get unallocDeductable() {
    if (!isPresent(this[_values].unallocDeductable)) {
      const klass = require('./Money');
      this[_values].unallocDeductable = new klass();
    }
    return this[_values].unallocDeductable;
  }

  set unallocDeductable(value) {
    const klass = require('./Money');
    return this[_values].unallocDeductable = new klass(value);
  }

  get totalBenefit() {
    if (!isPresent(this[_values].totalBenefit)) {
      const klass = require('./Money');
      this[_values].totalBenefit = new klass();
    }
    return this[_values].totalBenefit;
  }

  set totalBenefit(value) {
    const klass = require('./Money');
    return this[_values].totalBenefit = new klass(value);
  }

  get payment() {
    if (!isPresent(this[_values].payment)) {
      const klass = require('./ExplanationOfBenefit_Payment');
      this[_values].payment = new klass();
    }
    return this[_values].payment;
  }

  set payment(value) {
    const klass = require('./ExplanationOfBenefit_Payment');
    return this[_values].payment = new klass(value);
  }

  get form() {
    if (!isPresent(this[_values].form)) {
      const klass = require('./CodeableConcept');
      this[_values].form = new klass();
    }
    return this[_values].form;
  }

  set form(value) {
    const klass = require('./CodeableConcept');
    return this[_values].form = new klass(value);
  }

  get processNote() {
    if (!isPresent(this[_values].processNote)) {
      const klass = require('./ExplanationOfBenefit_ProcessNote');
      this[_values].processNote = ArrayProxy(klass);
    }
    return this[_values].processNote;
  }

  set processNote(value) {
    const klass = require('./ExplanationOfBenefit_ProcessNote');
    this[_values].processNote = ArrayProxy(klass);
    value.forEach(entry => this[_values].processNote.push(entry));
    return this[_values].processNote;
  }

  get benefitBalance() {
    if (!isPresent(this[_values].benefitBalance)) {
      const klass = require('./ExplanationOfBenefit_BenefitBalance');
      this[_values].benefitBalance = ArrayProxy(klass);
    }
    return this[_values].benefitBalance;
  }

  set benefitBalance(value) {
    const klass = require('./ExplanationOfBenefit_BenefitBalance');
    this[_values].benefitBalance = ArrayProxy(klass);
    value.forEach(entry => this[_values].benefitBalance.push(entry));
    return this[_values].benefitBalance;
  }
}

module.exports = ExplanationOfBenefit;

