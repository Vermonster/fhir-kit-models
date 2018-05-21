
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class EpisodeOfCare_Diagnosis extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof EpisodeOfCare_Diagnosis || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get condition() {
    if (!isPresent(this[_values].condition)) {
      const klass = require('./Reference');
      this[_values].condition = new klass();
    }
    return this[_values].condition;
  }

  set condition(value) {
    const klass = require('./Reference');
    return this[_values].condition = new klass(value);
  }

  get role() {
    if (!isPresent(this[_values].role)) {
      const klass = require('./CodeableConcept');
      this[_values].role = new klass();
    }
    return this[_values].role;
  }

  set role(value) {
    const klass = require('./CodeableConcept');
    return this[_values].role = new klass(value);
  }

  get rank() {
    return this[_values].rank;
  }

  set rank(value) {
    return this[_values].rank = value;
  }

  get _rank() {
    if (!isPresent(this[_values]._rank)) {
      const klass = require('./Element');
      this[_values]._rank = new klass();
    }
    return this[_values]._rank;
  }

  set _rank(value) {
    const klass = require('./Element');
    return this[_values]._rank = new klass(value);
  }
}

module.exports = EpisodeOfCare_Diagnosis;

