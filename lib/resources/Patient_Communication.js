const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Patient_Communication extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Patient_Communication || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get language() {
    if (!isPresent(this[_values].language)) {
      const klass = require('./CodeableConcept');
      this[_values].language = new klass();
    }
    return this[_values].language;
  }

  set language(value) {
    const klass = require('./CodeableConcept');
    return this[_values].language = new klass(value);
  }

  get preferred() {
    return this[_values].preferred;
  }

  set preferred(value) {
    return this[_values].preferred = value;
  }

  get _preferred() {
    if (!isPresent(this[_values]._preferred)) {
      const klass = require('./Element');
      this[_values]._preferred = new klass();
    }
    return this[_values]._preferred;
  }

  set _preferred(value) {
    const klass = require('./Element');
    return this[_values]._preferred = new klass(value);
  }
}

module.exports = Patient_Communication;

