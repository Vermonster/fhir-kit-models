const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class StructureMap_Structure extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof StructureMap_Structure || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get url() {
    return this[_values].url;
  }

  set url(value) {
    return this[_values].url = value;
  }

  get _url() {
    if (!isPresent(this[_values]._url)) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }

  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
  }

  get mode() {
    return this[_values].mode;
  }

  set mode(value) {
    return this[_values].mode = value;
  }

  get _mode() {
    if (!isPresent(this[_values]._mode)) {
      const klass = require('./Element');
      this[_values]._mode = new klass();
    }
    return this[_values]._mode;
  }

  set _mode(value) {
    const klass = require('./Element');
    return this[_values]._mode = new klass(value);
  }

  get alias() {
    return this[_values].alias;
  }

  set alias(value) {
    return this[_values].alias = value;
  }

  get _alias() {
    if (!isPresent(this[_values]._alias)) {
      const klass = require('./Element');
      this[_values]._alias = new klass();
    }
    return this[_values]._alias;
  }

  set _alias(value) {
    const klass = require('./Element');
    return this[_values]._alias = new klass(value);
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

module.exports = StructureMap_Structure;

