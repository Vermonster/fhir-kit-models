const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ExpansionProfile extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExpansionProfile || values instanceof DomainResource) {
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
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

  get fixedVersion() {
    if (!isPresent(this[_values].fixedVersion)) {
      const klass = require('./ExpansionProfile_FixedVersion');
      this[_values].fixedVersion = ArrayProxy(klass);
    }
    return this[_values].fixedVersion;
  }

  set fixedVersion(value) {
    const klass = require('./ExpansionProfile_FixedVersion');
    this[_values].fixedVersion = ArrayProxy(klass);
    value.forEach(entry => this[_values].fixedVersion.push(entry));
    return this[_values].fixedVersion;
  }

  get excludedSystem() {
    if (!isPresent(this[_values].excludedSystem)) {
      const klass = require('./ExpansionProfile_ExcludedSystem');
      this[_values].excludedSystem = new klass();
    }
    return this[_values].excludedSystem;
  }

  set excludedSystem(value) {
    const klass = require('./ExpansionProfile_ExcludedSystem');
    return this[_values].excludedSystem = new klass(value);
  }

  get includeDesignations() {
    return this[_values].includeDesignations;
  }

  set includeDesignations(value) {
    return this[_values].includeDesignations = value;
  }

  get _includeDesignations() {
    if (!isPresent(this[_values]._includeDesignations)) {
      const klass = require('./Element');
      this[_values]._includeDesignations = new klass();
    }
    return this[_values]._includeDesignations;
  }

  set _includeDesignations(value) {
    const klass = require('./Element');
    return this[_values]._includeDesignations = new klass(value);
  }

  get designation() {
    if (!isPresent(this[_values].designation)) {
      const klass = require('./ExpansionProfile_Designation');
      this[_values].designation = new klass();
    }
    return this[_values].designation;
  }

  set designation(value) {
    const klass = require('./ExpansionProfile_Designation');
    return this[_values].designation = new klass(value);
  }

  get includeDefinition() {
    return this[_values].includeDefinition;
  }

  set includeDefinition(value) {
    return this[_values].includeDefinition = value;
  }

  get _includeDefinition() {
    if (!isPresent(this[_values]._includeDefinition)) {
      const klass = require('./Element');
      this[_values]._includeDefinition = new klass();
    }
    return this[_values]._includeDefinition;
  }

  set _includeDefinition(value) {
    const klass = require('./Element');
    return this[_values]._includeDefinition = new klass(value);
  }

  get activeOnly() {
    return this[_values].activeOnly;
  }

  set activeOnly(value) {
    return this[_values].activeOnly = value;
  }

  get _activeOnly() {
    if (!isPresent(this[_values]._activeOnly)) {
      const klass = require('./Element');
      this[_values]._activeOnly = new klass();
    }
    return this[_values]._activeOnly;
  }

  set _activeOnly(value) {
    const klass = require('./Element');
    return this[_values]._activeOnly = new klass(value);
  }

  get excludeNested() {
    return this[_values].excludeNested;
  }

  set excludeNested(value) {
    return this[_values].excludeNested = value;
  }

  get _excludeNested() {
    if (!isPresent(this[_values]._excludeNested)) {
      const klass = require('./Element');
      this[_values]._excludeNested = new klass();
    }
    return this[_values]._excludeNested;
  }

  set _excludeNested(value) {
    const klass = require('./Element');
    return this[_values]._excludeNested = new klass(value);
  }

  get excludeNotForUI() {
    return this[_values].excludeNotForUI;
  }

  set excludeNotForUI(value) {
    return this[_values].excludeNotForUI = value;
  }

  get _excludeNotForUI() {
    if (!isPresent(this[_values]._excludeNotForUI)) {
      const klass = require('./Element');
      this[_values]._excludeNotForUI = new klass();
    }
    return this[_values]._excludeNotForUI;
  }

  set _excludeNotForUI(value) {
    const klass = require('./Element');
    return this[_values]._excludeNotForUI = new klass(value);
  }

  get excludePostCoordinated() {
    return this[_values].excludePostCoordinated;
  }

  set excludePostCoordinated(value) {
    return this[_values].excludePostCoordinated = value;
  }

  get _excludePostCoordinated() {
    if (!isPresent(this[_values]._excludePostCoordinated)) {
      const klass = require('./Element');
      this[_values]._excludePostCoordinated = new klass();
    }
    return this[_values]._excludePostCoordinated;
  }

  set _excludePostCoordinated(value) {
    const klass = require('./Element');
    return this[_values]._excludePostCoordinated = new klass(value);
  }

  get displayLanguage() {
    return this[_values].displayLanguage;
  }

  set displayLanguage(value) {
    return this[_values].displayLanguage = value;
  }

  get _displayLanguage() {
    if (!isPresent(this[_values]._displayLanguage)) {
      const klass = require('./Element');
      this[_values]._displayLanguage = new klass();
    }
    return this[_values]._displayLanguage;
  }

  set _displayLanguage(value) {
    const klass = require('./Element');
    return this[_values]._displayLanguage = new klass(value);
  }

  get limitedExpansion() {
    return this[_values].limitedExpansion;
  }

  set limitedExpansion(value) {
    return this[_values].limitedExpansion = value;
  }

  get _limitedExpansion() {
    if (!isPresent(this[_values]._limitedExpansion)) {
      const klass = require('./Element');
      this[_values]._limitedExpansion = new klass();
    }
    return this[_values]._limitedExpansion;
  }

  set _limitedExpansion(value) {
    const klass = require('./Element');
    return this[_values]._limitedExpansion = new klass(value);
  }
}

module.exports = ExpansionProfile;

