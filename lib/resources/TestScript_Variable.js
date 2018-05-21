const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScript_Variable extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScript_Variable || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get defaultValue() {
    return this[_values].defaultValue;
  }

  set defaultValue(value) {
    return this[_values].defaultValue = value;
  }

  get _defaultValue() {
    if (!isPresent(this[_values]._defaultValue)) {
      const klass = require('./Element');
      this[_values]._defaultValue = new klass();
    }
    return this[_values]._defaultValue;
  }

  set _defaultValue(value) {
    const klass = require('./Element');
    return this[_values]._defaultValue = new klass(value);
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

  get headerField() {
    return this[_values].headerField;
  }

  set headerField(value) {
    return this[_values].headerField = value;
  }

  get _headerField() {
    if (!isPresent(this[_values]._headerField)) {
      const klass = require('./Element');
      this[_values]._headerField = new klass();
    }
    return this[_values]._headerField;
  }

  set _headerField(value) {
    const klass = require('./Element');
    return this[_values]._headerField = new klass(value);
  }

  get hint() {
    return this[_values].hint;
  }

  set hint(value) {
    return this[_values].hint = value;
  }

  get _hint() {
    if (!isPresent(this[_values]._hint)) {
      const klass = require('./Element');
      this[_values]._hint = new klass();
    }
    return this[_values]._hint;
  }

  set _hint(value) {
    const klass = require('./Element');
    return this[_values]._hint = new klass(value);
  }

  get path() {
    return this[_values].path;
  }

  set path(value) {
    return this[_values].path = value;
  }

  get _path() {
    if (!isPresent(this[_values]._path)) {
      const klass = require('./Element');
      this[_values]._path = new klass();
    }
    return this[_values]._path;
  }

  set _path(value) {
    const klass = require('./Element');
    return this[_values]._path = new klass(value);
  }

  get sourceId() {
    return this[_values].sourceId;
  }

  set sourceId(value) {
    return this[_values].sourceId = value;
  }

  get _sourceId() {
    if (!isPresent(this[_values]._sourceId)) {
      const klass = require('./Element');
      this[_values]._sourceId = new klass();
    }
    return this[_values]._sourceId;
  }

  set _sourceId(value) {
    const klass = require('./Element');
    return this[_values]._sourceId = new klass(value);
  }
}

module.exports = TestScript_Variable;

