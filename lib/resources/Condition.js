const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Condition extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Condition || values instanceof DomainResource) {
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

  get clinicalStatus() {
    return this[_values].clinicalStatus;
  }

  set clinicalStatus(value) {
    return this[_values].clinicalStatus = value;
  }

  get _clinicalStatus() {
    if (!isPresent(this[_values]._clinicalStatus)) {
      const klass = require('./Element');
      this[_values]._clinicalStatus = new klass();
    }
    return this[_values]._clinicalStatus;
  }

  set _clinicalStatus(value) {
    const klass = require('./Element');
    return this[_values]._clinicalStatus = new klass(value);
  }

  get verificationStatus() {
    return this[_values].verificationStatus;
  }

  set verificationStatus(value) {
    return this[_values].verificationStatus = value;
  }

  get _verificationStatus() {
    if (!isPresent(this[_values]._verificationStatus)) {
      const klass = require('./Element');
      this[_values]._verificationStatus = new klass();
    }
    return this[_values]._verificationStatus;
  }

  set _verificationStatus(value) {
    const klass = require('./Element');
    return this[_values]._verificationStatus = new klass(value);
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = ArrayProxy(klass);
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    this[_values].category = ArrayProxy(klass);
    value.forEach(entry => this[_values].category.push(entry));
    return this[_values].category;
  }

  get severity() {
    if (!isPresent(this[_values].severity)) {
      const klass = require('./CodeableConcept');
      this[_values].severity = new klass();
    }
    return this[_values].severity;
  }

  set severity(value) {
    const klass = require('./CodeableConcept');
    return this[_values].severity = new klass(value);
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

  get bodySite() {
    if (!isPresent(this[_values].bodySite)) {
      const klass = require('./CodeableConcept');
      this[_values].bodySite = ArrayProxy(klass);
    }
    return this[_values].bodySite;
  }

  set bodySite(value) {
    const klass = require('./CodeableConcept');
    this[_values].bodySite = ArrayProxy(klass);
    value.forEach(entry => this[_values].bodySite.push(entry));
    return this[_values].bodySite;
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

  get onsetDateTime() {
    return this[_values].onsetDateTime;
  }

  set onsetDateTime(value) {
    return this[_values].onsetDateTime = value;
  }

  get _onsetDateTime() {
    if (!isPresent(this[_values]._onsetDateTime)) {
      const klass = require('./Element');
      this[_values]._onsetDateTime = new klass();
    }
    return this[_values]._onsetDateTime;
  }

  set _onsetDateTime(value) {
    const klass = require('./Element');
    return this[_values]._onsetDateTime = new klass(value);
  }

  get onsetAge() {
    if (!isPresent(this[_values].onsetAge)) {
      const klass = require('./Age');
      this[_values].onsetAge = new klass();
    }
    return this[_values].onsetAge;
  }

  set onsetAge(value) {
    const klass = require('./Age');
    return this[_values].onsetAge = new klass(value);
  }

  get onsetPeriod() {
    if (!isPresent(this[_values].onsetPeriod)) {
      const klass = require('./Period');
      this[_values].onsetPeriod = new klass();
    }
    return this[_values].onsetPeriod;
  }

  set onsetPeriod(value) {
    const klass = require('./Period');
    return this[_values].onsetPeriod = new klass(value);
  }

  get onsetRange() {
    if (!isPresent(this[_values].onsetRange)) {
      const klass = require('./Range');
      this[_values].onsetRange = new klass();
    }
    return this[_values].onsetRange;
  }

  set onsetRange(value) {
    const klass = require('./Range');
    return this[_values].onsetRange = new klass(value);
  }

  get onsetString() {
    return this[_values].onsetString;
  }

  set onsetString(value) {
    return this[_values].onsetString = value;
  }

  get _onsetString() {
    if (!isPresent(this[_values]._onsetString)) {
      const klass = require('./Element');
      this[_values]._onsetString = new klass();
    }
    return this[_values]._onsetString;
  }

  set _onsetString(value) {
    const klass = require('./Element');
    return this[_values]._onsetString = new klass(value);
  }

  get abatementDateTime() {
    return this[_values].abatementDateTime;
  }

  set abatementDateTime(value) {
    return this[_values].abatementDateTime = value;
  }

  get _abatementDateTime() {
    if (!isPresent(this[_values]._abatementDateTime)) {
      const klass = require('./Element');
      this[_values]._abatementDateTime = new klass();
    }
    return this[_values]._abatementDateTime;
  }

  set _abatementDateTime(value) {
    const klass = require('./Element');
    return this[_values]._abatementDateTime = new klass(value);
  }

  get abatementAge() {
    if (!isPresent(this[_values].abatementAge)) {
      const klass = require('./Age');
      this[_values].abatementAge = new klass();
    }
    return this[_values].abatementAge;
  }

  set abatementAge(value) {
    const klass = require('./Age');
    return this[_values].abatementAge = new klass(value);
  }

  get abatementBoolean() {
    return this[_values].abatementBoolean;
  }

  set abatementBoolean(value) {
    return this[_values].abatementBoolean = value;
  }

  get _abatementBoolean() {
    if (!isPresent(this[_values]._abatementBoolean)) {
      const klass = require('./Element');
      this[_values]._abatementBoolean = new klass();
    }
    return this[_values]._abatementBoolean;
  }

  set _abatementBoolean(value) {
    const klass = require('./Element');
    return this[_values]._abatementBoolean = new klass(value);
  }

  get abatementPeriod() {
    if (!isPresent(this[_values].abatementPeriod)) {
      const klass = require('./Period');
      this[_values].abatementPeriod = new klass();
    }
    return this[_values].abatementPeriod;
  }

  set abatementPeriod(value) {
    const klass = require('./Period');
    return this[_values].abatementPeriod = new klass(value);
  }

  get abatementRange() {
    if (!isPresent(this[_values].abatementRange)) {
      const klass = require('./Range');
      this[_values].abatementRange = new klass();
    }
    return this[_values].abatementRange;
  }

  set abatementRange(value) {
    const klass = require('./Range');
    return this[_values].abatementRange = new klass(value);
  }

  get abatementString() {
    return this[_values].abatementString;
  }

  set abatementString(value) {
    return this[_values].abatementString = value;
  }

  get _abatementString() {
    if (!isPresent(this[_values]._abatementString)) {
      const klass = require('./Element');
      this[_values]._abatementString = new klass();
    }
    return this[_values]._abatementString;
  }

  set _abatementString(value) {
    const klass = require('./Element');
    return this[_values]._abatementString = new klass(value);
  }

  get assertedDate() {
    return this[_values].assertedDate;
  }

  set assertedDate(value) {
    return this[_values].assertedDate = value;
  }

  get _assertedDate() {
    if (!isPresent(this[_values]._assertedDate)) {
      const klass = require('./Element');
      this[_values]._assertedDate = new klass();
    }
    return this[_values]._assertedDate;
  }

  set _assertedDate(value) {
    const klass = require('./Element');
    return this[_values]._assertedDate = new klass(value);
  }

  get asserter() {
    if (!isPresent(this[_values].asserter)) {
      const klass = require('./Reference');
      this[_values].asserter = new klass();
    }
    return this[_values].asserter;
  }

  set asserter(value) {
    const klass = require('./Reference');
    return this[_values].asserter = new klass(value);
  }

  get stage() {
    if (!isPresent(this[_values].stage)) {
      const klass = require('./Condition_Stage');
      this[_values].stage = new klass();
    }
    return this[_values].stage;
  }

  set stage(value) {
    const klass = require('./Condition_Stage');
    return this[_values].stage = new klass(value);
  }

  get evidence() {
    if (!isPresent(this[_values].evidence)) {
      const klass = require('./Condition_Evidence');
      this[_values].evidence = ArrayProxy(klass);
    }
    return this[_values].evidence;
  }

  set evidence(value) {
    const klass = require('./Condition_Evidence');
    this[_values].evidence = ArrayProxy(klass);
    value.forEach(entry => this[_values].evidence.push(entry));
    return this[_values].evidence;
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

module.exports = Condition;

