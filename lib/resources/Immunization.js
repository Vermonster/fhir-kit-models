const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Immunization extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Immunization || values instanceof DomainResource) {
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

  get notGiven() {
    return this[_values].notGiven;
  }

  set notGiven(value) {
    return this[_values].notGiven = value;
  }

  get _notGiven() {
    if (!isPresent(this[_values]._notGiven)) {
      const klass = require('./Element');
      this[_values]._notGiven = new klass();
    }
    return this[_values]._notGiven;
  }

  set _notGiven(value) {
    const klass = require('./Element');
    return this[_values]._notGiven = new klass(value);
  }

  get vaccineCode() {
    if (!isPresent(this[_values].vaccineCode)) {
      const klass = require('./CodeableConcept');
      this[_values].vaccineCode = new klass();
    }
    return this[_values].vaccineCode;
  }

  set vaccineCode(value) {
    const klass = require('./CodeableConcept');
    return this[_values].vaccineCode = new klass(value);
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

  get encounter() {
    if (!isPresent(this[_values].encounter)) {
      const klass = require('./Reference');
      this[_values].encounter = new klass();
    }
    return this[_values].encounter;
  }

  set encounter(value) {
    const klass = require('./Reference');
    return this[_values].encounter = new klass(value);
  }

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get primarySource() {
    return this[_values].primarySource;
  }

  set primarySource(value) {
    return this[_values].primarySource = value;
  }

  get _primarySource() {
    if (!isPresent(this[_values]._primarySource)) {
      const klass = require('./Element');
      this[_values]._primarySource = new klass();
    }
    return this[_values]._primarySource;
  }

  set _primarySource(value) {
    const klass = require('./Element');
    return this[_values]._primarySource = new klass(value);
  }

  get reportOrigin() {
    if (!isPresent(this[_values].reportOrigin)) {
      const klass = require('./CodeableConcept');
      this[_values].reportOrigin = new klass();
    }
    return this[_values].reportOrigin;
  }

  set reportOrigin(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reportOrigin = new klass(value);
  }

  get location() {
    if (!isPresent(this[_values].location)) {
      const klass = require('./Reference');
      this[_values].location = new klass();
    }
    return this[_values].location;
  }

  set location(value) {
    const klass = require('./Reference');
    return this[_values].location = new klass(value);
  }

  get manufacturer() {
    if (!isPresent(this[_values].manufacturer)) {
      const klass = require('./Reference');
      this[_values].manufacturer = new klass();
    }
    return this[_values].manufacturer;
  }

  set manufacturer(value) {
    const klass = require('./Reference');
    return this[_values].manufacturer = new klass(value);
  }

  get lotNumber() {
    return this[_values].lotNumber;
  }

  set lotNumber(value) {
    return this[_values].lotNumber = value;
  }

  get _lotNumber() {
    if (!isPresent(this[_values]._lotNumber)) {
      const klass = require('./Element');
      this[_values]._lotNumber = new klass();
    }
    return this[_values]._lotNumber;
  }

  set _lotNumber(value) {
    const klass = require('./Element');
    return this[_values]._lotNumber = new klass(value);
  }

  get expirationDate() {
    return this[_values].expirationDate;
  }

  set expirationDate(value) {
    return this[_values].expirationDate = value;
  }

  get _expirationDate() {
    if (!isPresent(this[_values]._expirationDate)) {
      const klass = require('./Element');
      this[_values]._expirationDate = new klass();
    }
    return this[_values]._expirationDate;
  }

  set _expirationDate(value) {
    const klass = require('./Element');
    return this[_values]._expirationDate = new klass(value);
  }

  get site() {
    if (!isPresent(this[_values].site)) {
      const klass = require('./CodeableConcept');
      this[_values].site = new klass();
    }
    return this[_values].site;
  }

  set site(value) {
    const klass = require('./CodeableConcept');
    return this[_values].site = new klass(value);
  }

  get route() {
    if (!isPresent(this[_values].route)) {
      const klass = require('./CodeableConcept');
      this[_values].route = new klass();
    }
    return this[_values].route;
  }

  set route(value) {
    const klass = require('./CodeableConcept');
    return this[_values].route = new klass(value);
  }

  get doseQuantity() {
    if (!isPresent(this[_values].doseQuantity)) {
      const klass = require('./Quantity');
      this[_values].doseQuantity = new klass();
    }
    return this[_values].doseQuantity;
  }

  set doseQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].doseQuantity = new klass(value);
  }

  get practitioner() {
    if (!isPresent(this[_values].practitioner)) {
      const klass = require('./ImmunizationPractitioner');
      this[_values].practitioner = ArrayProxy(klass);
    }
    return this[_values].practitioner;
  }

  set practitioner(value) {
    const klass = require('./ImmunizationPractitioner');
    this[_values].practitioner = ArrayProxy(klass);
    value.forEach(entry => this[_values].practitioner.push(entry));
    return this[_values].practitioner;
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

  get explanation() {
    if (!isPresent(this[_values].explanation)) {
      const klass = require('./ImmunizationExplanation');
      this[_values].explanation = new klass();
    }
    return this[_values].explanation;
  }

  set explanation(value) {
    const klass = require('./ImmunizationExplanation');
    return this[_values].explanation = new klass(value);
  }

  get reaction() {
    if (!isPresent(this[_values].reaction)) {
      const klass = require('./ImmunizationReaction');
      this[_values].reaction = ArrayProxy(klass);
    }
    return this[_values].reaction;
  }

  set reaction(value) {
    const klass = require('./ImmunizationReaction');
    this[_values].reaction = ArrayProxy(klass);
    value.forEach(entry => this[_values].reaction.push(entry));
    return this[_values].reaction;
  }

  get vaccinationProtocol() {
    if (!isPresent(this[_values].vaccinationProtocol)) {
      const klass = require('./ImmunizationVaccinationProtocol');
      this[_values].vaccinationProtocol = ArrayProxy(klass);
    }
    return this[_values].vaccinationProtocol;
  }

  set vaccinationProtocol(value) {
    const klass = require('./ImmunizationVaccinationProtocol');
    this[_values].vaccinationProtocol = ArrayProxy(klass);
    value.forEach(entry => this[_values].vaccinationProtocol.push(entry));
    return this[_values].vaccinationProtocol;
  }
}

module.exports = Immunization;

