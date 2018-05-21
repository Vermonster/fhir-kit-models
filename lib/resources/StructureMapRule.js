const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class StructureMapRule extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureMapRule ||
      values instanceof BackboneElement) {
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

  get source() {
    if (!isPresent(this[_values].source)) {
      const klass = require('./StructureMapSource');
      this[_values].source = ArrayProxy(klass);
    }
    return this[_values].source;
  }

  set source(value) {
    const klass = require('./StructureMapSource');
    this[_values].source = ArrayProxy(klass);
    value.forEach(entry => this[_values].source.push(entry));
    return this[_values].source;
  }

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./StructureMapTarget');
      this[_values].target = ArrayProxy(klass);
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./StructureMapTarget');
    this[_values].target = ArrayProxy(klass);
    value.forEach(entry => this[_values].target.push(entry));
    return this[_values].target;
  }

  get rule() {
    if (!isPresent(this[_values].rule)) {
      const klass = require('./StructureMapRule');
      this[_values].rule = ArrayProxy(klass);
    }
    return this[_values].rule;
  }

  set rule(value) {
    const klass = require('./StructureMapRule');
    this[_values].rule = ArrayProxy(klass);
    value.forEach(entry => this[_values].rule.push(entry));
    return this[_values].rule;
  }

  get dependent() {
    if (!isPresent(this[_values].dependent)) {
      const klass = require('./StructureMapDependent');
      this[_values].dependent = ArrayProxy(klass);
    }
    return this[_values].dependent;
  }

  set dependent(value) {
    const klass = require('./StructureMapDependent');
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

module.exports = StructureMapRule;

