const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImmunizationRecommendationRecommendation extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImmunizationRecommendationRecommendation || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get targetDisease() {
    if (!isPresent(this[_values].targetDisease)) {
      const klass = require('./CodeableConcept');
      this[_values].targetDisease = new klass();
    }
    return this[_values].targetDisease;
  }

  set targetDisease(value) {
    const klass = require('./CodeableConcept');
    return this[_values].targetDisease = new klass(value);
  }

  get doseNumber() {
    return this[_values].doseNumber;
  }

  set doseNumber(value) {
    return this[_values].doseNumber = value;
  }

  get _doseNumber() {
    if (!isPresent(this[_values]._doseNumber)) {
      const klass = require('./Element');
      this[_values]._doseNumber = new klass();
    }
    return this[_values]._doseNumber;
  }

  set _doseNumber(value) {
    const klass = require('./Element');
    return this[_values]._doseNumber = new klass(value);
  }

  get forecastStatus() {
    if (!isPresent(this[_values].forecastStatus)) {
      const klass = require('./CodeableConcept');
      this[_values].forecastStatus = new klass();
    }
    return this[_values].forecastStatus;
  }

  set forecastStatus(value) {
    const klass = require('./CodeableConcept');
    return this[_values].forecastStatus = new klass(value);
  }

  get dateCriterion() {
    if (!isPresent(this[_values].dateCriterion)) {
      const klass = require('./ImmunizationRecommendationDateCriterion');
      this[_values].dateCriterion = ArrayProxy(klass);
    }
    return this[_values].dateCriterion;
  }

  set dateCriterion(value) {
    const klass = require('./ImmunizationRecommendationDateCriterion');
    this[_values].dateCriterion = ArrayProxy(klass);
    value.forEach(entry => this[_values].dateCriterion.push(entry));
    return this[_values].dateCriterion;
  }

  get protocol() {
    if (!isPresent(this[_values].protocol)) {
      const klass = require('./ImmunizationRecommendationProtocol');
      this[_values].protocol = new klass();
    }
    return this[_values].protocol;
  }

  set protocol(value) {
    const klass = require('./ImmunizationRecommendationProtocol');
    return this[_values].protocol = new klass(value);
  }

  get supportingImmunization() {
    if (!isPresent(this[_values].supportingImmunization)) {
      const klass = require('./Reference');
      this[_values].supportingImmunization = ArrayProxy(klass);
    }
    return this[_values].supportingImmunization;
  }

  set supportingImmunization(value) {
    const klass = require('./Reference');
    this[_values].supportingImmunization = ArrayProxy(klass);
    value.forEach(entry => this[_values].supportingImmunization.push(entry));
    return this[_values].supportingImmunization;
  }

  get supportingPatientInformation() {
    if (!isPresent(this[_values].supportingPatientInformation)) {
      const klass = require('./Reference');
      this[_values].supportingPatientInformation = ArrayProxy(klass);
    }
    return this[_values].supportingPatientInformation;
  }

  set supportingPatientInformation(value) {
    const klass = require('./Reference');
    this[_values].supportingPatientInformation = ArrayProxy(klass);
    value.forEach(entry => this[_values].supportingPatientInformation.push(entry));
    return this[_values].supportingPatientInformation;
  }
}

module.exports = ImmunizationRecommendationRecommendation;

