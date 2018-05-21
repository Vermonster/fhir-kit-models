const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class StructureMapGroup extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureMapGroup ||
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

  get extends() {
    return this[_values].extends;
  }

  set extends(value) {
    return this[_values].extends = value;
  }

  get _extends() {
    if (!isPresent(this[_values]._extends)) {
      const klass = require('./Element');
      this[_values]._extends = new klass();
    }
    return this[_values]._extends;
  }

  set _extends(value) {
    const klass = require('./Element');
    return this[_values]._extends = new klass(value);
  }

  get typeMode() {
    return this[_values].typeMode;
  }

  set typeMode(value) {
    return this[_values].typeMode = value;
  }

  get _typeMode() {
    if (!isPresent(this[_values]._typeMode)) {
      const klass = require('./Element');
      this[_values]._typeMode = new klass();
    }
    return this[_values]._typeMode;
  }

  set _typeMode(value) {
    const klass = require('./Element');
    return this[_values]._typeMode = new klass(value);
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

  get input() {
    if (!isPresent(this[_values].input)) {
      const klass = require('./StructureMapInput');
      this[_values].input = ArrayProxy(klass);
    }
    return this[_values].input;
  }

  set input(value) {
    const klass = require('./StructureMapInput');
    this[_values].input = ArrayProxy(klass);
    value.forEach(entry => this[_values].input.push(entry));
    return this[_values].input;
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
}

module.exports = StructureMapGroup;

