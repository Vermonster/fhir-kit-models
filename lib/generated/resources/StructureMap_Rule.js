const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class StructureMap_Rule extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureMap_Rule || values instanceof BackboneElement) {
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
    if (!this[_values]._name) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }
  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }
  get source() {
    if (!this[_values].source) {
      const klass = require('./StructureMap_Source');
      this[_values].source = ArrayProxy(klass);
    }
    return this[_values].source;
  }
  set source(value) {
    const klass = require('./StructureMap_Source');
    this[_values].source = ArrayProxy(klass);
    value.forEach(entry => this[_values].source.push(entry));
    return this[_values].source;
  }
  get target() {
    if (!this[_values].target) {
      const klass = require('./StructureMap_Target');
      this[_values].target = ArrayProxy(klass);
    }
    return this[_values].target;
  }
  set target(value) {
    const klass = require('./StructureMap_Target');
    this[_values].target = ArrayProxy(klass);
    value.forEach(entry => this[_values].target.push(entry));
    return this[_values].target;
  }
  get rule() {
    if (!this[_values].rule) {
      const klass = require('./StructureMap_Rule');
      this[_values].rule = ArrayProxy(klass);
    }
    return this[_values].rule;
  }
  set rule(value) {
    const klass = require('./StructureMap_Rule');
    this[_values].rule = ArrayProxy(klass);
    value.forEach(entry => this[_values].rule.push(entry));
    return this[_values].rule;
  }
  get dependent() {
    if (!this[_values].dependent) {
      const klass = require('./StructureMap_Dependent');
      this[_values].dependent = ArrayProxy(klass);
    }
    return this[_values].dependent;
  }
  set dependent(value) {
    const klass = require('./StructureMap_Dependent');
    this[_values].dependent = ArrayProxy(klass);
    value.forEach(entry => this[_values].dependent.push(entry));
    return this[_values].dependent;
  }
  get documentation() {
    return this[_values].documentation;
  }
  set documentation(value) {
    return this[_values].documentation = value;
  }
  get _documentation() {
    if (!this[_values]._documentation) {
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
module.exports = StructureMap_Rule;