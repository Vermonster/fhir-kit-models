const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MedicationPackage extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationPackage ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get container() {
    if (!isPresent(this[_values].container)) {
      const klass = require('./CodeableConcept');
      this[_values].container = new klass();
    }
    return this[_values].container;
  }

  set container(value) {
    const klass = require('./CodeableConcept');
    return this[_values].container = new klass(value);
  }

  get content() {
    if (!isPresent(this[_values].content)) {
      const klass = require('./MedicationContent');
      this[_values].content = ArrayProxy(klass);
    }
    return this[_values].content;
  }

  set content(value) {
    const klass = require('./MedicationContent');
    this[_values].content = ArrayProxy(klass);
    value.forEach(entry => this[_values].content.push(entry));
    return this[_values].content;
  }

  get batch() {
    if (!isPresent(this[_values].batch)) {
      const klass = require('./MedicationBatch');
      this[_values].batch = ArrayProxy(klass);
    }
    return this[_values].batch;
  }

  set batch(value) {
    const klass = require('./MedicationBatch');
    this[_values].batch = ArrayProxy(klass);
    value.forEach(entry => this[_values].batch.push(entry));
    return this[_values].batch;
  }
}

module.exports = MedicationPackage;
