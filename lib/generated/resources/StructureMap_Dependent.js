const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class StructureMap_Dependent extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureMap_Dependent || values instanceof BackboneElement) {
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

  get variable() {
    return this[_values].variable;
  }

  set variable(value) {
    return this[_values].variable = value;
  }

  get _variable() {
    if (!isPresent(this[_values]._variable)) {
      const klass = require('./Element');
      this[_values]._variable = ArrayProxy(klass);
    }
    return this[_values]._variable;
  }

  set _variable(value) {
    const klass = require('./Element');
    this[_values]._variable = ArrayProxy(klass);
    value.forEach(entry => this[_values]._variable.push(entry));
    return this[_values]._variable;
  }
}

module.exports = StructureMap_Dependent;

