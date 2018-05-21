const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class CompartmentDefinition_Resource extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CompartmentDefinition_Resource || values instanceof BackboneElement) {
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

  get param() {
    return this[_values].param;
  }

  set param(value) {
    return this[_values].param = value;
  }

  get _param() {
    if (!isPresent(this[_values]._param)) {
      const klass = require('./Element');
      this[_values]._param = ArrayProxy(klass);
    }
    return this[_values]._param;
  }

  set _param(value) {
    const klass = require('./Element');
    this[_values]._param = ArrayProxy(klass);
    value.forEach(entry => this[_values]._param.push(entry));
    return this[_values]._param;
  }

  get documentation() {
    return this[_values].documentation;
  }

  set documentation(value) {
    return this[_values].documentation = value;
  }

  get _documentation() {
    if (!isPresent(this[_values]._documentation)) {
      const klass = require('./Element');
      this[_values]._documentation = new klass();
    }
    return this[_values]._documentation;
  }

  set _documentation(value) {
    const klass = require('./Element');
    return this[_values]._documentation = new klass(value);
  }
}

module.exports = CompartmentDefinition_Resource;

