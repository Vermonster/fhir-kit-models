const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class PlanDefinition_Condition extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PlanDefinition_Condition || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get kind() {
    return this[_values].kind;
  }
  set kind(value) {
    return this[_values].kind = value;
  }
  get _kind() {
    if (!this[_values]._kind) {
      const klass = require('./Element');
      this[_values]._kind = new klass();
    }
    return this[_values]._kind;
  }
  set _kind(value) {
    const klass = require('./Element');
    return this[_values]._kind = new klass(value);
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
  get language() {
    return this[_values].language;
  }
  set language(value) {
    return this[_values].language = value;
  }
  get _language() {
    if (!this[_values]._language) {
      const klass = require('./Element');
      this[_values]._language = new klass();
    }
    return this[_values]._language;
  }
  set _language(value) {
    const klass = require('./Element');
    return this[_values]._language = new klass(value);
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
}
module.exports = PlanDefinition_Condition;