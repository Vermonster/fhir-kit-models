const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Composition_Event extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Composition_Event || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = ArrayProxy(klass);
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    this[_values].code = ArrayProxy(klass);
    value.forEach(entry => this[_values].code.push(entry));
    return this[_values].code;
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

  get detail() {
    if (!isPresent(this[_values].detail)) {
      const klass = require('./Reference');
      this[_values].detail = ArrayProxy(klass);
    }
    return this[_values].detail;
  }

  set detail(value) {
    const klass = require('./Reference');
    this[_values].detail = ArrayProxy(klass);
    value.forEach(entry => this[_values].detail.push(entry));
    return this[_values].detail;
  }
}

module.exports = Composition_Event;

