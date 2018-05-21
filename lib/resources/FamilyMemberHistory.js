const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class FamilyMemberHistory extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof FamilyMemberHistory || values instanceof DomainResource) {
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

  get definition() {
    if (!isPresent(this[_values].definition)) {
      const klass = require('./Reference');
      this[_values].definition = ArrayProxy(klass);
    }
    return this[_values].definition;
  }

  set definition(value) {
    const klass = require('./Reference');
    this[_values].definition = ArrayProxy(klass);
    value.forEach(entry => this[_values].definition.push(entry));
    return this[_values].definition;
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

  get notDone() {
    return this[_values].notDone;
  }

  set notDone(value) {
    return this[_values].notDone = value;
  }

  get _notDone() {
    if (!isPresent(this[_values]._notDone)) {
      const klass = require('./Element');
      this[_values]._notDone = new klass();
    }
    return this[_values]._notDone;
  }

  set _notDone(value) {
    const klass = require('./Element');
    return this[_values]._notDone = new klass(value);
  }

  get notDoneReason() {
    if (!isPresent(this[_values].notDoneReason)) {
      const klass = require('./CodeableConcept');
      this[_values].notDoneReason = new klass();
    }
    return this[_values].notDoneReason;
  }

  set notDoneReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].notDoneReason = new klass(value);
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

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }

  get relationship() {
    if (!isPresent(this[_values].relationship)) {
      const klass = require('./CodeableConcept');
      this[_values].relationship = new klass();
    }
    return this[_values].relationship;
  }

  set relationship(value) {
    const klass = require('./CodeableConcept');
    return this[_values].relationship = new klass(value);
  }

  get gender() {
    return this[_values].gender;
  }

  set gender(value) {
    return this[_values].gender = value;
  }

  get _gender() {
    if (!isPresent(this[_values]._gender)) {
      const klass = require('./Element');
      this[_values]._gender = new klass();
    }
    return this[_values]._gender;
  }

  set _gender(value) {
    const klass = require('./Element');
    return this[_values]._gender = new klass(value);
  }

  get bornPeriod() {
    if (!isPresent(this[_values].bornPeriod)) {
      const klass = require('./Period');
      this[_values].bornPeriod = new klass();
    }
    return this[_values].bornPeriod;
  }

  set bornPeriod(value) {
    const klass = require('./Period');
    return this[_values].bornPeriod = new klass(value);
  }

  get bornDate() {
    return this[_values].bornDate;
  }

  set bornDate(value) {
    return this[_values].bornDate = value;
  }

  get _bornDate() {
    if (!isPresent(this[_values]._bornDate)) {
      const klass = require('./Element');
      this[_values]._bornDate = new klass();
    }
    return this[_values]._bornDate;
  }

  set _bornDate(value) {
    const klass = require('./Element');
    return this[_values]._bornDate = new klass(value);
  }

  get bornString() {
    return this[_values].bornString;
  }

  set bornString(value) {
    return this[_values].bornString = value;
  }

  get _bornString() {
    if (!isPresent(this[_values]._bornString)) {
      const klass = require('./Element');
      this[_values]._bornString = new klass();
    }
    return this[_values]._bornString;
  }

  set _bornString(value) {
    const klass = require('./Element');
    return this[_values]._bornString = new klass(value);
  }

  get ageAge() {
    if (!isPresent(this[_values].ageAge)) {
      const klass = require('./Age');
      this[_values].ageAge = new klass();
    }
    return this[_values].ageAge;
  }

  set ageAge(value) {
    const klass = require('./Age');
    return this[_values].ageAge = new klass(value);
  }

  get ageRange() {
    if (!isPresent(this[_values].ageRange)) {
      const klass = require('./Range');
      this[_values].ageRange = new klass();
    }
    return this[_values].ageRange;
  }

  set ageRange(value) {
    const klass = require('./Range');
    return this[_values].ageRange = new klass(value);
  }

  get ageString() {
    return this[_values].ageString;
  }

  set ageString(value) {
    return this[_values].ageString = value;
  }

  get _ageString() {
    if (!isPresent(this[_values]._ageString)) {
      const klass = require('./Element');
      this[_values]._ageString = new klass();
    }
    return this[_values]._ageString;
  }

  set _ageString(value) {
    const klass = require('./Element');
    return this[_values]._ageString = new klass(value);
  }

  get estimatedAge() {
    return this[_values].estimatedAge;
  }

  set estimatedAge(value) {
    return this[_values].estimatedAge = value;
  }

  get _estimatedAge() {
    if (!isPresent(this[_values]._estimatedAge)) {
      const klass = require('./Element');
      this[_values]._estimatedAge = new klass();
    }
    return this[_values]._estimatedAge;
  }

  set _estimatedAge(value) {
    const klass = require('./Element');
    return this[_values]._estimatedAge = new klass(value);
  }

  get deceasedBoolean() {
    return this[_values].deceasedBoolean;
  }

  set deceasedBoolean(value) {
    return this[_values].deceasedBoolean = value;
  }

  get _deceasedBoolean() {
    if (!isPresent(this[_values]._deceasedBoolean)) {
      const klass = require('./Element');
      this[_values]._deceasedBoolean = new klass();
    }
    return this[_values]._deceasedBoolean;
  }

  set _deceasedBoolean(value) {
    const klass = require('./Element');
    return this[_values]._deceasedBoolean = new klass(value);
  }

  get deceasedAge() {
    if (!isPresent(this[_values].deceasedAge)) {
      const klass = require('./Age');
      this[_values].deceasedAge = new klass();
    }
    return this[_values].deceasedAge;
  }

  set deceasedAge(value) {
    const klass = require('./Age');
    return this[_values].deceasedAge = new klass(value);
  }

  get deceasedRange() {
    if (!isPresent(this[_values].deceasedRange)) {
      const klass = require('./Range');
      this[_values].deceasedRange = new klass();
    }
    return this[_values].deceasedRange;
  }

  set deceasedRange(value) {
    const klass = require('./Range');
    return this[_values].deceasedRange = new klass(value);
  }

  get deceasedDate() {
    return this[_values].deceasedDate;
  }

  set deceasedDate(value) {
    return this[_values].deceasedDate = value;
  }

  get _deceasedDate() {
    if (!isPresent(this[_values]._deceasedDate)) {
      const klass = require('./Element');
      this[_values]._deceasedDate = new klass();
    }
    return this[_values]._deceasedDate;
  }

  set _deceasedDate(value) {
    const klass = require('./Element');
    return this[_values]._deceasedDate = new klass(value);
  }

  get deceasedString() {
    return this[_values].deceasedString;
  }

  set deceasedString(value) {
    return this[_values].deceasedString = value;
  }

  get _deceasedString() {
    if (!isPresent(this[_values]._deceasedString)) {
      const klass = require('./Element');
      this[_values]._deceasedString = new klass();
    }
    return this[_values]._deceasedString;
  }

  set _deceasedString(value) {
    const klass = require('./Element');
    return this[_values]._deceasedString = new klass(value);
  }

  get reasonCode() {
    if (!isPresent(this[_values].reasonCode)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCode = ArrayProxy(klass);
    }
    return this[_values].reasonCode;
  }

  set reasonCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].reasonCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonCode.push(entry));
    return this[_values].reasonCode;
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = ArrayProxy(klass);
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    this[_values].reasonReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonReference.push(entry));
    return this[_values].reasonReference;
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

  get condition() {
    if (!isPresent(this[_values].condition)) {
      const klass = require('./FamilyMemberHistory_Condition');
      this[_values].condition = ArrayProxy(klass);
    }
    return this[_values].condition;
  }

  set condition(value) {
    const klass = require('./FamilyMemberHistory_Condition');
    this[_values].condition = ArrayProxy(klass);
    value.forEach(entry => this[_values].condition.push(entry));
    return this[_values].condition;
  }
}

module.exports = FamilyMemberHistory;

