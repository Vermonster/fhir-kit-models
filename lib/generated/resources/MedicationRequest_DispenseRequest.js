const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class MedicationRequest_DispenseRequest extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MedicationRequest_DispenseRequest || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get validityPeriod() {
    if (!isPresent(this[_values].validityPeriod)) {
      const klass = require('./Period');
      this[_values].validityPeriod = new klass();
    }
    return this[_values].validityPeriod;
  }

  set validityPeriod(value) {
    const klass = require('./Period');
    return this[_values].validityPeriod = new klass(value);
  }

  get numberOfRepeatsAllowed() {
    return this[_values].numberOfRepeatsAllowed;
  }

  set numberOfRepeatsAllowed(value) {
    return this[_values].numberOfRepeatsAllowed = value;
  }

  get _numberOfRepeatsAllowed() {
    if (!isPresent(this[_values]._numberOfRepeatsAllowed)) {
      const klass = require('./Element');
      this[_values]._numberOfRepeatsAllowed = new klass();
    }
    return this[_values]._numberOfRepeatsAllowed;
  }

  set _numberOfRepeatsAllowed(value) {
    const klass = require('./Element');
    return this[_values]._numberOfRepeatsAllowed = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get expectedSupplyDuration() {
    if (!isPresent(this[_values].expectedSupplyDuration)) {
      const klass = require('./Duration');
      this[_values].expectedSupplyDuration = new klass();
    }
    return this[_values].expectedSupplyDuration;
  }

  set expectedSupplyDuration(value) {
    const klass = require('./Duration');
    return this[_values].expectedSupplyDuration = new klass(value);
  }

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./Reference');
      this[_values].performer = new klass();
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./Reference');
    return this[_values].performer = new klass(value);
  }
}

module.exports = MedicationRequest_DispenseRequest;

