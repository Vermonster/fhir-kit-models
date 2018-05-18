const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ConceptMap_Element extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConceptMap_Element || values instanceof BackboneElement) {
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
  get display() {
    return this[_values].display;
  }
  set display(value) {
    return this[_values].display = value;
  }
  get _display() {
    if (!this[_values]._display) {
      const klass = require('./Element');
      this[_values]._display = new klass();
    }
    return this[_values]._display;
  }
  set _display(value) {
    const klass = require('./Element');
    return this[_values]._display = new klass(value);
  }
  get target() {
    if (!this[_values].target) {
      const klass = require('./ConceptMap_Target');
      this[_values].target = ArrayProxy(klass);
    }
    return this[_values].target;
  }
  set target(value) {
    const klass = require('./ConceptMap_Target');
    this[_values].target = ArrayProxy(klass);
    value.forEach(entry => this[_values].target.push(entry));
    return this[_values].target;
  }
}
module.exports = ConceptMap_Element;