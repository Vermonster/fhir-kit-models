const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class AllergyIntolerance extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AllergyIntolerance || values instanceof DomainResource) {
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

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
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
      this[_values]._category = ArrayProxy(klass);
    }
    return this[_values]._category;
  }

  set _category(value) {
    const klass = require('./Element');
    this[_values]._category = ArrayProxy(klass);
    value.forEach(entry => this[_values]._category.push(entry));
    return this[_values]._category;
  }

  get criticality() {
    return this[_values].criticality;
  }

  set criticality(value) {
    return this[_values].criticality = value;
  }

  get _criticality() {
    if (!isPresent(this[_values]._criticality)) {
      const klass = require('./Element');
      this[_values]._criticality = new klass();
    }
    return this[_values]._criticality;
  }

  set _criticality(value) {
    const klass = require('./Element');
    return this[_values]._criticality = new klass(value);
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

  get patient() {
    if (!isPresent(this[_values].patient)) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }

  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
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

  get recorder() {
    if (!isPresent(this[_values].recorder)) {
      const klass = require('./Reference');
      this[_values].recorder = new klass();
    }
    return this[_values].recorder;
  }

  set recorder(value) {
    const klass = require('./Reference');
    return this[_values].recorder = new klass(value);
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

  get lastOccurrence() {
    return this[_values].lastOccurrence;
  }

  set lastOccurrence(value) {
    return this[_values].lastOccurrence = value;
  }

  get _lastOccurrence() {
    if (!isPresent(this[_values]._lastOccurrence)) {
      const klass = require('./Element');
      this[_values]._lastOccurrence = new klass();
    }
    return this[_values]._lastOccurrence;
  }

  set _lastOccurrence(value) {
    const klass = require('./Element');
    return this[_values]._lastOccurrence = new klass(value);
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

  get reaction() {
    if (!isPresent(this[_values].reaction)) {
      const klass = require('./AllergyIntoleranceReaction');
      this[_values].reaction = ArrayProxy(klass);
    }
    return this[_values].reaction;
  }

  set reaction(value) {
    const klass = require('./AllergyIntoleranceReaction');
    this[_values].reaction = ArrayProxy(klass);
    value.forEach(entry => this[_values].reaction.push(entry));
    return this[_values].reaction;
  }
}

module.exports = AllergyIntolerance;

