
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImmunizationRecommendation_Protocol extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImmunizationRecommendation_Protocol || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get doseSequence() {
    return this[_values].doseSequence;
  }

  set doseSequence(value) {
    return this[_values].doseSequence = value;
  }

  get _doseSequence() {
    if (!isPresent(this[_values]._doseSequence)) {
      const klass = require('./Element');
      this[_values]._doseSequence = new klass();
    }
    return this[_values]._doseSequence;
  }

  set _doseSequence(value) {
    const klass = require('./Element');
    return this[_values]._doseSequence = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get authority() {
    if (!isPresent(this[_values].authority)) {
      const klass = require('./Reference');
      this[_values].authority = new klass();
    }
    return this[_values].authority;
  }

  set authority(value) {
    const klass = require('./Reference');
    return this[_values].authority = new klass(value);
  }

  get series() {
    return this[_values].series;
  }

  set series(value) {
    return this[_values].series = value;
  }

  get _series() {
    if (!isPresent(this[_values]._series)) {
      const klass = require('./Element');
      this[_values]._series = new klass();
    }
    return this[_values]._series;
  }

  set _series(value) {
    const klass = require('./Element');
    return this[_values]._series = new klass(value);
  }
}

module.exports = ImmunizationRecommendation_Protocol;

