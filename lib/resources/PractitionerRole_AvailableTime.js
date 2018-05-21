const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class PractitionerRole_AvailableTime extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PractitionerRole_AvailableTime || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get daysOfWeek() {
    return this[_values].daysOfWeek;
  }

  set daysOfWeek(value) {
    return this[_values].daysOfWeek = value;
  }

  get _daysOfWeek() {
    if (!isPresent(this[_values]._daysOfWeek)) {
      const klass = require('./Element');
      this[_values]._daysOfWeek = ArrayProxy(klass);
    }
    return this[_values]._daysOfWeek;
  }

  set _daysOfWeek(value) {
    const klass = require('./Element');
    this[_values]._daysOfWeek = ArrayProxy(klass);
    value.forEach(entry => this[_values]._daysOfWeek.push(entry));
    return this[_values]._daysOfWeek;
  }

  get allDay() {
    return this[_values].allDay;
  }

  set allDay(value) {
    return this[_values].allDay = value;
  }

  get _allDay() {
    if (!isPresent(this[_values]._allDay)) {
      const klass = require('./Element');
      this[_values]._allDay = new klass();
    }
    return this[_values]._allDay;
  }

  set _allDay(value) {
    const klass = require('./Element');
    return this[_values]._allDay = new klass(value);
  }

  get availableStartTime() {
    return this[_values].availableStartTime;
  }

  set availableStartTime(value) {
    return this[_values].availableStartTime = value;
  }

  get _availableStartTime() {
    if (!isPresent(this[_values]._availableStartTime)) {
      const klass = require('./Element');
      this[_values]._availableStartTime = new klass();
    }
    return this[_values]._availableStartTime;
  }

  set _availableStartTime(value) {
    const klass = require('./Element');
    return this[_values]._availableStartTime = new klass(value);
  }

  get availableEndTime() {
    return this[_values].availableEndTime;
  }

  set availableEndTime(value) {
    return this[_values].availableEndTime = value;
  }

  get _availableEndTime() {
    if (!isPresent(this[_values]._availableEndTime)) {
      const klass = require('./Element');
      this[_values]._availableEndTime = new klass();
    }
    return this[_values]._availableEndTime;
  }

  set _availableEndTime(value) {
    const klass = require('./Element');
    return this[_values]._availableEndTime = new klass(value);
  }
}

module.exports = PractitionerRole_AvailableTime;

