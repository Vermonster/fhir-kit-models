const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Procedure extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Procedure || values instanceof DomainResource) {
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

  get partOf() {
    if (!isPresent(this[_values].partOf)) {
      const klass = require('./Reference');
      this[_values].partOf = ArrayProxy(klass);
    }
    return this[_values].partOf;
  }

  set partOf(value) {
    const klass = require('./Reference');
    this[_values].partOf = ArrayProxy(klass);
    value.forEach(entry => this[_values].partOf.push(entry));
    return this[_values].partOf;
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

  get performedDateTime() {
    return this[_values].performedDateTime;
  }

  set performedDateTime(value) {
    return this[_values].performedDateTime = value;
  }

  get _performedDateTime() {
    if (!isPresent(this[_values]._performedDateTime)) {
      const klass = require('./Element');
      this[_values]._performedDateTime = new klass();
    }
    return this[_values]._performedDateTime;
  }

  set _performedDateTime(value) {
    const klass = require('./Element');
    return this[_values]._performedDateTime = new klass(value);
  }

  get performedPeriod() {
    if (!isPresent(this[_values].performedPeriod)) {
      const klass = require('./Period');
      this[_values].performedPeriod = new klass();
    }
    return this[_values].performedPeriod;
  }

  set performedPeriod(value) {
    const klass = require('./Period');
    return this[_values].performedPeriod = new klass(value);
  }

  get performer() {
    if (!isPresent(this[_values].performer)) {
      const klass = require('./Procedure_Performer');
      this[_values].performer = ArrayProxy(klass);
    }
    return this[_values].performer;
  }

  set performer(value) {
    const klass = require('./Procedure_Performer');
    this[_values].performer = ArrayProxy(klass);
    value.forEach(entry => this[_values].performer.push(entry));
    return this[_values].performer;
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

  get report() {
    if (!isPresent(this[_values].report)) {
      const klass = require('./Reference');
      this[_values].report = ArrayProxy(klass);
    }
    return this[_values].report;
  }

  set report(value) {
    const klass = require('./Reference');
    this[_values].report = ArrayProxy(klass);
    value.forEach(entry => this[_values].report.push(entry));
    return this[_values].report;
  }

  get complication() {
    if (!isPresent(this[_values].complication)) {
      const klass = require('./CodeableConcept');
      this[_values].complication = ArrayProxy(klass);
    }
    return this[_values].complication;
  }

  set complication(value) {
    const klass = require('./CodeableConcept');
    this[_values].complication = ArrayProxy(klass);
    value.forEach(entry => this[_values].complication.push(entry));
    return this[_values].complication;
  }

  get complicationDetail() {
    if (!isPresent(this[_values].complicationDetail)) {
      const klass = require('./Reference');
      this[_values].complicationDetail = ArrayProxy(klass);
    }
    return this[_values].complicationDetail;
  }

  set complicationDetail(value) {
    const klass = require('./Reference');
    this[_values].complicationDetail = ArrayProxy(klass);
    value.forEach(entry => this[_values].complicationDetail.push(entry));
    return this[_values].complicationDetail;
  }

  get followUp() {
    if (!isPresent(this[_values].followUp)) {
      const klass = require('./CodeableConcept');
      this[_values].followUp = ArrayProxy(klass);
    }
    return this[_values].followUp;
  }

  set followUp(value) {
    const klass = require('./CodeableConcept');
    this[_values].followUp = ArrayProxy(klass);
    value.forEach(entry => this[_values].followUp.push(entry));
    return this[_values].followUp;
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

  get focalDevice() {
    if (!isPresent(this[_values].focalDevice)) {
      const klass = require('./Procedure_FocalDevice');
      this[_values].focalDevice = ArrayProxy(klass);
    }
    return this[_values].focalDevice;
  }

  set focalDevice(value) {
    const klass = require('./Procedure_FocalDevice');
    this[_values].focalDevice = ArrayProxy(klass);
    value.forEach(entry => this[_values].focalDevice.push(entry));
    return this[_values].focalDevice;
  }

  get usedReference() {
    if (!isPresent(this[_values].usedReference)) {
      const klass = require('./Reference');
      this[_values].usedReference = ArrayProxy(klass);
    }
    return this[_values].usedReference;
  }

  set usedReference(value) {
    const klass = require('./Reference');
    this[_values].usedReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].usedReference.push(entry));
    return this[_values].usedReference;
  }

  get usedCode() {
    if (!isPresent(this[_values].usedCode)) {
      const klass = require('./CodeableConcept');
      this[_values].usedCode = ArrayProxy(klass);
    }
    return this[_values].usedCode;
  }

  set usedCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].usedCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].usedCode.push(entry));
    return this[_values].usedCode;
  }
}

module.exports = Procedure;

