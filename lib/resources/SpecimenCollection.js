
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class SpecimenCollection extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof SpecimenCollection ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get collector() {
    if (!isPresent(this[_values].collector)) {
      const klass = require('./Reference');
      this[_values].collector = new klass();
    }
    return this[_values].collector;
  }

  set collector(value) {
    const klass = require('./Reference');
    return this[_values].collector = new klass(value);
  }

  get collectedDateTime() {
    return this[_values].collectedDateTime;
  }

  set collectedDateTime(value) {
    return this[_values].collectedDateTime = value;
  }

  get _collectedDateTime() {
    if (!isPresent(this[_values]._collectedDateTime)) {
      const klass = require('./Element');
      this[_values]._collectedDateTime = new klass();
    }
    return this[_values]._collectedDateTime;
  }

  set _collectedDateTime(value) {
    const klass = require('./Element');
    return this[_values]._collectedDateTime = new klass(value);
  }

  get collectedPeriod() {
    if (!isPresent(this[_values].collectedPeriod)) {
      const klass = require('./Period');
      this[_values].collectedPeriod = new klass();
    }
    return this[_values].collectedPeriod;
  }

  set collectedPeriod(value) {
    const klass = require('./Period');
    return this[_values].collectedPeriod = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get method() {
    if (!isPresent(this[_values].method)) {
      const klass = require('./CodeableConcept');
      this[_values].method = new klass();
    }
    return this[_values].method;
  }

  set method(value) {
    const klass = require('./CodeableConcept');
    return this[_values].method = new klass(value);
  }

  get bodySite() {
    if (!isPresent(this[_values].bodySite)) {
      const klass = require('./CodeableConcept');
      this[_values].bodySite = new klass();
    }
    return this[_values].bodySite;
  }

  set bodySite(value) {
    const klass = require('./CodeableConcept');
    return this[_values].bodySite = new klass(value);
  }
}

module.exports = SpecimenCollection;

