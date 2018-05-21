const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class DeviceMetric extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DeviceMetric || values instanceof DomainResource) {
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

  get unit() {
    if (!isPresent(this[_values].unit)) {
      const klass = require('./CodeableConcept');
      this[_values].unit = new klass();
    }
    return this[_values].unit;
  }

  set unit(value) {
    const klass = require('./CodeableConcept');
    return this[_values].unit = new klass(value);
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
    return this[_values].operationalStatus;
  }

  set operationalStatus(value) {
    return this[_values].operationalStatus = value;
  }

  get _operationalStatus() {
    if (!isPresent(this[_values]._operationalStatus)) {
      const klass = require('./Element');
      this[_values]._operationalStatus = new klass();
    }
    return this[_values]._operationalStatus;
  }

  set _operationalStatus(value) {
    const klass = require('./Element');
    return this[_values]._operationalStatus = new klass(value);
  }

  get color() {
    return this[_values].color;
  }

  set color(value) {
    return this[_values].color = value;
  }

  get _color() {
    if (!isPresent(this[_values]._color)) {
      const klass = require('./Element');
      this[_values]._color = new klass();
    }
    return this[_values]._color;
  }

  set _color(value) {
    const klass = require('./Element');
    return this[_values]._color = new klass(value);
  }

  get category() {
    return this[_values].category;
  }

  set category(value) {
    return this[_values].category = value;
  }

  get _category() {
    if (!isPresent(this[_values]._category)) {
      const klass = require('./Element');
      this[_values]._category = new klass();
    }
    return this[_values]._category;
  }

  set _category(value) {
    const klass = require('./Element');
    return this[_values]._category = new klass(value);
  }

  get measurementPeriod() {
    if (!isPresent(this[_values].measurementPeriod)) {
      const klass = require('./Timing');
      this[_values].measurementPeriod = new klass();
    }
    return this[_values].measurementPeriod;
  }

  set measurementPeriod(value) {
    const klass = require('./Timing');
    return this[_values].measurementPeriod = new klass(value);
  }

  get calibration() {
    if (!isPresent(this[_values].calibration)) {
      const klass = require('./DeviceMetric_Calibration');
      this[_values].calibration = ArrayProxy(klass);
    }
    return this[_values].calibration;
  }

  set calibration(value) {
    const klass = require('./DeviceMetric_Calibration');
    this[_values].calibration = ArrayProxy(klass);
    value.forEach(entry => this[_values].calibration.push(entry));
    return this[_values].calibration;
  }
}

module.exports = DeviceMetric;

