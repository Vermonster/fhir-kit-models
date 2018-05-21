const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const Element = require('./Element');

class Timing extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Timing || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get event() {
    return this[_values].event;
  }

  set event(value) {
    return this[_values].event = value;
  }

  get _event() {
    if (!isPresent(this[_values]._event)) {
      const klass = require('./Element');
      this[_values]._event = ArrayProxy(klass);
    }
    return this[_values]._event;
  }

  set _event(value) {
    const klass = require('./Element');
    this[_values]._event = ArrayProxy(klass);
    value.forEach(entry => this[_values]._event.push(entry));
    return this[_values]._event;
  }

  get repeat() {
    if (!isPresent(this[_values].repeat)) {
      const klass = require('./Timing_Repeat');
      this[_values].repeat = new klass();
    }
    return this[_values].repeat;
  }

  set repeat(value) {
    const klass = require('./Timing_Repeat');
    return this[_values].repeat = new klass(value);
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }
}

module.exports = Timing;

