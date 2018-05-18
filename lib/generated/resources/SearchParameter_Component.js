const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class SearchParameter_Component extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof SearchParameter_Component || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get definition() {
    if (!this[_values].definition) {
      const klass = require('./Reference');
      this[_values].definition = new klass();
    }
    return this[_values].definition;
  }
  set definition(value) {
    const klass = require('./Reference');
    return this[_values].definition = new klass(value);
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
module.exports = SearchParameter_Component;