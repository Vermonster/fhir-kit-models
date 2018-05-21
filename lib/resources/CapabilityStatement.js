const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class CapabilityStatement extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CapabilityStatement ||
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

  get instantiates() {
    return this[_values].instantiates;
  }

  set instantiates(value) {
    return this[_values].instantiates = value;
  }

  get _instantiates() {
    if (!isPresent(this[_values]._instantiates)) {
      const klass = require('./Element');
      this[_values]._instantiates = ArrayProxy(klass);
    }
    return this[_values]._instantiates;
  }

  set _instantiates(value) {
    const klass = require('./Element');
    this[_values]._instantiates = ArrayProxy(klass);
    value.forEach(entry => this[_values]._instantiates.push(entry));
    return this[_values]._instantiates;
  }

  get software() {
    if (!isPresent(this[_values].software)) {
      const klass = require('./CapabilityStatementSoftware');
      this[_values].software = new klass();
    }
    return this[_values].software;
  }

  set software(value) {
    const klass = require('./CapabilityStatementSoftware');
    return this[_values].software = new klass(value);
  }

  get implementation() {
    if (!isPresent(this[_values].implementation)) {
      const klass = require('./CapabilityStatementImplementation');
      this[_values].implementation = new klass();
    }
    return this[_values].implementation;
  }

  set implementation(value) {
    const klass = require('./CapabilityStatementImplementation');
    return this[_values].implementation = new klass(value);
  }

  get fhirVersion() {
    return this[_values].fhirVersion;
  }

  set fhirVersion(value) {
    return this[_values].fhirVersion = value;
  }

  get _fhirVersion() {
    if (!isPresent(this[_values]._fhirVersion)) {
      const klass = require('./Element');
      this[_values]._fhirVersion = new klass();
    }
    return this[_values]._fhirVersion;
  }

  set _fhirVersion(value) {
    const klass = require('./Element');
    return this[_values]._fhirVersion = new klass(value);
  }

  get acceptUnknown() {
    return this[_values].acceptUnknown;
  }

  set acceptUnknown(value) {
    return this[_values].acceptUnknown = value;
  }

  get _acceptUnknown() {
    if (!isPresent(this[_values]._acceptUnknown)) {
      const klass = require('./Element');
      this[_values]._acceptUnknown = new klass();
    }
    return this[_values]._acceptUnknown;
  }

  set _acceptUnknown(value) {
    const klass = require('./Element');
    return this[_values]._acceptUnknown = new klass(value);
  }

  get format() {
    return this[_values].format;
  }

  set format(value) {
    return this[_values].format = value;
  }

  get _format() {
    if (!isPresent(this[_values]._format)) {
      const klass = require('./Element');
      this[_values]._format = ArrayProxy(klass);
    }
    return this[_values]._format;
  }

  set _format(value) {
    const klass = require('./Element');
    this[_values]._format = ArrayProxy(klass);
    value.forEach(entry => this[_values]._format.push(entry));
    return this[_values]._format;
  }

  get patchFormat() {
    return this[_values].patchFormat;
  }

  set patchFormat(value) {
    return this[_values].patchFormat = value;
  }

  get _patchFormat() {
    if (!isPresent(this[_values]._patchFormat)) {
      const klass = require('./Element');
      this[_values]._patchFormat = ArrayProxy(klass);
    }
    return this[_values]._patchFormat;
  }

  set _patchFormat(value) {
    const klass = require('./Element');
    this[_values]._patchFormat = ArrayProxy(klass);
    value.forEach(entry => this[_values]._patchFormat.push(entry));
    return this[_values]._patchFormat;
  }

  get implementationGuide() {
    return this[_values].implementationGuide;
  }

  set implementationGuide(value) {
    return this[_values].implementationGuide = value;
  }

  get _implementationGuide() {
    if (!isPresent(this[_values]._implementationGuide)) {
      const klass = require('./Element');
      this[_values]._implementationGuide = ArrayProxy(klass);
    }
    return this[_values]._implementationGuide;
  }

  set _implementationGuide(value) {
    const klass = require('./Element');
    this[_values]._implementationGuide = ArrayProxy(klass);
    value.forEach(entry => this[_values]._implementationGuide.push(entry));
    return this[_values]._implementationGuide;
  }

  get profile() {
    if (!isPresent(this[_values].profile)) {
      const klass = require('./Reference');
      this[_values].profile = ArrayProxy(klass);
    }
    return this[_values].profile;
  }

  set profile(value) {
    const klass = require('./Reference');
    this[_values].profile = ArrayProxy(klass);
    value.forEach(entry => this[_values].profile.push(entry));
    return this[_values].profile;
  }

  get rest() {
    if (!isPresent(this[_values].rest)) {
      const klass = require('./CapabilityStatementRest');
      this[_values].rest = ArrayProxy(klass);
    }
    return this[_values].rest;
  }

  set rest(value) {
    const klass = require('./CapabilityStatementRest');
    this[_values].rest = ArrayProxy(klass);
    value.forEach(entry => this[_values].rest.push(entry));
    return this[_values].rest;
  }

  get messaging() {
    if (!isPresent(this[_values].messaging)) {
      const klass = require('./CapabilityStatementMessaging');
      this[_values].messaging = ArrayProxy(klass);
    }
    return this[_values].messaging;
  }

  set messaging(value) {
    const klass = require('./CapabilityStatementMessaging');
    this[_values].messaging = ArrayProxy(klass);
    value.forEach(entry => this[_values].messaging.push(entry));
    return this[_values].messaging;
  }

  get document() {
    if (!isPresent(this[_values].document)) {
      const klass = require('./CapabilityStatementDocument');
      this[_values].document = ArrayProxy(klass);
    }
    return this[_values].document;
  }

  set document(value) {
    const klass = require('./CapabilityStatementDocument');
    this[_values].document = ArrayProxy(klass);
    value.forEach(entry => this[_values].document.push(entry));
    return this[_values].document;
  }
}

module.exports = CapabilityStatement;

