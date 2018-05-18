const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Device_Udi extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Device_Udi || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get deviceIdentifier() {
    return this[_values].deviceIdentifier;
  }
  set deviceIdentifier(value) {
    return this[_values].deviceIdentifier = value;
  }
  get _deviceIdentifier() {
    if (!this[_values]._deviceIdentifier) {
      const klass = require('./Element');
      this[_values]._deviceIdentifier = new klass();
    }
    return this[_values]._deviceIdentifier;
  }
  set _deviceIdentifier(value) {
    const klass = require('./Element');
    return this[_values]._deviceIdentifier = new klass(value);
  }
  get name() {
    return this[_values].name;
  }
  set name(value) {
    return this[_values].name = value;
  }
  get _name() {
    if (!this[_values]._name) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }
  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }
  get jurisdiction() {
    return this[_values].jurisdiction;
  }
  set jurisdiction(value) {
    return this[_values].jurisdiction = value;
  }
  get _jurisdiction() {
    if (!this[_values]._jurisdiction) {
      const klass = require('./Element');
      this[_values]._jurisdiction = new klass();
    }
    return this[_values]._jurisdiction;
  }
  set _jurisdiction(value) {
    const klass = require('./Element');
    return this[_values]._jurisdiction = new klass(value);
  }
  get carrierHRF() {
    return this[_values].carrierHRF;
  }
  set carrierHRF(value) {
    return this[_values].carrierHRF = value;
  }
  get _carrierHRF() {
    if (!this[_values]._carrierHRF) {
      const klass = require('./Element');
      this[_values]._carrierHRF = new klass();
    }
    return this[_values]._carrierHRF;
  }
  set _carrierHRF(value) {
    const klass = require('./Element');
    return this[_values]._carrierHRF = new klass(value);
  }
  get carrierAIDC() {
    return this[_values].carrierAIDC;
  }
  set carrierAIDC(value) {
    return this[_values].carrierAIDC = value;
  }
  get _carrierAIDC() {
    if (!this[_values]._carrierAIDC) {
      const klass = require('./Element');
      this[_values]._carrierAIDC = new klass();
    }
    return this[_values]._carrierAIDC;
  }
  set _carrierAIDC(value) {
    const klass = require('./Element');
    return this[_values]._carrierAIDC = new klass(value);
  }
  get issuer() {
    return this[_values].issuer;
  }
  set issuer(value) {
    return this[_values].issuer = value;
  }
  get _issuer() {
    if (!this[_values]._issuer) {
      const klass = require('./Element');
      this[_values]._issuer = new klass();
    }
    return this[_values]._issuer;
  }
  set _issuer(value) {
    const klass = require('./Element');
    return this[_values]._issuer = new klass(value);
  }
  get entryType() {
    return this[_values].entryType;
  }
  set entryType(value) {
    return this[_values].entryType = value;
  }
  get _entryType() {
    if (!this[_values]._entryType) {
      const klass = require('./Element');
      this[_values]._entryType = new klass();
    }
    return this[_values]._entryType;
  }
  set _entryType(value) {
    const klass = require('./Element');
    return this[_values]._entryType = new klass(value);
  }
}
module.exports = Device_Udi;