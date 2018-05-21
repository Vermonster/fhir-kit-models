const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Schedule extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Schedule ||
      values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
  }

  get active() {
    return this[_values].active;
  }

  set active(value) {
    return this[_values].active = value;
  }

  get _active() {
    if (!isPresent(this[_values]._active)) {
      const klass = require('./Element');
      this[_values]._active = new klass();
    }
    return this[_values]._active;
  }

  set _active(value) {
    const klass = require('./Element');
    return this[_values]._active = new klass(value);
  }

  get serviceCategory() {
    if (!isPresent(this[_values].serviceCategory)) {
      const klass = require('./CodeableConcept');
      this[_values].serviceCategory = new klass();
    }
    return this[_values].serviceCategory;
  }

  set serviceCategory(value) {
    const klass = require('./CodeableConcept');
    return this[_values].serviceCategory = new klass(value);
  }

  get serviceType() {
    if (!isPresent(this[_values].serviceType)) {
      const klass = require('./CodeableConcept');
      this[_values].serviceType = ArrayProxy(klass);
    }
    return this[_values].serviceType;
  }

  set serviceType(value) {
    const klass = require('./CodeableConcept');
    this[_values].serviceType = ArrayProxy(klass);
    value.forEach(entry => this[_values].serviceType.push(entry));
    return this[_values].serviceType;
  }

  get specialty() {
    if (!isPresent(this[_values].specialty)) {
      const klass = require('./CodeableConcept');
      this[_values].specialty = ArrayProxy(klass);
    }
    return this[_values].specialty;
  }

  set specialty(value) {
    const klass = require('./CodeableConcept');
    this[_values].specialty = ArrayProxy(klass);
    value.forEach(entry => this[_values].specialty.push(entry));
    return this[_values].specialty;
  }

  get actor() {
    if (!isPresent(this[_values].actor)) {
      const klass = require('./Reference');
      this[_values].actor = ArrayProxy(klass);
    }
    return this[_values].actor;
  }

  set actor(value) {
    const klass = require('./Reference');
    this[_values].actor = ArrayProxy(klass);
    value.forEach(entry => this[_values].actor.push(entry));
    return this[_values].actor;
  }

  get planningHorizon() {
    if (!isPresent(this[_values].planningHorizon)) {
      const klass = require('./Period');
      this[_values].planningHorizon = new klass();
    }
    return this[_values].planningHorizon;
  }

  set planningHorizon(value) {
    const klass = require('./Period');
    return this[_values].planningHorizon = new klass(value);
  }

  get comment() {
    return this[_values].comment;
  }

  set comment(value) {
    return this[_values].comment = value;
  }

  get _comment() {
    if (!isPresent(this[_values]._comment)) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }

  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }
}

module.exports = Schedule;

