const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class StructureMapTarget extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureMapTarget ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get context() {
    return this[_values].context;
  }

  set context(value) {
    return this[_values].context = value;
  }

  get _context() {
    if (!isPresent(this[_values]._context)) {
      const klass = require('./Element');
      this[_values]._context = new klass();
    }
    return this[_values]._context;
  }

  set _context(value) {
    const klass = require('./Element');
    return this[_values]._context = new klass(value);
  }

  get contextType() {
    return this[_values].contextType;
  }

  set contextType(value) {
    return this[_values].contextType = value;
  }

  get _contextType() {
    if (!isPresent(this[_values]._contextType)) {
      const klass = require('./Element');
      this[_values]._contextType = new klass();
    }
    return this[_values]._contextType;
  }

  set _contextType(value) {
    const klass = require('./Element');
    return this[_values]._contextType = new klass(value);
  }

  get element() {
    return this[_values].element;
  }

  set element(value) {
    return this[_values].element = value;
  }

  get _element() {
    if (!isPresent(this[_values]._element)) {
      const klass = require('./Element');
      this[_values]._element = new klass();
    }
    return this[_values]._element;
  }

  set _element(value) {
    const klass = require('./Element');
    return this[_values]._element = new klass(value);
  }

  get variable() {
    return this[_values].variable;
  }

  set variable(value) {
    return this[_values].variable = value;
  }

  get _variable() {
    if (!isPresent(this[_values]._variable)) {
      const klass = require('./Element');
      this[_values]._variable = new klass();
    }
    return this[_values]._variable;
  }

  set _variable(value) {
    const klass = require('./Element');
    return this[_values]._variable = new klass(value);
  }

  get listMode() {
    return this[_values].listMode;
  }

  set listMode(value) {
    return this[_values].listMode = value;
  }

  get _listMode() {
    if (!isPresent(this[_values]._listMode)) {
      const klass = require('./Element');
      this[_values]._listMode = ArrayProxy(klass);
    }
    return this[_values]._listMode;
  }

  set _listMode(value) {
    const klass = require('./Element');
    this[_values]._listMode = ArrayProxy(klass);
    value.forEach(entry => this[_values]._listMode.push(entry));
    return this[_values]._listMode;
  }

  get listRuleId() {
    return this[_values].listRuleId;
  }

  set listRuleId(value) {
    return this[_values].listRuleId = value;
  }

  get _listRuleId() {
    if (!isPresent(this[_values]._listRuleId)) {
      const klass = require('./Element');
      this[_values]._listRuleId = new klass();
    }
    return this[_values]._listRuleId;
  }

  set _listRuleId(value) {
    const klass = require('./Element');
    return this[_values]._listRuleId = new klass(value);
  }

  get transform() {
    return this[_values].transform;
  }

  set transform(value) {
    return this[_values].transform = value;
  }

  get _transform() {
    if (!isPresent(this[_values]._transform)) {
      const klass = require('./Element');
      this[_values]._transform = new klass();
    }
    return this[_values]._transform;
  }

  set _transform(value) {
    const klass = require('./Element');
    return this[_values]._transform = new klass(value);
  }

  get parameter() {
    if (!isPresent(this[_values].parameter)) {
      const klass = require('./StructureMapParameter');
      this[_values].parameter = ArrayProxy(klass);
    }
    return this[_values].parameter;
  }

  set parameter(value) {
    const klass = require('./StructureMapParameter');
    this[_values].parameter = ArrayProxy(klass);
    value.forEach(entry => this[_values].parameter.push(entry));
    return this[_values].parameter;
  }
}

module.exports = StructureMapTarget;

