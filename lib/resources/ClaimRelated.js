
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ClaimRelated extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClaimRelated || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get claim() {
    if (!isPresent(this[_values].claim)) {
      const klass = require('./Reference');
      this[_values].claim = new klass();
    }
    return this[_values].claim;
  }

  set claim(value) {
    const klass = require('./Reference');
    return this[_values].claim = new klass(value);
  }

  get relationship() {
    if (!isPresent(this[_values].relationship)) {
      const klass = require('./CodeableConcept');
      this[_values].relationship = new klass();
    }
    return this[_values].relationship;
  }

  set relationship(value) {
    const klass = require('./CodeableConcept');
    return this[_values].relationship = new klass(value);
  }

  get reference() {
    if (!isPresent(this[_values].reference)) {
      const klass = require('./Identifier');
      this[_values].reference = new klass();
    }
    return this[_values].reference;
  }

  set reference(value) {
    const klass = require('./Identifier');
    return this[_values].reference = new klass(value);
  }
}

module.exports = ClaimRelated;

