const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class NutritionOrderEnteralFormula extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NutritionOrderEnteralFormula ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get baseFormulaType() {
    if (!isPresent(this[_values].baseFormulaType)) {
      const klass = require('./CodeableConcept');
      this[_values].baseFormulaType = new klass();
    }
    return this[_values].baseFormulaType;
  }

  set baseFormulaType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].baseFormulaType = new klass(value);
  }

  get baseFormulaProductName() {
    return this[_values].baseFormulaProductName;
  }

  set baseFormulaProductName(value) {
    return this[_values].baseFormulaProductName = value;
  }

  get _baseFormulaProductName() {
    if (!isPresent(this[_values]._baseFormulaProductName)) {
      const klass = require('./Element');
      this[_values]._baseFormulaProductName = new klass();
    }
    return this[_values]._baseFormulaProductName;
  }

  set _baseFormulaProductName(value) {
    const klass = require('./Element');
    return this[_values]._baseFormulaProductName = new klass(value);
  }

  get additiveType() {
    if (!isPresent(this[_values].additiveType)) {
      const klass = require('./CodeableConcept');
      this[_values].additiveType = new klass();
    }
    return this[_values].additiveType;
  }

  set additiveType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].additiveType = new klass(value);
  }

  get additiveProductName() {
    return this[_values].additiveProductName;
  }

  set additiveProductName(value) {
    return this[_values].additiveProductName = value;
  }

  get _additiveProductName() {
    if (!isPresent(this[_values]._additiveProductName)) {
      const klass = require('./Element');
      this[_values]._additiveProductName = new klass();
    }
    return this[_values]._additiveProductName;
  }

  set _additiveProductName(value) {
    const klass = require('./Element');
    return this[_values]._additiveProductName = new klass(value);
  }

  get caloricDensity() {
    if (!isPresent(this[_values].caloricDensity)) {
      const klass = require('./Quantity');
      this[_values].caloricDensity = new klass();
    }
    return this[_values].caloricDensity;
  }

  set caloricDensity(value) {
    const klass = require('./Quantity');
    return this[_values].caloricDensity = new klass(value);
  }

  get routeofAdministration() {
    if (!isPresent(this[_values].routeofAdministration)) {
      const klass = require('./CodeableConcept');
      this[_values].routeofAdministration = new klass();
    }
    return this[_values].routeofAdministration;
  }

  set routeofAdministration(value) {
    const klass = require('./CodeableConcept');
    return this[_values].routeofAdministration = new klass(value);
  }

  get administration() {
    if (!isPresent(this[_values].administration)) {
      const klass = require('./NutritionOrderAdministration');
      this[_values].administration = ArrayProxy(klass);
    }
    return this[_values].administration;
  }

  set administration(value) {
    const klass = require('./NutritionOrderAdministration');
    this[_values].administration = ArrayProxy(klass);
    value.forEach(entry => this[_values].administration.push(entry));
    return this[_values].administration;
  }

  get maxVolumeToDeliver() {
    if (!isPresent(this[_values].maxVolumeToDeliver)) {
      const klass = require('./Quantity');
      this[_values].maxVolumeToDeliver = new klass();
    }
    return this[_values].maxVolumeToDeliver;
  }

  set maxVolumeToDeliver(value) {
    const klass = require('./Quantity');
    return this[_values].maxVolumeToDeliver = new klass(value);
  }

  get administrationInstruction() {
    return this[_values].administrationInstruction;
  }

  set administrationInstruction(value) {
    return this[_values].administrationInstruction = value;
  }

  get _administrationInstruction() {
    if (!isPresent(this[_values]._administrationInstruction)) {
      const klass = require('./Element');
      this[_values]._administrationInstruction = new klass();
    }
    return this[_values]._administrationInstruction;
  }

  set _administrationInstruction(value) {
    const klass = require('./Element');
    return this[_values]._administrationInstruction = new klass(value);
  }
}

module.exports = NutritionOrderEnteralFormula;

