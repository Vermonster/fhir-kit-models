const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class DeviceMetric_Calibration extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DeviceMetric_Calibration || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get state() {
    return this[_values].state;
  }

  set state(value) {
    return this[_values].state = value;
  }

  get _state() {
    if (!isPresent(this[_values]._state)) {
      const klass = require('./Element');
      this[_values]._state = new klass();
    }
    return this[_values]._state;
  }

  set _state(value) {
    const klass = require('./Element');
    return this[_values]._state = new klass(value);
  }

  get time() {
    return this[_values].time;
  }

  set time(value) {
    return this[_values].time = value;
  }

  get _time() {
    if (!isPresent(this[_values]._time)) {
      const klass = require('./Element');
      this[_values]._time = new klass();
    }
    return this[_values]._time;
  }

  set _time(value) {
    const klass = require('./Element');
    return this[_values]._time = new klass(value);
  }
}

module.exports = DeviceMetric_Calibration;

