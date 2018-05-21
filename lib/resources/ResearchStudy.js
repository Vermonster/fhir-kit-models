const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ResearchStudy extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ResearchStudy || values instanceof DomainResource) {
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

  get protocol() {
    if (!isPresent(this[_values].protocol)) {
      const klass = require('./Reference');
      this[_values].protocol = ArrayProxy(klass);
    }
    return this[_values].protocol;
  }

  set protocol(value) {
    const klass = require('./Reference');
    this[_values].protocol = ArrayProxy(klass);
    value.forEach(entry => this[_values].protocol.push(entry));
    return this[_values].protocol;
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

  get focus() {
    if (!isPresent(this[_values].focus)) {
      const klass = require('./CodeableConcept');
      this[_values].focus = ArrayProxy(klass);
    }
    return this[_values].focus;
  }

  set focus(value) {
    const klass = require('./CodeableConcept');
    this[_values].focus = ArrayProxy(klass);
    value.forEach(entry => this[_values].focus.push(entry));
    return this[_values].focus;
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

  get keyword() {
    if (!isPresent(this[_values].keyword)) {
      const klass = require('./CodeableConcept');
      this[_values].keyword = ArrayProxy(klass);
    }
    return this[_values].keyword;
  }

  set keyword(value) {
    const klass = require('./CodeableConcept');
    this[_values].keyword = ArrayProxy(klass);
    value.forEach(entry => this[_values].keyword.push(entry));
    return this[_values].keyword;
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

  get enrollment() {
    if (!isPresent(this[_values].enrollment)) {
      const klass = require('./Reference');
      this[_values].enrollment = ArrayProxy(klass);
    }
    return this[_values].enrollment;
  }

  set enrollment(value) {
    const klass = require('./Reference');
    this[_values].enrollment = ArrayProxy(klass);
    value.forEach(entry => this[_values].enrollment.push(entry));
    return this[_values].enrollment;
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

  get sponsor() {
    if (!isPresent(this[_values].sponsor)) {
      const klass = require('./Reference');
      this[_values].sponsor = new klass();
    }
    return this[_values].sponsor;
  }

  set sponsor(value) {
    const klass = require('./Reference');
    return this[_values].sponsor = new klass(value);
  }

  get principalInvestigator() {
    if (!isPresent(this[_values].principalInvestigator)) {
      const klass = require('./Reference');
      this[_values].principalInvestigator = new klass();
    }
    return this[_values].principalInvestigator;
  }

  set principalInvestigator(value) {
    const klass = require('./Reference');
    return this[_values].principalInvestigator = new klass(value);
  }

  get site() {
    if (!isPresent(this[_values].site)) {
      const klass = require('./Reference');
      this[_values].site = ArrayProxy(klass);
    }
    return this[_values].site;
  }

  set site(value) {
    const klass = require('./Reference');
    this[_values].site = ArrayProxy(klass);
    value.forEach(entry => this[_values].site.push(entry));
    return this[_values].site;
  }

  get reasonStopped() {
    if (!isPresent(this[_values].reasonStopped)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonStopped = new klass();
    }
    return this[_values].reasonStopped;
  }

  set reasonStopped(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reasonStopped = new klass(value);
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

  get arm() {
    if (!isPresent(this[_values].arm)) {
      const klass = require('./ResearchStudyArm');
      this[_values].arm = ArrayProxy(klass);
    }
    return this[_values].arm;
  }

  set arm(value) {
    const klass = require('./ResearchStudyArm');
    this[_values].arm = ArrayProxy(klass);
    value.forEach(entry => this[_values].arm.push(entry));
    return this[_values].arm;
  }
}

module.exports = ResearchStudy;

