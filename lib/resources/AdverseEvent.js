const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class AdverseEvent extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AdverseEvent ||
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

  get reaction() {
    if (!isPresent(this[_values].reaction)) {
      const klass = require('./Reference');
      this[_values].reaction = ArrayProxy(klass);
    }
    return this[_values].reaction;
  }

  set reaction(value) {
    const klass = require('./Reference');
    this[_values].reaction = ArrayProxy(klass);
    value.forEach(entry => this[_values].reaction.push(entry));
    return this[_values].reaction;
  }

  get location() {
    if (!isPresent(this[_values].location)) {
      const klass = require('./Reference');
      this[_values].location = new klass();
    }
    return this[_values].location;
  }

  set location(value) {
    const klass = require('./Reference');
    return this[_values].location = new klass(value);
  }

  get seriousness() {
    if (!isPresent(this[_values].seriousness)) {
      const klass = require('./CodeableConcept');
      this[_values].seriousness = new klass();
    }
    return this[_values].seriousness;
  }

  set seriousness(value) {
    const klass = require('./CodeableConcept');
    return this[_values].seriousness = new klass(value);
  }

  get outcome() {
    if (!isPresent(this[_values].outcome)) {
      const klass = require('./CodeableConcept');
      this[_values].outcome = new klass();
    }
    return this[_values].outcome;
  }

  set outcome(value) {
    const klass = require('./CodeableConcept');
    return this[_values].outcome = new klass(value);
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

  get eventParticipant() {
    if (!isPresent(this[_values].eventParticipant)) {
      const klass = require('./Reference');
      this[_values].eventParticipant = new klass();
    }
    return this[_values].eventParticipant;
  }

  set eventParticipant(value) {
    const klass = require('./Reference');
    return this[_values].eventParticipant = new klass(value);
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

  get suspectEntity() {
    if (!isPresent(this[_values].suspectEntity)) {
      const klass = require('./AdverseEventSuspectEntity');
      this[_values].suspectEntity = ArrayProxy(klass);
    }
    return this[_values].suspectEntity;
  }

  set suspectEntity(value) {
    const klass = require('./AdverseEventSuspectEntity');
    this[_values].suspectEntity = ArrayProxy(klass);
    value.forEach(entry => this[_values].suspectEntity.push(entry));
    return this[_values].suspectEntity;
  }

  get subjectMedicalHistory() {
    if (!isPresent(this[_values].subjectMedicalHistory)) {
      const klass = require('./Reference');
      this[_values].subjectMedicalHistory = ArrayProxy(klass);
    }
    return this[_values].subjectMedicalHistory;
  }

  set subjectMedicalHistory(value) {
    const klass = require('./Reference');
    this[_values].subjectMedicalHistory = ArrayProxy(klass);
    value.forEach(entry => this[_values].subjectMedicalHistory.push(entry));
    return this[_values].subjectMedicalHistory;
  }

  get referenceDocument() {
    if (!isPresent(this[_values].referenceDocument)) {
      const klass = require('./Reference');
      this[_values].referenceDocument = ArrayProxy(klass);
    }
    return this[_values].referenceDocument;
  }

  set referenceDocument(value) {
    const klass = require('./Reference');
    this[_values].referenceDocument = ArrayProxy(klass);
    value.forEach(entry => this[_values].referenceDocument.push(entry));
    return this[_values].referenceDocument;
  }

  get study() {
    if (!isPresent(this[_values].study)) {
      const klass = require('./Reference');
      this[_values].study = ArrayProxy(klass);
    }
    return this[_values].study;
  }

  set study(value) {
    const klass = require('./Reference');
    this[_values].study = ArrayProxy(klass);
    value.forEach(entry => this[_values].study.push(entry));
    return this[_values].study;
  }
}

module.exports = AdverseEvent;

