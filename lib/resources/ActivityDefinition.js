const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ActivityDefinition extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ActivityDefinition ||
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

  get url() {
    return this[_values].url;
  }

  set url(value) {
    return this[_values].url = value;
  }

  get _url() {
    if (!isPresent(this[_values]._url)) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }

  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
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

  get version() {
    return this[_values].version;
  }

  set version(value) {
    return this[_values].version = value;
  }

  get _version() {
    if (!isPresent(this[_values]._version)) {
      const klass = require('./Element');
      this[_values]._version = new klass();
    }
    return this[_values]._version;
  }

  set _version(value) {
    const klass = require('./Element');
    return this[_values]._version = new klass(value);
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

  get title() {
    return this[_values].title;
  }

  set title(value) {
    return this[_values].title = value;
  }

  get _title() {
    if (!isPresent(this[_values]._title)) {
      const klass = require('./Element');
      this[_values]._title = new klass();
    }
    return this[_values]._title;
  }

  set _title(value) {
    const klass = require('./Element');
    return this[_values]._title = new klass(value);
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

  get experimental() {
    return this[_values].experimental;
  }

  set experimental(value) {
    return this[_values].experimental = value;
  }

  get _experimental() {
    if (!isPresent(this[_values]._experimental)) {
      const klass = require('./Element');
      this[_values]._experimental = new klass();
    }
    return this[_values]._experimental;
  }

  set _experimental(value) {
    const klass = require('./Element');
    return this[_values]._experimental = new klass(value);
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

  get publisher() {
    return this[_values].publisher;
  }

  set publisher(value) {
    return this[_values].publisher = value;
  }

  get _publisher() {
    if (!isPresent(this[_values]._publisher)) {
      const klass = require('./Element');
      this[_values]._publisher = new klass();
    }
    return this[_values]._publisher;
  }

  set _publisher(value) {
    const klass = require('./Element');
    return this[_values]._publisher = new klass(value);
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

  get purpose() {
    return this[_values].purpose;
  }

  set purpose(value) {
    return this[_values].purpose = value;
  }

  get _purpose() {
    if (!isPresent(this[_values]._purpose)) {
      const klass = require('./Element');
      this[_values]._purpose = new klass();
    }
    return this[_values]._purpose;
  }

  set _purpose(value) {
    const klass = require('./Element');
    return this[_values]._purpose = new klass(value);
  }

  get usage() {
    return this[_values].usage;
  }

  set usage(value) {
    return this[_values].usage = value;
  }

  get _usage() {
    if (!isPresent(this[_values]._usage)) {
      const klass = require('./Element');
      this[_values]._usage = new klass();
    }
    return this[_values]._usage;
  }

  set _usage(value) {
    const klass = require('./Element');
    return this[_values]._usage = new klass(value);
  }

  get approvalDate() {
    return this[_values].approvalDate;
  }

  set approvalDate(value) {
    return this[_values].approvalDate = value;
  }

  get _approvalDate() {
    if (!isPresent(this[_values]._approvalDate)) {
      const klass = require('./Element');
      this[_values]._approvalDate = new klass();
    }
    return this[_values]._approvalDate;
  }

  set _approvalDate(value) {
    const klass = require('./Element');
    return this[_values]._approvalDate = new klass(value);
  }

  get lastReviewDate() {
    return this[_values].lastReviewDate;
  }

  set lastReviewDate(value) {
    return this[_values].lastReviewDate = value;
  }

  get _lastReviewDate() {
    if (!isPresent(this[_values]._lastReviewDate)) {
      const klass = require('./Element');
      this[_values]._lastReviewDate = new klass();
    }
    return this[_values]._lastReviewDate;
  }

  set _lastReviewDate(value) {
    const klass = require('./Element');
    return this[_values]._lastReviewDate = new klass(value);
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

  get useContext() {
    if (!isPresent(this[_values].useContext)) {
      const klass = require('./UsageContext');
      this[_values].useContext = ArrayProxy(klass);
    }
    return this[_values].useContext;
  }

  set useContext(value) {
    const klass = require('./UsageContext');
    this[_values].useContext = ArrayProxy(klass);
    value.forEach(entry => this[_values].useContext.push(entry));
    return this[_values].useContext;
  }

  get jurisdiction() {
    if (!isPresent(this[_values].jurisdiction)) {
      const klass = require('./CodeableConcept');
      this[_values].jurisdiction = ArrayProxy(klass);
    }
    return this[_values].jurisdiction;
  }

  set jurisdiction(value) {
    const klass = require('./CodeableConcept');
    this[_values].jurisdiction = ArrayProxy(klass);
    value.forEach(entry => this[_values].jurisdiction.push(entry));
    return this[_values].jurisdiction;
  }

  get topic() {
    if (!isPresent(this[_values].topic)) {
      const klass = require('./CodeableConcept');
      this[_values].topic = ArrayProxy(klass);
    }
    return this[_values].topic;
  }

  set topic(value) {
    const klass = require('./CodeableConcept');
    this[_values].topic = ArrayProxy(klass);
    value.forEach(entry => this[_values].topic.push(entry));
    return this[_values].topic;
  }

  get contributor() {
    if (!isPresent(this[_values].contributor)) {
      const klass = require('./Contributor');
      this[_values].contributor = ArrayProxy(klass);
    }
    return this[_values].contributor;
  }

  set contributor(value) {
    const klass = require('./Contributor');
    this[_values].contributor = ArrayProxy(klass);
    value.forEach(entry => this[_values].contributor.push(entry));
    return this[_values].contributor;
  }

  get contact() {
    if (!isPresent(this[_values].contact)) {
      const klass = require('./ContactDetail');
      this[_values].contact = ArrayProxy(klass);
    }
    return this[_values].contact;
  }

  set contact(value) {
    const klass = require('./ContactDetail');
    this[_values].contact = ArrayProxy(klass);
    value.forEach(entry => this[_values].contact.push(entry));
    return this[_values].contact;
  }

  get copyright() {
    return this[_values].copyright;
  }

  set copyright(value) {
    return this[_values].copyright = value;
  }

  get _copyright() {
    if (!isPresent(this[_values]._copyright)) {
      const klass = require('./Element');
      this[_values]._copyright = new klass();
    }
    return this[_values]._copyright;
  }

  set _copyright(value) {
    const klass = require('./Element');
    return this[_values]._copyright = new klass(value);
  }

  get relatedArtifact() {
    if (!isPresent(this[_values].relatedArtifact)) {
      const klass = require('./RelatedArtifact');
      this[_values].relatedArtifact = ArrayProxy(klass);
    }
    return this[_values].relatedArtifact;
  }

  set relatedArtifact(value) {
    const klass = require('./RelatedArtifact');
    this[_values].relatedArtifact = ArrayProxy(klass);
    value.forEach(entry => this[_values].relatedArtifact.push(entry));
    return this[_values].relatedArtifact;
  }

  get library() {
    if (!isPresent(this[_values].library)) {
      const klass = require('./Reference');
      this[_values].library = ArrayProxy(klass);
    }
    return this[_values].library;
  }

  set library(value) {
    const klass = require('./Reference');
    this[_values].library = ArrayProxy(klass);
    value.forEach(entry => this[_values].library.push(entry));
    return this[_values].library;
  }

  get kind() {
    return this[_values].kind;
  }

  set kind(value) {
    return this[_values].kind = value;
  }

  get _kind() {
    if (!isPresent(this[_values]._kind)) {
      const klass = require('./Element');
      this[_values]._kind = new klass();
    }
    return this[_values]._kind;
  }

  set _kind(value) {
    const klass = require('./Element');
    return this[_values]._kind = new klass(value);
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

  get timingTiming() {
    if (!isPresent(this[_values].timingTiming)) {
      const klass = require('./Timing');
      this[_values].timingTiming = new klass();
    }
    return this[_values].timingTiming;
  }

  set timingTiming(value) {
    const klass = require('./Timing');
    return this[_values].timingTiming = new klass(value);
  }

  get timingDateTime() {
    return this[_values].timingDateTime;
  }

  set timingDateTime(value) {
    return this[_values].timingDateTime = value;
  }

  get _timingDateTime() {
    if (!isPresent(this[_values]._timingDateTime)) {
      const klass = require('./Element');
      this[_values]._timingDateTime = new klass();
    }
    return this[_values]._timingDateTime;
  }

  set _timingDateTime(value) {
    const klass = require('./Element');
    return this[_values]._timingDateTime = new klass(value);
  }

  get timingPeriod() {
    if (!isPresent(this[_values].timingPeriod)) {
      const klass = require('./Period');
      this[_values].timingPeriod = new klass();
    }
    return this[_values].timingPeriod;
  }

  set timingPeriod(value) {
    const klass = require('./Period');
    return this[_values].timingPeriod = new klass(value);
  }

  get timingRange() {
    if (!isPresent(this[_values].timingRange)) {
      const klass = require('./Range');
      this[_values].timingRange = new klass();
    }
    return this[_values].timingRange;
  }

  set timingRange(value) {
    const klass = require('./Range');
    return this[_values].timingRange = new klass(value);
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

  get participant() {
    if (!isPresent(this[_values].participant)) {
      const klass = require('./ActivityDefinitionParticipant');
      this[_values].participant = ArrayProxy(klass);
    }
    return this[_values].participant;
  }

  set participant(value) {
    const klass = require('./ActivityDefinitionParticipant');
    this[_values].participant = ArrayProxy(klass);
    value.forEach(entry => this[_values].participant.push(entry));
    return this[_values].participant;
  }

  get productReference() {
    if (!isPresent(this[_values].productReference)) {
      const klass = require('./Reference');
      this[_values].productReference = new klass();
    }
    return this[_values].productReference;
  }

  set productReference(value) {
    const klass = require('./Reference');
    return this[_values].productReference = new klass(value);
  }

  get productCodeableConcept() {
    if (!isPresent(this[_values].productCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].productCodeableConcept = new klass();
    }
    return this[_values].productCodeableConcept;
  }

  set productCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].productCodeableConcept = new klass(value);
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get dosage() {
    if (!isPresent(this[_values].dosage)) {
      const klass = require('./Dosage');
      this[_values].dosage = ArrayProxy(klass);
    }
    return this[_values].dosage;
  }

  set dosage(value) {
    const klass = require('./Dosage');
    this[_values].dosage = ArrayProxy(klass);
    value.forEach(entry => this[_values].dosage.push(entry));
    return this[_values].dosage;
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

  get transform() {
    if (!isPresent(this[_values].transform)) {
      const klass = require('./Reference');
      this[_values].transform = new klass();
    }
    return this[_values].transform;
  }

  set transform(value) {
    const klass = require('./Reference');
    return this[_values].transform = new klass(value);
  }

  get dynamicValue() {
    if (!isPresent(this[_values].dynamicValue)) {
      const klass = require('./ActivityDefinitionDynamicValue');
      this[_values].dynamicValue = ArrayProxy(klass);
    }
    return this[_values].dynamicValue;
  }

  set dynamicValue(value) {
    const klass = require('./ActivityDefinitionDynamicValue');
    this[_values].dynamicValue = ArrayProxy(klass);
    value.forEach(entry => this[_values].dynamicValue.push(entry));
    return this[_values].dynamicValue;
  }
}

module.exports = ActivityDefinition;

