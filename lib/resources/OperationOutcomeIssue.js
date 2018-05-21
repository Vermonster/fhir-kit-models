const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class OperationOutcomeIssue extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof OperationOutcomeIssue || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get severity() {
    return this[_values].severity;
  }

  set severity(value) {
    return this[_values].severity = value;
  }

  get _severity() {
    if (!isPresent(this[_values]._severity)) {
      const klass = require('./Element');
      this[_values]._severity = new klass();
    }
    return this[_values]._severity;
  }

  set _severity(value) {
    const klass = require('./Element');
    return this[_values]._severity = new klass(value);
  }

  get code() {
    return this[_values].code;
  }

  set code(value) {
    return this[_values].code = value;
  }

  get _code() {
    if (!isPresent(this[_values]._code)) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }

  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
  }

  get details() {
    if (!isPresent(this[_values].details)) {
      const klass = require('./CodeableConcept');
      this[_values].details = new klass();
    }
    return this[_values].details;
  }

  set details(value) {
    const klass = require('./CodeableConcept');
    return this[_values].details = new klass(value);
  }

  get diagnostics() {
    return this[_values].diagnostics;
  }

  set diagnostics(value) {
    return this[_values].diagnostics = value;
  }

  get _diagnostics() {
    if (!isPresent(this[_values]._diagnostics)) {
      const klass = require('./Element');
      this[_values]._diagnostics = new klass();
    }
    return this[_values]._diagnostics;
  }

  set _diagnostics(value) {
    const klass = require('./Element');
    return this[_values]._diagnostics = new klass(value);
  }

  get location() {
    return this[_values].location;
  }

  set location(value) {
    return this[_values].location = value;
  }

  get _location() {
    if (!isPresent(this[_values]._location)) {
      const klass = require('./Element');
      this[_values]._location = ArrayProxy(klass);
    }
    return this[_values]._location;
  }

  set _location(value) {
    const klass = require('./Element');
    this[_values]._location = ArrayProxy(klass);
    value.forEach(entry => this[_values]._location.push(entry));
    return this[_values]._location;
  }

  get expression() {
    return this[_values].expression;
  }

  set expression(value) {
    return this[_values].expression = value;
  }

  get _expression() {
    if (!isPresent(this[_values]._expression)) {
      const klass = require('./Element');
      this[_values]._expression = ArrayProxy(klass);
    }
    return this[_values]._expression;
  }

  set _expression(value) {
    const klass = require('./Element');
    this[_values]._expression = ArrayProxy(klass);
    value.forEach(entry => this[_values]._expression.push(entry));
    return this[_values]._expression;
  }
}

module.exports = OperationOutcomeIssue;

