const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class TestReport extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestReport || values instanceof DomainResource) {
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
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

  get testScript() {
    if (!isPresent(this[_values].testScript)) {
      const klass = require('./Reference');
      this[_values].testScript = new klass();
    }
    return this[_values].testScript;
  }

  set testScript(value) {
    const klass = require('./Reference');
    return this[_values].testScript = new klass(value);
  }

  get result() {
    return this[_values].result;
  }

  set result(value) {
    return this[_values].result = value;
  }

  get _result() {
    if (!isPresent(this[_values]._result)) {
      const klass = require('./Element');
      this[_values]._result = new klass();
    }
    return this[_values]._result;
  }

  set _result(value) {
    const klass = require('./Element');
    return this[_values]._result = new klass(value);
  }

  get score() {
    return this[_values].score;
  }

  set score(value) {
    return this[_values].score = value;
  }

  get _score() {
    if (!isPresent(this[_values]._score)) {
      const klass = require('./Element');
      this[_values]._score = new klass();
    }
    return this[_values]._score;
  }

  set _score(value) {
    const klass = require('./Element');
    return this[_values]._score = new klass(value);
  }

  get tester() {
    return this[_values].tester;
  }

  set tester(value) {
    return this[_values].tester = value;
  }

  get _tester() {
    if (!isPresent(this[_values]._tester)) {
      const klass = require('./Element');
      this[_values]._tester = new klass();
    }
    return this[_values]._tester;
  }

  set _tester(value) {
    const klass = require('./Element');
    return this[_values]._tester = new klass(value);
  }

  get issued() {
    return this[_values].issued;
  }

  set issued(value) {
    return this[_values].issued = value;
  }

  get _issued() {
    if (!isPresent(this[_values]._issued)) {
      const klass = require('./Element');
      this[_values]._issued = new klass();
    }
    return this[_values]._issued;
  }

  set _issued(value) {
    const klass = require('./Element');
    return this[_values]._issued = new klass(value);
  }

  get participant() {
    if (!isPresent(this[_values].participant)) {
      const klass = require('./TestReportParticipant');
      this[_values].participant = ArrayProxy(klass);
    }
    return this[_values].participant;
  }

  set participant(value) {
    const klass = require('./TestReportParticipant');
    this[_values].participant = ArrayProxy(klass);
    value.forEach(entry => this[_values].participant.push(entry));
    return this[_values].participant;
  }

  get setup() {
    if (!isPresent(this[_values].setup)) {
      const klass = require('./TestReportSetup');
      this[_values].setup = new klass();
    }
    return this[_values].setup;
  }

  set setup(value) {
    const klass = require('./TestReportSetup');
    return this[_values].setup = new klass(value);
  }

  get test() {
    if (!isPresent(this[_values].test)) {
      const klass = require('./TestReportTest');
      this[_values].test = ArrayProxy(klass);
    }
    return this[_values].test;
  }

  set test(value) {
    const klass = require('./TestReportTest');
    this[_values].test = ArrayProxy(klass);
    value.forEach(entry => this[_values].test.push(entry));
    return this[_values].test;
  }

  get teardown() {
    if (!isPresent(this[_values].teardown)) {
      const klass = require('./TestReportTeardown');
      this[_values].teardown = new klass();
    }
    return this[_values].teardown;
  }

  set teardown(value) {
    const klass = require('./TestReportTeardown');
    return this[_values].teardown = new klass(value);
  }
}

module.exports = TestReport;

