const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class AppointmentResponse extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AppointmentResponse || values instanceof DomainResource) {
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
    if (!this[_values].identifier) {
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
  get appointment() {
    if (!this[_values].appointment) {
      const klass = require('./Reference');
      this[_values].appointment = new klass();
    }
    return this[_values].appointment;
  }
  set appointment(value) {
    const klass = require('./Reference');
    return this[_values].appointment = new klass(value);
  }
  get start() {
    return this[_values].start;
  }
  set start(value) {
    return this[_values].start = value;
  }
  get _start() {
    if (!this[_values]._start) {
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
    if (!this[_values]._end) {
      const klass = require('./Element');
      this[_values]._end = new klass();
    }
    return this[_values]._end;
  }
  set _end(value) {
    const klass = require('./Element');
    return this[_values]._end = new klass(value);
  }
  get participantType() {
    if (!this[_values].participantType) {
      const klass = require('./CodeableConcept');
      this[_values].participantType = ArrayProxy(klass);
    }
    return this[_values].participantType;
  }
  set participantType(value) {
    const klass = require('./CodeableConcept');
    this[_values].participantType = ArrayProxy(klass);
    value.forEach(entry => this[_values].participantType.push(entry));
    return this[_values].participantType;
  }
  get actor() {
    if (!this[_values].actor) {
      const klass = require('./Reference');
      this[_values].actor = new klass();
    }
    return this[_values].actor;
  }
  set actor(value) {
    const klass = require('./Reference');
    return this[_values].actor = new klass(value);
  }
  get participantStatus() {
    return this[_values].participantStatus;
  }
  set participantStatus(value) {
    return this[_values].participantStatus = value;
  }
  get _participantStatus() {
    if (!this[_values]._participantStatus) {
      const klass = require('./Element');
      this[_values]._participantStatus = new klass();
    }
    return this[_values]._participantStatus;
  }
  set _participantStatus(value) {
    const klass = require('./Element');
    return this[_values]._participantStatus = new klass(value);
  }
  get comment() {
    return this[_values].comment;
  }
  set comment(value) {
    return this[_values].comment = value;
  }
  get _comment() {
    if (!this[_values]._comment) {
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
module.exports = AppointmentResponse;