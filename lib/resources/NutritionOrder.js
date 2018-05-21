const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class NutritionOrder extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NutritionOrder || values instanceof DomainResource) {
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

  get orderer() {
    if (!isPresent(this[_values].orderer)) {
      const klass = require('./Reference');
      this[_values].orderer = new klass();
    }
    return this[_values].orderer;
  }

  set orderer(value) {
    const klass = require('./Reference');
    return this[_values].orderer = new klass(value);
  }

  get allergyIntolerance() {
    if (!isPresent(this[_values].allergyIntolerance)) {
      const klass = require('./Reference');
      this[_values].allergyIntolerance = ArrayProxy(klass);
    }
    return this[_values].allergyIntolerance;
  }

  set allergyIntolerance(value) {
    const klass = require('./Reference');
    this[_values].allergyIntolerance = ArrayProxy(klass);
    value.forEach(entry => this[_values].allergyIntolerance.push(entry));
    return this[_values].allergyIntolerance;
  }

  get foodPreferenceModifier() {
    if (!isPresent(this[_values].foodPreferenceModifier)) {
      const klass = require('./CodeableConcept');
      this[_values].foodPreferenceModifier = ArrayProxy(klass);
    }
    return this[_values].foodPreferenceModifier;
  }

  set foodPreferenceModifier(value) {
    const klass = require('./CodeableConcept');
    this[_values].foodPreferenceModifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].foodPreferenceModifier.push(entry));
    return this[_values].foodPreferenceModifier;
  }

  get excludeFoodModifier() {
    if (!isPresent(this[_values].excludeFoodModifier)) {
      const klass = require('./CodeableConcept');
      this[_values].excludeFoodModifier = ArrayProxy(klass);
    }
    return this[_values].excludeFoodModifier;
  }

  set excludeFoodModifier(value) {
    const klass = require('./CodeableConcept');
    this[_values].excludeFoodModifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].excludeFoodModifier.push(entry));
    return this[_values].excludeFoodModifier;
  }

  get oralDiet() {
    if (!isPresent(this[_values].oralDiet)) {
      const klass = require('./NutritionOrder_OralDiet');
      this[_values].oralDiet = new klass();
    }
    return this[_values].oralDiet;
  }

  set oralDiet(value) {
    const klass = require('./NutritionOrder_OralDiet');
    return this[_values].oralDiet = new klass(value);
  }

  get supplement() {
    if (!isPresent(this[_values].supplement)) {
      const klass = require('./NutritionOrder_Supplement');
      this[_values].supplement = ArrayProxy(klass);
    }
    return this[_values].supplement;
  }

  set supplement(value) {
    const klass = require('./NutritionOrder_Supplement');
    this[_values].supplement = ArrayProxy(klass);
    value.forEach(entry => this[_values].supplement.push(entry));
    return this[_values].supplement;
  }

  get enteralFormula() {
    if (!isPresent(this[_values].enteralFormula)) {
      const klass = require('./NutritionOrder_EnteralFormula');
      this[_values].enteralFormula = new klass();
    }
    return this[_values].enteralFormula;
  }

  set enteralFormula(value) {
    const klass = require('./NutritionOrder_EnteralFormula');
    return this[_values].enteralFormula = new klass(value);
  }
}

module.exports = NutritionOrder;

