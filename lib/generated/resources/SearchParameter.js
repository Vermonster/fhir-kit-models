const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class SearchParameter extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof SearchParameter || values instanceof DomainResource) {
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
    if (!this[_values]._url) {
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
    if (!this[_values]._version) {
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
    if (!this[_values]._name) {
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
    if (!this[_values]._status) {
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
    if (!this[_values]._experimental) {
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
    if (!this[_values]._date) {
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
    if (!this[_values]._publisher) {
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
    if (!this[_values].contact) {
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
  get useContext() {
    if (!this[_values].useContext) {
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
    if (!this[_values].jurisdiction) {
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
    if (!this[_values]._purpose) {
      const klass = require('./Element');
      this[_values]._purpose = new klass();
    }
    return this[_values]._purpose;
  }
  set _purpose(value) {
    const klass = require('./Element');
    return this[_values]._purpose = new klass(value);
  }
  get code() {
    return this[_values].code;
  }
  set code(value) {
    return this[_values].code = value;
  }
  get _code() {
    if (!this[_values]._code) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }
  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
  }
  get base() {
    return this[_values].base;
  }
  set base(value) {
    return this[_values].base = value;
  }
  get _base() {
    if (!this[_values]._base) {
      const klass = require('./Element');
      this[_values]._base = ArrayProxy(klass);
    }
    return this[_values]._base;
  }
  set _base(value) {
    const klass = require('./Element');
    this[_values]._base = ArrayProxy(klass);
    value.forEach(entry => this[_values]._base.push(entry));
    return this[_values]._base;
  }
  get type() {
    return this[_values].type;
  }
  set type(value) {
    return this[_values].type = value;
  }
  get _type() {
    if (!this[_values]._type) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }
  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }
  get derivedFrom() {
    return this[_values].derivedFrom;
  }
  set derivedFrom(value) {
    return this[_values].derivedFrom = value;
  }
  get _derivedFrom() {
    if (!this[_values]._derivedFrom) {
      const klass = require('./Element');
      this[_values]._derivedFrom = new klass();
    }
    return this[_values]._derivedFrom;
  }
  set _derivedFrom(value) {
    const klass = require('./Element');
    return this[_values]._derivedFrom = new klass(value);
  }
  get description() {
    return this[_values].description;
  }
  set description(value) {
    return this[_values].description = value;
  }
  get _description() {
    if (!this[_values]._description) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }
  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }
  get expression() {
    return this[_values].expression;
  }
  set expression(value) {
    return this[_values].expression = value;
  }
  get _expression() {
    if (!this[_values]._expression) {
      const klass = require('./Element');
      this[_values]._expression = new klass();
    }
    return this[_values]._expression;
  }
  set _expression(value) {
    const klass = require('./Element');
    return this[_values]._expression = new klass(value);
  }
  get xpath() {
    return this[_values].xpath;
  }
  set xpath(value) {
    return this[_values].xpath = value;
  }
  get _xpath() {
    if (!this[_values]._xpath) {
      const klass = require('./Element');
      this[_values]._xpath = new klass();
    }
    return this[_values]._xpath;
  }
  set _xpath(value) {
    const klass = require('./Element');
    return this[_values]._xpath = new klass(value);
  }
  get xpathUsage() {
    return this[_values].xpathUsage;
  }
  set xpathUsage(value) {
    return this[_values].xpathUsage = value;
  }
  get _xpathUsage() {
    if (!this[_values]._xpathUsage) {
      const klass = require('./Element');
      this[_values]._xpathUsage = new klass();
    }
    return this[_values]._xpathUsage;
  }
  set _xpathUsage(value) {
    const klass = require('./Element');
    return this[_values]._xpathUsage = new klass(value);
  }
  get target() {
    return this[_values].target;
  }
  set target(value) {
    return this[_values].target = value;
  }
  get _target() {
    if (!this[_values]._target) {
      const klass = require('./Element');
      this[_values]._target = ArrayProxy(klass);
    }
    return this[_values]._target;
  }
  set _target(value) {
    const klass = require('./Element');
    this[_values]._target = ArrayProxy(klass);
    value.forEach(entry => this[_values]._target.push(entry));
    return this[_values]._target;
  }
  get comparator() {
    return this[_values].comparator;
  }
  set comparator(value) {
    return this[_values].comparator = value;
  }
  get _comparator() {
    if (!this[_values]._comparator) {
      const klass = require('./Element');
      this[_values]._comparator = ArrayProxy(klass);
    }
    return this[_values]._comparator;
  }
  set _comparator(value) {
    const klass = require('./Element');
    this[_values]._comparator = ArrayProxy(klass);
    value.forEach(entry => this[_values]._comparator.push(entry));
    return this[_values]._comparator;
  }
  get modifier() {
    return this[_values].modifier;
  }
  set modifier(value) {
    return this[_values].modifier = value;
  }
  get _modifier() {
    if (!this[_values]._modifier) {
      const klass = require('./Element');
      this[_values]._modifier = ArrayProxy(klass);
    }
    return this[_values]._modifier;
  }
  set _modifier(value) {
    const klass = require('./Element');
    this[_values]._modifier = ArrayProxy(klass);
    value.forEach(entry => this[_values]._modifier.push(entry));
    return this[_values]._modifier;
  }
  get chain() {
    return this[_values].chain;
  }
  set chain(value) {
    return this[_values].chain = value;
  }
  get _chain() {
    if (!this[_values]._chain) {
      const klass = require('./Element');
      this[_values]._chain = ArrayProxy(klass);
    }
    return this[_values]._chain;
  }
  set _chain(value) {
    const klass = require('./Element');
    this[_values]._chain = ArrayProxy(klass);
    value.forEach(entry => this[_values]._chain.push(entry));
    return this[_values]._chain;
  }
  get component() {
    if (!this[_values].component) {
      const klass = require('./SearchParameter_Component');
      this[_values].component = ArrayProxy(klass);
    }
    return this[_values].component;
  }
  set component(value) {
    const klass = require('./SearchParameter_Component');
    this[_values].component = ArrayProxy(klass);
    value.forEach(entry => this[_values].component.push(entry));
    return this[_values].component;
  }
}
module.exports = SearchParameter;