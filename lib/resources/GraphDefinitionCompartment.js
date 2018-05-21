
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class GraphDefinitionCompartment extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof GraphDefinitionCompartment ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get rule() {
    return this[_values].rule;
  }

  set rule(value) {
    return this[_values].rule = value;
  }

  get _rule() {
    if (!isPresent(this[_values]._rule)) {
      const klass = require('./Element');
      this[_values]._rule = new klass();
    }
    return this[_values]._rule;
  }

  set _rule(value) {
    const klass = require('./Element');
    return this[_values]._rule = new klass(value);
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
      this[_values]._expression = new klass();
    }
    return this[_values]._expression;
  }

  set _expression(value) {
    const klass = require('./Element');
    return this[_values]._expression = new klass(value);
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
}

module.exports = GraphDefinitionCompartment;

