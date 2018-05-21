const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class DiagnosticReport extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DiagnosticReport || values instanceof DomainResource) {
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

  get basedOn() {
    if (!isPresent(this[_values].basedOn)) {
      const klass = require('./Reference');
      this[_values].basedOn = ArrayProxy(klass);
    }
    return this[_values].basedOn;
  }

  set basedOn(value) {
    const klass = require('./Reference');
    this[_values].basedOn = ArrayProxy(klass);
    value.forEach(entry => this[_values].basedOn.push(entry));
    return this[_values].basedOn;
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

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
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

  get issued() {
    return this[_values].issued;
  }

  set issued(value) {
    return this[_values].issued = value;
  }

  get _issued() {
    if (!isPresent(this[_values]._issued)) {
      const klass = require('./Element');
      this[_values]._issued = new klass();
    }
    return this[_values]._issued;
  }

  set _issued(value) {
    const klass = require('./Element');
    return this[_values]._issued = new klass(value);
  }

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./DiagnosticReport_Performer');
      this[_values].performer = ArrayProxy(klass);
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./DiagnosticReport_Performer');
    this[_values].performer = ArrayProxy(klass);
    value.forEach(entry => this[_values].performer.push(entry));
    return this[_values].performer;
  }

  get specimen() {
    if (!isPresent(this[_values].specimen)) {
      const klass = require('./Reference');
      this[_values].specimen = ArrayProxy(klass);
    }
    return this[_values].specimen;
  }

  set specimen(value) {
    const klass = require('./Reference');
    this[_values].specimen = ArrayProxy(klass);
    value.forEach(entry => this[_values].specimen.push(entry));
    return this[_values].specimen;
  }

  get result() {
    if (!isPresent(this[_values].result)) {
      const klass = require('./Reference');
      this[_values].result = ArrayProxy(klass);
    }
    return this[_values].result;
  }

  set result(value) {
    const klass = require('./Reference');
    this[_values].result = ArrayProxy(klass);
    value.forEach(entry => this[_values].result.push(entry));
    return this[_values].result;
  }

  get imagingStudy() {
    if (!isPresent(this[_values].imagingStudy)) {
      const klass = require('./Reference');
      this[_values].imagingStudy = ArrayProxy(klass);
    }
    return this[_values].imagingStudy;
  }

  set imagingStudy(value) {
    const klass = require('./Reference');
    this[_values].imagingStudy = ArrayProxy(klass);
    value.forEach(entry => this[_values].imagingStudy.push(entry));
    return this[_values].imagingStudy;
  }

  get image() {
    if (!isPresent(this[_values].image)) {
      const klass = require('./DiagnosticReport_Image');
      this[_values].image = ArrayProxy(klass);
    }
    return this[_values].image;
  }

  set image(value) {
    const klass = require('./DiagnosticReport_Image');
    this[_values].image = ArrayProxy(klass);
    value.forEach(entry => this[_values].image.push(entry));
    return this[_values].image;
  }

  get conclusion() {
    return this[_values].conclusion;
  }

  set conclusion(value) {
    return this[_values].conclusion = value;
  }

  get _conclusion() {
    if (!isPresent(this[_values]._conclusion)) {
      const klass = require('./Element');
      this[_values]._conclusion = new klass();
    }
    return this[_values]._conclusion;
  }

  set _conclusion(value) {
    const klass = require('./Element');
    return this[_values]._conclusion = new klass(value);
  }

  get codedDiagnosis() {
    if (!isPresent(this[_values].codedDiagnosis)) {
      const klass = require('./CodeableConcept');
      this[_values].codedDiagnosis = ArrayProxy(klass);
    }
    return this[_values].codedDiagnosis;
  }

  set codedDiagnosis(value) {
    const klass = require('./CodeableConcept');
    this[_values].codedDiagnosis = ArrayProxy(klass);
    value.forEach(entry => this[_values].codedDiagnosis.push(entry));
    return this[_values].codedDiagnosis;
  }

  get presentedForm() {
    if (!isPresent(this[_values].presentedForm)) {
      const klass = require('./Attachment');
      this[_values].presentedForm = ArrayProxy(klass);
    }
    return this[_values].presentedForm;
  }

  set presentedForm(value) {
    const klass = require('./Attachment');
    this[_values].presentedForm = ArrayProxy(klass);
    value.forEach(entry => this[_values].presentedForm.push(entry));
    return this[_values].presentedForm;
  }
}

module.exports = DiagnosticReport;

