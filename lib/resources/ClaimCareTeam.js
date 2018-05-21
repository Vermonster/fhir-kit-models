
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ClaimCareTeam extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClaimCareTeam || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sequence() {
    return this[_values].sequence;
  }

  set sequence(value) {
    return this[_values].sequence = value;
  }

  get _sequence() {
    if (!isPresent(this[_values]._sequence)) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }

  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
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

  get responsible() {
    return this[_values].responsible;
  }

  set responsible(value) {
    return this[_values].responsible = value;
  }

  get _responsible() {
    if (!isPresent(this[_values]._responsible)) {
      const klass = require('./Element');
      this[_values]._responsible = new klass();
    }
    return this[_values]._responsible;
  }

  set _responsible(value) {
    const klass = require('./Element');
    return this[_values]._responsible = new klass(value);
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

  get qualification() {
    if (!isPresent(this[_values].qualification)) {
      const klass = require('./CodeableConcept');
      this[_values].qualification = new klass();
    }
    return this[_values].qualification;
  }

  set qualification(value) {
    const klass = require('./CodeableConcept');
    return this[_values].qualification = new klass(value);
  }
}

module.exports = ClaimCareTeam;

