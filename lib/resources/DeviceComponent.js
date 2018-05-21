const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class DeviceComponent extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DeviceComponent ||
      values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

  get lastSystemChange() {
    return this[_values].lastSystemChange;
  }

  set lastSystemChange(value) {
    return this[_values].lastSystemChange = value;
  }

  get _lastSystemChange() {
    if (!isPresent(this[_values]._lastSystemChange)) {
      const klass = require('./Element');
      this[_values]._lastSystemChange = new klass();
    }
    return this[_values]._lastSystemChange;
  }

  set _lastSystemChange(value) {
    const klass = require('./Element');
    return this[_values]._lastSystemChange = new klass(value);
  }

  get source() {
    if (!isPresent(this[_values].source)) {
      const klass = require('./Reference');
      this[_values].source = new klass();
    }
    return this[_values].source;
  }

  set source(value) {
    const klass = require('./Reference');
    return this[_values].source = new klass(value);
  }

  get parent() {
    if (!isPresent(this[_values].parent)) {
      const klass = require('./Reference');
      this[_values].parent = new klass();
    }
    return this[_values].parent;
  }

  set parent(value) {
    const klass = require('./Reference');
    return this[_values].parent = new klass(value);
  }

  get operationalStatus() {
    if (!isPresent(this[_values].operationalStatus)) {
      const klass = require('./CodeableConcept');
      this[_values].operationalStatus = ArrayProxy(klass);
    }
    return this[_values].operationalStatus;
  }

  set operationalStatus(value) {
    const klass = require('./CodeableConcept');
    this[_values].operationalStatus = ArrayProxy(klass);
    value.forEach(entry => this[_values].operationalStatus.push(entry));
    return this[_values].operationalStatus;
  }

  get parameterGroup() {
    if (!isPresent(this[_values].parameterGroup)) {
      const klass = require('./CodeableConcept');
      this[_values].parameterGroup = new klass();
    }
    return this[_values].parameterGroup;
  }

  set parameterGroup(value) {
    const klass = require('./CodeableConcept');
    return this[_values].parameterGroup = new klass(value);
  }

  get measurementPrinciple() {
    return this[_values].measurementPrinciple;
  }

  set measurementPrinciple(value) {
    return this[_values].measurementPrinciple = value;
  }

  get _measurementPrinciple() {
    if (!isPresent(this[_values]._measurementPrinciple)) {
      const klass = require('./Element');
      this[_values]._measurementPrinciple = new klass();
    }
    return this[_values]._measurementPrinciple;
  }

  set _measurementPrinciple(value) {
    const klass = require('./Element');
    return this[_values]._measurementPrinciple = new klass(value);
  }

  get productionSpecification() {
    if (!isPresent(this[_values].productionSpecification)) {
      const klass = require('./DeviceComponentProductionSpecification');
      this[_values].productionSpecification = ArrayProxy(klass);
    }
    return this[_values].productionSpecification;
  }

  set productionSpecification(value) {
    const klass = require('./DeviceComponentProductionSpecification');
    this[_values].productionSpecification = ArrayProxy(klass);
    value.forEach(entry => this[_values].productionSpecification.push(entry));
    return this[_values].productionSpecification;
  }

  get languageCode() {
    if (!isPresent(this[_values].languageCode)) {
      const klass = require('./CodeableConcept');
      this[_values].languageCode = new klass();
    }
    return this[_values].languageCode;
  }

  set languageCode(value) {
    const klass = require('./CodeableConcept');
    return this[_values].languageCode = new klass(value);
  }
}

module.exports = DeviceComponent;

