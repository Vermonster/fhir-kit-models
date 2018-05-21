const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class OperationDefinitionParameter extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof OperationDefinitionParameter ||
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

  get use() {
    return this[_values].use;
  }

  set use(value) {
    return this[_values].use = value;
  }

  get _use() {
    if (!isPresent(this[_values]._use)) {
      const klass = require('./Element');
      this[_values]._use = new klass();
    }
    return this[_values]._use;
  }

  set _use(value) {
    const klass = require('./Element');
    return this[_values]._use = new klass(value);
  }

  get min() {
    return this[_values].min;
  }

  set min(value) {
    return this[_values].min = value;
  }

  get _min() {
    if (!isPresent(this[_values]._min)) {
      const klass = require('./Element');
      this[_values]._min = new klass();
    }
    return this[_values]._min;
  }

  set _min(value) {
    const klass = require('./Element');
    return this[_values]._min = new klass(value);
  }

  get max() {
    return this[_values].max;
  }

  set max(value) {
    return this[_values].max = value;
  }

  get _max() {
    if (!isPresent(this[_values]._max)) {
      const klass = require('./Element');
      this[_values]._max = new klass();
    }
    return this[_values]._max;
  }

  set _max(value) {
    const klass = require('./Element');
    return this[_values]._max = new klass(value);
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

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get searchType() {
    return this[_values].searchType;
  }

  set searchType(value) {
    return this[_values].searchType = value;
  }

  get _searchType() {
    if (!isPresent(this[_values]._searchType)) {
      const klass = require('./Element');
      this[_values]._searchType = new klass();
    }
    return this[_values]._searchType;
  }

  set _searchType(value) {
    const klass = require('./Element');
    return this[_values]._searchType = new klass(value);
  }

  get profile() {
    if (!isPresent(this[_values].profile)) {
      const klass = require('./Reference');
      this[_values].profile = new klass();
    }
    return this[_values].profile;
  }

  set profile(value) {
    const klass = require('./Reference');
    return this[_values].profile = new klass(value);
  }

  get binding() {
    if (!isPresent(this[_values].binding)) {
      const klass = require('./OperationDefinitionBinding');
      this[_values].binding = new klass();
    }
    return this[_values].binding;
  }

  set binding(value) {
    const klass = require('./OperationDefinitionBinding');
    return this[_values].binding = new klass(value);
  }

  get part() {
    if (!isPresent(this[_values].part)) {
      const klass = require('./OperationDefinitionParameter');
      this[_values].part = ArrayProxy(klass);
    }
    return this[_values].part;
  }

  set part(value) {
    const klass = require('./OperationDefinitionParameter');
    this[_values].part = ArrayProxy(klass);
    value.forEach(entry => this[_values].part.push(entry));
    return this[_values].part;
  }
}

module.exports = OperationDefinitionParameter;

