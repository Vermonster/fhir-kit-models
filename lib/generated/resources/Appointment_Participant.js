const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Appointment_Participant extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Appointment_Participant || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get type() {
    if (!this[_values].type) {
      const klass = require('./CodeableConcept');
      this[_values].type = ArrayProxy(klass);
    }
    return this[_values].type;
  }
  set type(value) {
    const klass = require('./CodeableConcept');
    this[_values].type = ArrayProxy(klass);
    value.forEach(entry => this[_values].type.push(entry));
    return this[_values].type;
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
  get required() {
    return this[_values].required;
  }
  set required(value) {
    return this[_values].required = value;
  }
  get _required() {
    if (!this[_values]._required) {
      const klass = require('./Element');
      this[_values]._required = new klass();
    }
    return this[_values]._required;
  }
  set _required(value) {
    const klass = require('./Element');
    return this[_values]._required = new klass(value);
  }
  get status() {
    return this[_values].status;
  }
  set status(value) {
    return this[_values].status = value;
  }
  get _status() {
    if (!this[_values]._status) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }
  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }
}
module.exports = Appointment_Participant;