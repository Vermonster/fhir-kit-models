const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ClinicalImpression extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'ClinicalImpression';
    if (values instanceof ClinicalImpression ||
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
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }

  get effectiveDateTime() {
    return this[_values].effectiveDateTime;
  }

  set effectiveDateTime(value) {
    return this[_values].effectiveDateTime = value;
  }

  get _effectiveDateTime() {
    if (!isPresent(this[_values]._effectiveDateTime)) {
      const klass = require('./Element');
      this[_values]._effectiveDateTime = new klass();
    }
    return this[_values]._effectiveDateTime;
  }

  set _effectiveDateTime(value) {
    const klass = require('./Element');
    return this[_values]._effectiveDateTime = new klass(value);
  }

  get effectivePeriod() {
    if (!isPresent(this[_values].effectivePeriod)) {
      const klass = require('./Period');
      this[_values].effectivePeriod = new klass();
    }
    return this[_values].effectivePeriod;
  }

  set effectivePeriod(value) {
    const klass = require('./Period');
    return this[_values].effectivePeriod = new klass(value);
  }

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get assessor() {
    if (!isPresent(this[_values].assessor)) {
      const klass = require('./Reference');
      this[_values].assessor = new klass();
    }
    return this[_values].assessor;
  }

  set assessor(value) {
    const klass = require('./Reference');
    return this[_values].assessor = new klass(value);
  }

  get previous() {
    if (!isPresent(this[_values].previous)) {
      const klass = require('./Reference');
      this[_values].previous = new klass();
    }
    return this[_values].previous;
  }

  set previous(value) {
    const klass = require('./Reference');
    return this[_values].previous = new klass(value);
  }

  get problem() {
    if (!isPresent(this[_values].problem)) {
      const klass = require('./Reference');
      this[_values].problem = ArrayProxy(klass);
    }
    return this[_values].problem;
  }

  set problem(value) {
    const klass = require('./Reference');
    this[_values].problem = ArrayProxy(klass);
    value.forEach(entry => this[_values].problem.push(entry));
    return this[_values].problem;
  }

  get investigation() {
    if (!isPresent(this[_values].investigation)) {
      const klass = require('./ClinicalImpressionInvestigation');
      this[_values].investigation = ArrayProxy(klass);
    }
    return this[_values].investigation;
  }

  set investigation(value) {
    const klass = require('./ClinicalImpressionInvestigation');
    this[_values].investigation = ArrayProxy(klass);
    value.forEach(entry => this[_values].investigation.push(entry));
    return this[_values].investigation;
  }

  get protocol() {
    return this[_values].protocol;
  }

  set protocol(value) {
    return this[_values].protocol = value;
  }

  get _protocol() {
    if (!isPresent(this[_values]._protocol)) {
      const klass = require('./Element');
      this[_values]._protocol = ArrayProxy(klass);
    }
    return this[_values]._protocol;
  }

  set _protocol(value) {
    const klass = require('./Element');
    this[_values]._protocol = ArrayProxy(klass);
    value.forEach(entry => this[_values]._protocol.push(entry));
    return this[_values]._protocol;
  }

  get summary() {
    return this[_values].summary;
  }

  set summary(value) {
    return this[_values].summary = value;
  }

  get _summary() {
    if (!isPresent(this[_values]._summary)) {
      const klass = require('./Element');
      this[_values]._summary = new klass();
    }
    return this[_values]._summary;
  }

  set _summary(value) {
    const klass = require('./Element');
    return this[_values]._summary = new klass(value);
  }

  get finding() {
    if (!isPresent(this[_values].finding)) {
      const klass = require('./ClinicalImpressionFinding');
      this[_values].finding = ArrayProxy(klass);
    }
    return this[_values].finding;
  }

  set finding(value) {
    const klass = require('./ClinicalImpressionFinding');
    this[_values].finding = ArrayProxy(klass);
    value.forEach(entry => this[_values].finding.push(entry));
    return this[_values].finding;
  }

  get prognosisCodeableConcept() {
    if (!isPresent(this[_values].prognosisCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].prognosisCodeableConcept = ArrayProxy(klass);
    }
    return this[_values].prognosisCodeableConcept;
  }

  set prognosisCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    this[_values].prognosisCodeableConcept = ArrayProxy(klass);
    value.forEach(entry => this[_values].prognosisCodeableConcept.push(entry));
    return this[_values].prognosisCodeableConcept;
  }

  get prognosisReference() {
    if (!isPresent(this[_values].prognosisReference)) {
      const klass = require('./Reference');
      this[_values].prognosisReference = ArrayProxy(klass);
    }
    return this[_values].prognosisReference;
  }

  set prognosisReference(value) {
    const klass = require('./Reference');
    this[_values].prognosisReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].prognosisReference.push(entry));
    return this[_values].prognosisReference;
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./Reference');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./Reference');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }

  get note() {
    if (!isPresent(this[_values].note)) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }

  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }
}

module.exports = ClinicalImpression;

