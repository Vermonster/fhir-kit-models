const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ImplementationGuide extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'ImplementationGuide';
    if (values instanceof ImplementationGuide ||
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

  get dependency() {
    if (!isPresent(this[_values].dependency)) {
      const klass = require('./ImplementationGuideDependency');
      this[_values].dependency = ArrayProxy(klass);
    }
    return this[_values].dependency;
  }

  set dependency(value) {
    const klass = require('./ImplementationGuideDependency');
    this[_values].dependency = ArrayProxy(klass);
    value.forEach(entry => this[_values].dependency.push(entry));
    return this[_values].dependency;
  }

  get package() {
    if (!isPresent(this[_values].package)) {
      const klass = require('./ImplementationGuidePackage');
      this[_values].package = ArrayProxy(klass);
    }
    return this[_values].package;
  }

  set package(value) {
    const klass = require('./ImplementationGuidePackage');
    this[_values].package = ArrayProxy(klass);
    value.forEach(entry => this[_values].package.push(entry));
    return this[_values].package;
  }

  get global() {
    if (!isPresent(this[_values].global)) {
      const klass = require('./ImplementationGuideGlobal');
      this[_values].global = ArrayProxy(klass);
    }
    return this[_values].global;
  }

  set global(value) {
    const klass = require('./ImplementationGuideGlobal');
    this[_values].global = ArrayProxy(klass);
    value.forEach(entry => this[_values].global.push(entry));
    return this[_values].global;
  }

  get binary() {
    return this[_values].binary;
  }

  set binary(value) {
    return this[_values].binary = value;
  }

  get _binary() {
    if (!isPresent(this[_values]._binary)) {
      const klass = require('./Element');
      this[_values]._binary = ArrayProxy(klass);
    }
    return this[_values]._binary;
  }

  set _binary(value) {
    const klass = require('./Element');
    this[_values]._binary = ArrayProxy(klass);
    value.forEach(entry => this[_values]._binary.push(entry));
    return this[_values]._binary;
  }

  get page() {
    if (!isPresent(this[_values].page)) {
      const klass = require('./ImplementationGuidePage');
      this[_values].page = new klass();
    }
    return this[_values].page;
  }

  set page(value) {
    const klass = require('./ImplementationGuidePage');
    return this[_values].page = new klass(value);
  }
}

module.exports = ImplementationGuide;

