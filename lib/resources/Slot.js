const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Slot extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'Slot';
    if (values instanceof Slot ||
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

  get appointmentType() {
    if (!isPresent(this[_values].appointmentType)) {
      const klass = require('./CodeableConcept');
      this[_values].appointmentType = new klass();
    }
    return this[_values].appointmentType;
  }

  set appointmentType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].appointmentType = new klass(value);
  }

  get schedule() {
    if (!isPresent(this[_values].schedule)) {
      const klass = require('./Reference');
      this[_values].schedule = new klass();
    }
    return this[_values].schedule;
  }

  set schedule(value) {
    const klass = require('./Reference');
    return this[_values].schedule = new klass(value);
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get start() {
    return this[_values].start;
  }

  set start(value) {
    return this[_values].start = value;
  }

  get _start() {
    if (!isPresent(this[_values]._start)) {
      const klass = require('./Element');
      this[_values]._start = new klass();
    }
    return this[_values]._start;
  }

  set _start(value) {
    const klass = require('./Element');
    return this[_values]._start = new klass(value);
  }

  get end() {
    return this[_values].end;
  }

  set end(value) {
    return this[_values].end = value;
  }

  get _end() {
    if (!isPresent(this[_values]._end)) {
      const klass = require('./Element');
      this[_values]._end = new klass();
    }
    return this[_values]._end;
  }

  set _end(value) {
    const klass = require('./Element');
    return this[_values]._end = new klass(value);
  }

  get overbooked() {
    return this[_values].overbooked;
  }

  set overbooked(value) {
    return this[_values].overbooked = value;
  }

  get _overbooked() {
    if (!isPresent(this[_values]._overbooked)) {
      const klass = require('./Element');
      this[_values]._overbooked = new klass();
    }
    return this[_values]._overbooked;
  }

  set _overbooked(value) {
    const klass = require('./Element');
    return this[_values]._overbooked = new klass(value);
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

module.exports = Slot;

