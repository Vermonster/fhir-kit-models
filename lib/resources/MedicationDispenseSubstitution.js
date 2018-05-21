const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MedicationDispenseSubstitution extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationDispenseSubstitution ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get wasSubstituted() {
    return this[_values].wasSubstituted;
  }

  set wasSubstituted(value) {
    return this[_values].wasSubstituted = value;
  }

  get _wasSubstituted() {
    if (!isPresent(this[_values]._wasSubstituted)) {
      const klass = require('./Element');
      this[_values]._wasSubstituted = new klass();
    }
    return this[_values]._wasSubstituted;
  }

  set _wasSubstituted(value) {
    const klass = require('./Element');
    return this[_values]._wasSubstituted = new klass(value);
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }

  get reason() {
    if (!isPresent(this[_values].reason)) {
      const klass = require('./CodeableConcept');
      this[_values].reason = ArrayProxy(klass);
    }
    return this[_values].reason;
  }

  set reason(value) {
    const klass = require('./CodeableConcept');
    this[_values].reason = ArrayProxy(klass);
    value.forEach(entry => this[_values].reason.push(entry));
    return this[_values].reason;
  }

  get responsibleParty() {
    if (!isPresent(this[_values].responsibleParty)) {
      const klass = require('./Reference');
      this[_values].responsibleParty = ArrayProxy(klass);
    }
    return this[_values].responsibleParty;
  }

  set responsibleParty(value) {
    const klass = require('./Reference');
    this[_values].responsibleParty = ArrayProxy(klass);
    value.forEach(entry => this[_values].responsibleParty.push(entry));
    return this[_values].responsibleParty;
  }
}

module.exports = MedicationDispenseSubstitution;

