const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class OperationDefinition_Overload extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof OperationDefinition_Overload || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get parameterName() {
    return this[_values].parameterName;
  }
  set parameterName(value) {
    return this[_values].parameterName = value;
  }
  get _parameterName() {
    if (!this[_values]._parameterName) {
      const klass = require('./Element');
      this[_values]._parameterName = ArrayProxy(klass);
    }
    return this[_values]._parameterName;
  }
  set _parameterName(value) {
    const klass = require('./Element');
    this[_values]._parameterName = ArrayProxy(klass);
    value.forEach(entry => this[_values]._parameterName.push(entry));
    return this[_values]._parameterName;
  }
  get comment() {
    return this[_values].comment;
  }
  set comment(value) {
    return this[_values].comment = value;
  }
  get _comment() {
    if (!this[_values]._comment) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }
  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }
}
module.exports = OperationDefinition_Overload;