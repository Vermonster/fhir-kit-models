const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Encounter_Hospitalization extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Encounter_Hospitalization || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get preAdmissionIdentifier() {
    if (!isPresent(this[_values].preAdmissionIdentifier)) {
      const klass = require('./Identifier');
      this[_values].preAdmissionIdentifier = new klass();
    }
    return this[_values].preAdmissionIdentifier;
  }

  set preAdmissionIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].preAdmissionIdentifier = new klass(value);
  }

  get origin() {
    if (!isPresent(this[_values].origin)) {
      const klass = require('./Reference');
      this[_values].origin = new klass();
    }
    return this[_values].origin;
  }

  set origin(value) {
    const klass = require('./Reference');
    return this[_values].origin = new klass(value);
  }

  get admitSource() {
    if (!isPresent(this[_values].admitSource)) {
      const klass = require('./CodeableConcept');
      this[_values].admitSource = new klass();
    }
    return this[_values].admitSource;
  }

  set admitSource(value) {
    const klass = require('./CodeableConcept');
    return this[_values].admitSource = new klass(value);
  }

  get reAdmission() {
    if (!isPresent(this[_values].reAdmission)) {
      const klass = require('./CodeableConcept');
      this[_values].reAdmission = new klass();
    }
    return this[_values].reAdmission;
  }

  set reAdmission(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reAdmission = new klass(value);
  }

  get dietPreference() {
    if (!isPresent(this[_values].dietPreference)) {
      const klass = require('./CodeableConcept');
      this[_values].dietPreference = ArrayProxy(klass);
    }
    return this[_values].dietPreference;
  }

  set dietPreference(value) {
    const klass = require('./CodeableConcept');
    this[_values].dietPreference = ArrayProxy(klass);
    value.forEach(entry => this[_values].dietPreference.push(entry));
    return this[_values].dietPreference;
  }

  get specialCourtesy() {
    if (!isPresent(this[_values].specialCourtesy)) {
      const klass = require('./CodeableConcept');
      this[_values].specialCourtesy = ArrayProxy(klass);
    }
    return this[_values].specialCourtesy;
  }

  set specialCourtesy(value) {
    const klass = require('./CodeableConcept');
    this[_values].specialCourtesy = ArrayProxy(klass);
    value.forEach(entry => this[_values].specialCourtesy.push(entry));
    return this[_values].specialCourtesy;
  }

  get specialArrangement() {
    if (!isPresent(this[_values].specialArrangement)) {
      const klass = require('./CodeableConcept');
      this[_values].specialArrangement = ArrayProxy(klass);
    }
    return this[_values].specialArrangement;
  }

  set specialArrangement(value) {
    const klass = require('./CodeableConcept');
    this[_values].specialArrangement = ArrayProxy(klass);
    value.forEach(entry => this[_values].specialArrangement.push(entry));
    return this[_values].specialArrangement;
  }

  get destination() {
    if (!isPresent(this[_values].destination)) {
      const klass = require('./Reference');
      this[_values].destination = new klass();
    }
    return this[_values].destination;
  }

  set destination(value) {
    const klass = require('./Reference');
    return this[_values].destination = new klass(value);
  }

  get dischargeDisposition() {
    if (!isPresent(this[_values].dischargeDisposition)) {
      const klass = require('./CodeableConcept');
      this[_values].dischargeDisposition = new klass();
    }
    return this[_values].dischargeDisposition;
  }

  set dischargeDisposition(value) {
    const klass = require('./CodeableConcept');
    return this[_values].dischargeDisposition = new klass(value);
  }
}

module.exports = Encounter_Hospitalization;

