
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class EncounterStatusHistory extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof EncounterStatusHistory || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
}

module.exports = EncounterStatusHistory;

