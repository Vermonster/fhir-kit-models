const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class CodeSystem extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CodeSystem ||
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

  get caseSensitive() {
    return this[_values].caseSensitive;
  }

  set caseSensitive(value) {
    return this[_values].caseSensitive = value;
  }

  get _caseSensitive() {
    if (!isPresent(this[_values]._caseSensitive)) {
      const klass = require('./Element');
      this[_values]._caseSensitive = new klass();
    }
    return this[_values]._caseSensitive;
  }

  set _caseSensitive(value) {
    const klass = require('./Element');
    return this[_values]._caseSensitive = new klass(value);
  }

  get valueSet() {
    return this[_values].valueSet;
  }

  set valueSet(value) {
    return this[_values].valueSet = value;
  }

  get _valueSet() {
    if (!isPresent(this[_values]._valueSet)) {
      const klass = require('./Element');
      this[_values]._valueSet = new klass();
    }
    return this[_values]._valueSet;
  }

  set _valueSet(value) {
    const klass = require('./Element');
    return this[_values]._valueSet = new klass(value);
  }

  get hierarchyMeaning() {
    return this[_values].hierarchyMeaning;
  }

  set hierarchyMeaning(value) {
    return this[_values].hierarchyMeaning = value;
  }

  get _hierarchyMeaning() {
    if (!isPresent(this[_values]._hierarchyMeaning)) {
      const klass = require('./Element');
      this[_values]._hierarchyMeaning = new klass();
    }
    return this[_values]._hierarchyMeaning;
  }

  set _hierarchyMeaning(value) {
    const klass = require('./Element');
    return this[_values]._hierarchyMeaning = new klass(value);
  }

  get compositional() {
    return this[_values].compositional;
  }

  set compositional(value) {
    return this[_values].compositional = value;
  }

  get _compositional() {
    if (!isPresent(this[_values]._compositional)) {
      const klass = require('./Element');
      this[_values]._compositional = new klass();
    }
    return this[_values]._compositional;
  }

  set _compositional(value) {
    const klass = require('./Element');
    return this[_values]._compositional = new klass(value);
  }

  get versionNeeded() {
    return this[_values].versionNeeded;
  }

  set versionNeeded(value) {
    return this[_values].versionNeeded = value;
  }

  get _versionNeeded() {
    if (!isPresent(this[_values]._versionNeeded)) {
      const klass = require('./Element');
      this[_values]._versionNeeded = new klass();
    }
    return this[_values]._versionNeeded;
  }

  set _versionNeeded(value) {
    const klass = require('./Element');
    return this[_values]._versionNeeded = new klass(value);
  }

  get content() {
    return this[_values].content;
  }

  set content(value) {
    return this[_values].content = value;
  }

  get _content() {
    if (!isPresent(this[_values]._content)) {
      const klass = require('./Element');
      this[_values]._content = new klass();
    }
    return this[_values]._content;
  }

  set _content(value) {
    const klass = require('./Element');
    return this[_values]._content = new klass(value);
  }

  get count() {
    return this[_values].count;
  }

  set count(value) {
    return this[_values].count = value;
  }

  get _count() {
    if (!isPresent(this[_values]._count)) {
      const klass = require('./Element');
      this[_values]._count = new klass();
    }
    return this[_values]._count;
  }

  set _count(value) {
    const klass = require('./Element');
    return this[_values]._count = new klass(value);
  }

  get filter() {
    if (!isPresent(this[_values].filter)) {
      const klass = require('./CodeSystemFilter');
      this[_values].filter = ArrayProxy(klass);
    }
    return this[_values].filter;
  }

  set filter(value) {
    const klass = require('./CodeSystemFilter');
    this[_values].filter = ArrayProxy(klass);
    value.forEach(entry => this[_values].filter.push(entry));
    return this[_values].filter;
  }

  get property() {
    if (!isPresent(this[_values].property)) {
      const klass = require('./CodeSystemProperty');
      this[_values].property = ArrayProxy(klass);
    }
    return this[_values].property;
  }

  set property(value) {
    const klass = require('./CodeSystemProperty');
    this[_values].property = ArrayProxy(klass);
    value.forEach(entry => this[_values].property.push(entry));
    return this[_values].property;
  }

  get concept() {
    if (!isPresent(this[_values].concept)) {
      const klass = require('./CodeSystemConcept');
      this[_values].concept = ArrayProxy(klass);
    }
    return this[_values].concept;
  }

  set concept(value) {
    const klass = require('./CodeSystemConcept');
    this[_values].concept = ArrayProxy(klass);
    value.forEach(entry => this[_values].concept.push(entry));
    return this[_values].concept;
  }
}

module.exports = CodeSystem;

