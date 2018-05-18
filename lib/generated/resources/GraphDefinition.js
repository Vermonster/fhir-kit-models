const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class GraphDefinition extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof GraphDefinition || values instanceof DomainResource) {
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
  get start() {
    return this[_values].start;
  }
  set start(value) {
    return this[_values].start = value;
  }
  get _start() {
    if (!this[_values]._start) {
      const klass = require('./Element');
      this[_values]._start = new klass();
    }
    return this[_values]._start;
  }
  set _start(value) {
    const klass = require('./Element');
    return this[_values]._start = new klass(value);
  }
  get profile() {
    return this[_values].profile;
  }
  set profile(value) {
    return this[_values].profile = value;
  }
  get _profile() {
    if (!this[_values]._profile) {
      const klass = require('./Element');
      this[_values]._profile = new klass();
    }
    return this[_values]._profile;
  }
  set _profile(value) {
    const klass = require('./Element');
    return this[_values]._profile = new klass(value);
  }
  get link() {
    if (!this[_values].link) {
      const klass = require('./GraphDefinition_Link');
      this[_values].link = ArrayProxy(klass);
    }
    return this[_values].link;
  }
  set link(value) {
    const klass = require('./GraphDefinition_Link');
    this[_values].link = ArrayProxy(klass);
    value.forEach(entry => this[_values].link.push(entry));
    return this[_values].link;
  }
}
module.exports = GraphDefinition;