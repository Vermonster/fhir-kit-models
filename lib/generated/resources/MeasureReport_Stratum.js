const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class MeasureReport_Stratum extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MeasureReport_Stratum || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get value() {
    return this[_values].value;
  }
  set value(value) {
    return this[_values].value = value;
  }
  get _value() {
    if (!this[_values]._value) {
      const klass = require('./Element');
      this[_values]._value = new klass();
    }
    return this[_values]._value;
  }
  set _value(value) {
    const klass = require('./Element');
    return this[_values]._value = new klass(value);
  }
  get population() {
    if (!this[_values].population) {
      const klass = require('./MeasureReport_Population1');
      this[_values].population = ArrayProxy(klass);
    }
    return this[_values].population;
  }
  set population(value) {
    const klass = require('./MeasureReport_Population1');
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
}
module.exports = MeasureReport_Stratum;