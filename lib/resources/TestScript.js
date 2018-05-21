const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class TestScript extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript ||
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

  get origin() {
    if (!isPresent(this[_values].origin)) {
      const klass = require('./TestScriptOrigin');
      this[_values].origin = ArrayProxy(klass);
    }
    return this[_values].origin;
  }

  set origin(value) {
    const klass = require('./TestScriptOrigin');
    this[_values].origin = ArrayProxy(klass);
    value.forEach(entry => this[_values].origin.push(entry));
    return this[_values].origin;
  }

  get destination() {
    if (!isPresent(this[_values].destination)) {
      const klass = require('./TestScriptDestination');
      this[_values].destination = ArrayProxy(klass);
    }
    return this[_values].destination;
  }

  set destination(value) {
    const klass = require('./TestScriptDestination');
    this[_values].destination = ArrayProxy(klass);
    value.forEach(entry => this[_values].destination.push(entry));
    return this[_values].destination;
  }

  get metadata() {
    if (!isPresent(this[_values].metadata)) {
      const klass = require('./TestScriptMetadata');
      this[_values].metadata = new klass();
    }
    return this[_values].metadata;
  }

  set metadata(value) {
    const klass = require('./TestScriptMetadata');
    return this[_values].metadata = new klass(value);
  }

  get fixture() {
    if (!isPresent(this[_values].fixture)) {
      const klass = require('./TestScriptFixture');
      this[_values].fixture = ArrayProxy(klass);
    }
    return this[_values].fixture;
  }

  set fixture(value) {
    const klass = require('./TestScriptFixture');
    this[_values].fixture = ArrayProxy(klass);
    value.forEach(entry => this[_values].fixture.push(entry));
    return this[_values].fixture;
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

  get variable() {
    if (!isPresent(this[_values].variable)) {
      const klass = require('./TestScriptVariable');
      this[_values].variable = ArrayProxy(klass);
    }
    return this[_values].variable;
  }

  set variable(value) {
    const klass = require('./TestScriptVariable');
    this[_values].variable = ArrayProxy(klass);
    value.forEach(entry => this[_values].variable.push(entry));
    return this[_values].variable;
  }

  get rule() {
    if (!isPresent(this[_values].rule)) {
      const klass = require('./TestScriptRule');
      this[_values].rule = ArrayProxy(klass);
    }
    return this[_values].rule;
  }

  set rule(value) {
    const klass = require('./TestScriptRule');
    this[_values].rule = ArrayProxy(klass);
    value.forEach(entry => this[_values].rule.push(entry));
    return this[_values].rule;
  }

  get ruleset() {
    if (!isPresent(this[_values].ruleset)) {
      const klass = require('./TestScriptRuleset');
      this[_values].ruleset = ArrayProxy(klass);
    }
    return this[_values].ruleset;
  }

  set ruleset(value) {
    const klass = require('./TestScriptRuleset');
    this[_values].ruleset = ArrayProxy(klass);
    value.forEach(entry => this[_values].ruleset.push(entry));
    return this[_values].ruleset;
  }

  get setup() {
    if (!isPresent(this[_values].setup)) {
      const klass = require('./TestScriptSetup');
      this[_values].setup = new klass();
    }
    return this[_values].setup;
  }

  set setup(value) {
    const klass = require('./TestScriptSetup');
    return this[_values].setup = new klass(value);
  }

  get test() {
    if (!isPresent(this[_values].test)) {
      const klass = require('./TestScriptTest');
      this[_values].test = ArrayProxy(klass);
    }
    return this[_values].test;
  }

  set test(value) {
    const klass = require('./TestScriptTest');
    this[_values].test = ArrayProxy(klass);
    value.forEach(entry => this[_values].test.push(entry));
    return this[_values].test;
  }

  get teardown() {
    if (!isPresent(this[_values].teardown)) {
      const klass = require('./TestScriptTeardown');
      this[_values].teardown = new klass();
    }
    return this[_values].teardown;
  }

  set teardown(value) {
    const klass = require('./TestScriptTeardown');
    return this[_values].teardown = new klass(value);
  }
}

module.exports = TestScript;

