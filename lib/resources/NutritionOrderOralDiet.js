const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class NutritionOrderOralDiet extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NutritionOrderOralDiet || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get type() {
    if (!isPresent(this[_values].type)) {
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

  get schedule() {
    if (!isPresent(this[_values].schedule)) {
      const klass = require('./Timing');
      this[_values].schedule = ArrayProxy(klass);
    }
    return this[_values].schedule;
  }

  set schedule(value) {
    const klass = require('./Timing');
    this[_values].schedule = ArrayProxy(klass);
    value.forEach(entry => this[_values].schedule.push(entry));
    return this[_values].schedule;
  }

  get nutrient() {
    if (!isPresent(this[_values].nutrient)) {
      const klass = require('./NutritionOrderNutrient');
      this[_values].nutrient = ArrayProxy(klass);
    }
    return this[_values].nutrient;
  }

  set nutrient(value) {
    const klass = require('./NutritionOrderNutrient');
    this[_values].nutrient = ArrayProxy(klass);
    value.forEach(entry => this[_values].nutrient.push(entry));
    return this[_values].nutrient;
  }

  get texture() {
    if (!isPresent(this[_values].texture)) {
      const klass = require('./NutritionOrderTexture');
      this[_values].texture = ArrayProxy(klass);
    }
    return this[_values].texture;
  }

  set texture(value) {
    const klass = require('./NutritionOrderTexture');
    this[_values].texture = ArrayProxy(klass);
    value.forEach(entry => this[_values].texture.push(entry));
    return this[_values].texture;
  }

  get fluidConsistencyType() {
    if (!isPresent(this[_values].fluidConsistencyType)) {
      const klass = require('./CodeableConcept');
      this[_values].fluidConsistencyType = ArrayProxy(klass);
    }
    return this[_values].fluidConsistencyType;
  }

  set fluidConsistencyType(value) {
    const klass = require('./CodeableConcept');
    this[_values].fluidConsistencyType = ArrayProxy(klass);
    value.forEach(entry => this[_values].fluidConsistencyType.push(entry));
    return this[_values].fluidConsistencyType;
  }

  get instruction() {
    return this[_values].instruction;
  }

  set instruction(value) {
    return this[_values].instruction = value;
  }

  get _instruction() {
    if (!isPresent(this[_values]._instruction)) {
      const klass = require('./Element');
      this[_values]._instruction = new klass();
    }
    return this[_values]._instruction;
  }

  set _instruction(value) {
    const klass = require('./Element');
    return this[_values]._instruction = new klass(value);
  }
}

module.exports = NutritionOrderOralDiet;

