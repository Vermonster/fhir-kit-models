
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Procedure_FocalDevice extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Procedure_FocalDevice || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./CodeableConcept');
      this[_values].action = new klass();
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./CodeableConcept');
    return this[_values].action = new klass(value);
  }

  get manipulated() {
    if (!isPresent(this[_values].manipulated)) {
      const klass = require('./Reference');
      this[_values].manipulated = new klass();
    }
    return this[_values].manipulated;
  }

  set manipulated(value) {
    const klass = require('./Reference');
    return this[_values].manipulated = new klass(value);
  }
}

module.exports = Procedure_FocalDevice;

