const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class Patient_Animal extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Patient_Animal || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get species() {
    if (!isPresent(this[_values].species)) {
      const klass = require('./CodeableConcept');
      this[_values].species = new klass();
    }
    return this[_values].species;
  }

  set species(value) {
    const klass = require('./CodeableConcept');
    return this[_values].species = new klass(value);
  }

  get breed() {
    if (!isPresent(this[_values].breed)) {
      const klass = require('./CodeableConcept');
      this[_values].breed = new klass();
    }
    return this[_values].breed;
  }

  set breed(value) {
    const klass = require('./CodeableConcept');
    return this[_values].breed = new klass(value);
  }

  get genderStatus() {
    if (!isPresent(this[_values].genderStatus)) {
      const klass = require('./CodeableConcept');
      this[_values].genderStatus = new klass();
    }
    return this[_values].genderStatus;
  }

  set genderStatus(value) {
    const klass = require('./CodeableConcept');
    return this[_values].genderStatus = new klass(value);
  }
}

module.exports = Patient_Animal;

