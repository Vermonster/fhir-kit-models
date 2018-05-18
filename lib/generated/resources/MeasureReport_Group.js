const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class MeasureReport_Group extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MeasureReport_Group || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get identifier() {
    if (!this[_values].identifier) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }
  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }
  get population() {
    if (!this[_values].population) {
      const klass = require('./MeasureReport_Population');
      this[_values].population = ArrayProxy(klass);
    }
    return this[_values].population;
  }
  set population(value) {
    const klass = require('./MeasureReport_Population');
    this[_values].population = ArrayProxy(klass);
    value.forEach(entry => this[_values].population.push(entry));
    return this[_values].population;
  }
  get measureScore() {
    return this[_values].measureScore;
  }
  set measureScore(value) {
    return this[_values].measureScore = value;
  }
  get _measureScore() {
    if (!this[_values]._measureScore) {
      const klass = require('./Element');
      this[_values]._measureScore = new klass();
    }
    return this[_values]._measureScore;
  }
  set _measureScore(value) {
    const klass = require('./Element');
    return this[_values]._measureScore = new klass(value);
  }
  get stratifier() {
    if (!this[_values].stratifier) {
      const klass = require('./MeasureReport_Stratifier');
      this[_values].stratifier = ArrayProxy(klass);
    }
    return this[_values].stratifier;
  }
  set stratifier(value) {
    const klass = require('./MeasureReport_Stratifier');
    this[_values].stratifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].stratifier.push(entry));
    return this[_values].stratifier;
  }
}
module.exports = MeasureReport_Group;