const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class DocumentReference_Context extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DocumentReference_Context || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get encounter() {
    if (!isPresent(this[_values].encounter)) {
      const klass = require('./Reference');
      this[_values].encounter = new klass();
    }
    return this[_values].encounter;
  }

  set encounter(value) {
    const klass = require('./Reference');
    return this[_values].encounter = new klass(value);
  }

  get event() {
    if (!isPresent(this[_values].event)) {
      const klass = require('./CodeableConcept');
      this[_values].event = ArrayProxy(klass);
    }
    return this[_values].event;
  }

  set event(value) {
    const klass = require('./CodeableConcept');
    this[_values].event = ArrayProxy(klass);
    value.forEach(entry => this[_values].event.push(entry));
    return this[_values].event;
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

  get facilityType() {
    if (!isPresent(this[_values].facilityType)) {
      const klass = require('./CodeableConcept');
      this[_values].facilityType = new klass();
    }
    return this[_values].facilityType;
  }

  set facilityType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].facilityType = new klass(value);
  }

  get practiceSetting() {
    if (!isPresent(this[_values].practiceSetting)) {
      const klass = require('./CodeableConcept');
      this[_values].practiceSetting = new klass();
    }
    return this[_values].practiceSetting;
  }

  set practiceSetting(value) {
    const klass = require('./CodeableConcept');
    return this[_values].practiceSetting = new klass(value);
  }

  get sourcePatientInfo() {
    if (!isPresent(this[_values].sourcePatientInfo)) {
      const klass = require('./Reference');
      this[_values].sourcePatientInfo = new klass();
    }
    return this[_values].sourcePatientInfo;
  }

  set sourcePatientInfo(value) {
    const klass = require('./Reference');
    return this[_values].sourcePatientInfo = new klass(value);
  }

  get related() {
    if (!isPresent(this[_values].related)) {
      const klass = require('./DocumentReference_Related');
      this[_values].related = ArrayProxy(klass);
    }
    return this[_values].related;
  }

  set related(value) {
    const klass = require('./DocumentReference_Related');
    this[_values].related = ArrayProxy(klass);
    value.forEach(entry => this[_values].related.push(entry));
    return this[_values].related;
  }
}

module.exports = DocumentReference_Context;

