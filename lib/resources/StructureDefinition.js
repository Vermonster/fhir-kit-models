const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class StructureDefinition extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'StructureDefinition';
    if (values instanceof StructureDefinition ||
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

  get keyword() {
    if (!isPresent(this[_values].keyword)) {
      const klass = require('./Coding');
      this[_values].keyword = ArrayProxy(klass);
    }
    return this[_values].keyword;
  }

  set keyword(value) {
    const klass = require('./Coding');
    this[_values].keyword = ArrayProxy(klass);
    value.forEach(entry => this[_values].keyword.push(entry));
    return this[_values].keyword;
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

  get mapping() {
    if (!isPresent(this[_values].mapping)) {
      const klass = require('./StructureDefinitionMapping');
      this[_values].mapping = ArrayProxy(klass);
    }
    return this[_values].mapping;
  }

  set mapping(value) {
    const klass = require('./StructureDefinitionMapping');
    this[_values].mapping = ArrayProxy(klass);
    value.forEach(entry => this[_values].mapping.push(entry));
    return this[_values].mapping;
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

  get abstract() {
    return this[_values].abstract;
  }

  set abstract(value) {
    return this[_values].abstract = value;
  }

  get _abstract() {
    if (!isPresent(this[_values]._abstract)) {
      const klass = require('./Element');
      this[_values]._abstract = new klass();
    }
    return this[_values]._abstract;
  }

  set _abstract(value) {
    const klass = require('./Element');
    return this[_values]._abstract = new klass(value);
  }

  get contextType() {
    return this[_values].contextType;
  }

  set contextType(value) {
    return this[_values].contextType = value;
  }

  get _contextType() {
    if (!isPresent(this[_values]._contextType)) {
      const klass = require('./Element');
      this[_values]._contextType = new klass();
    }
    return this[_values]._contextType;
  }

  set _contextType(value) {
    const klass = require('./Element');
    return this[_values]._contextType = new klass(value);
  }

  get context() {
    return this[_values].context;
  }

  set context(value) {
    return this[_values].context = value;
  }

  get _context() {
    if (!isPresent(this[_values]._context)) {
      const klass = require('./Element');
      this[_values]._context = ArrayProxy(klass);
    }
    return this[_values]._context;
  }

  set _context(value) {
    const klass = require('./Element');
    this[_values]._context = ArrayProxy(klass);
    value.forEach(entry => this[_values]._context.push(entry));
    return this[_values]._context;
  }

  get contextInvariant() {
    return this[_values].contextInvariant;
  }

  set contextInvariant(value) {
    return this[_values].contextInvariant = value;
  }

  get _contextInvariant() {
    if (!isPresent(this[_values]._contextInvariant)) {
      const klass = require('./Element');
      this[_values]._contextInvariant = ArrayProxy(klass);
    }
    return this[_values]._contextInvariant;
  }

  set _contextInvariant(value) {
    const klass = require('./Element');
    this[_values]._contextInvariant = ArrayProxy(klass);
    value.forEach(entry => this[_values]._contextInvariant.push(entry));
    return this[_values]._contextInvariant;
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

  get baseDefinition() {
    return this[_values].baseDefinition;
  }

  set baseDefinition(value) {
    return this[_values].baseDefinition = value;
  }

  get _baseDefinition() {
    if (!isPresent(this[_values]._baseDefinition)) {
      const klass = require('./Element');
      this[_values]._baseDefinition = new klass();
    }
    return this[_values]._baseDefinition;
  }

  set _baseDefinition(value) {
    const klass = require('./Element');
    return this[_values]._baseDefinition = new klass(value);
  }

  get derivation() {
    return this[_values].derivation;
  }

  set derivation(value) {
    return this[_values].derivation = value;
  }

  get _derivation() {
    if (!isPresent(this[_values]._derivation)) {
      const klass = require('./Element');
      this[_values]._derivation = new klass();
    }
    return this[_values]._derivation;
  }

  set _derivation(value) {
    const klass = require('./Element');
    return this[_values]._derivation = new klass(value);
  }

  get snapshot() {
    if (!isPresent(this[_values].snapshot)) {
      const klass = require('./StructureDefinitionSnapshot');
      this[_values].snapshot = new klass();
    }
    return this[_values].snapshot;
  }

  set snapshot(value) {
    const klass = require('./StructureDefinitionSnapshot');
    return this[_values].snapshot = new klass(value);
  }

  get differential() {
    if (!isPresent(this[_values].differential)) {
      const klass = require('./StructureDefinitionDifferential');
      this[_values].differential = new klass();
    }
    return this[_values].differential;
  }

  set differential(value) {
    const klass = require('./StructureDefinitionDifferential');
    return this[_values].differential = new klass(value);
  }
}

module.exports = StructureDefinition;

