
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Goal_Target extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Goal_Target || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get measure() {
    if (!isPresent(this[_values].measure)) {
      const klass = require('./CodeableConcept');
      this[_values].measure = new klass();
    }
    return this[_values].measure;
  }

  set measure(value) {
    const klass = require('./CodeableConcept');
    return this[_values].measure = new klass(value);
  }

  get detailQuantity() {
    if (!isPresent(this[_values].detailQuantity)) {
      const klass = require('./Quantity');
      this[_values].detailQuantity = new klass();
    }
    return this[_values].detailQuantity;
  }

  set detailQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].detailQuantity = new klass(value);
  }

  get detailRange() {
    if (!isPresent(this[_values].detailRange)) {
      const klass = require('./Range');
      this[_values].detailRange = new klass();
    }
    return this[_values].detailRange;
  }

  set detailRange(value) {
    const klass = require('./Range');
    return this[_values].detailRange = new klass(value);
  }

  get detailCodeableConcept() {
    if (!isPresent(this[_values].detailCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].detailCodeableConcept = new klass();
    }
    return this[_values].detailCodeableConcept;
  }

  set detailCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].detailCodeableConcept = new klass(value);
  }

  get dueDate() {
    return this[_values].dueDate;
  }

  set dueDate(value) {
    return this[_values].dueDate = value;
  }

  get _dueDate() {
    if (!isPresent(this[_values]._dueDate)) {
      const klass = require('./Element');
      this[_values]._dueDate = new klass();
    }
    return this[_values]._dueDate;
  }

  set _dueDate(value) {
    const klass = require('./Element');
    return this[_values]._dueDate = new klass(value);
  }

  get dueDuration() {
    if (!isPresent(this[_values].dueDuration)) {
      const klass = require('./Duration');
      this[_values].dueDuration = new klass();
    }
    return this[_values].dueDuration;
  }

  set dueDuration(value) {
    const klass = require('./Duration');
    return this[_values].dueDuration = new klass(value);
  }
}

module.exports = Goal_Target;

