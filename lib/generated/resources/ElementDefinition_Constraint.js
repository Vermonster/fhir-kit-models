const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ElementDefinition_Constraint extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ElementDefinition_Constraint || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get key() {
    return this[_values].key;
  }

  set key(value) {
    return this[_values].key = value;
  }

  get _key() {
    if (!isPresent(this[_values]._key)) {
      const klass = require('./Element');
      this[_values]._key = new klass();
    }
    return this[_values]._key;
  }

  set _key(value) {
    const klass = require('./Element');
    return this[_values]._key = new klass(value);
  }

  get requirements() {
    return this[_values].requirements;
  }

  set requirements(value) {
    return this[_values].requirements = value;
  }

  get _requirements() {
    if (!isPresent(this[_values]._requirements)) {
      const klass = require('./Element');
      this[_values]._requirements = new klass();
    }
    return this[_values]._requirements;
  }

  set _requirements(value) {
    const klass = require('./Element');
    return this[_values]._requirements = new klass(value);
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

  get human() {
    return this[_values].human;
  }

  set human(value) {
    return this[_values].human = value;
  }

  get _human() {
    if (!isPresent(this[_values]._human)) {
      const klass = require('./Element');
      this[_values]._human = new klass();
    }
    return this[_values]._human;
  }

  set _human(value) {
    const klass = require('./Element');
    return this[_values]._human = new klass(value);
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

  get xpath() {
    return this[_values].xpath;
  }

  set xpath(value) {
    return this[_values].xpath = value;
  }

  get _xpath() {
    if (!isPresent(this[_values]._xpath)) {
      const klass = require('./Element');
      this[_values]._xpath = new klass();
    }
    return this[_values]._xpath;
  }

  set _xpath(value) {
    const klass = require('./Element');
    return this[_values]._xpath = new klass(value);
  }

  get source() {
    return this[_values].source;
  }

  set source(value) {
    return this[_values].source = value;
  }

  get _source() {
    if (!isPresent(this[_values]._source)) {
      const klass = require('./Element');
      this[_values]._source = new klass();
    }
    return this[_values]._source;
  }

  set _source(value) {
    const klass = require('./Element');
    return this[_values]._source = new klass(value);
  }
}

module.exports = ElementDefinition_Constraint;

