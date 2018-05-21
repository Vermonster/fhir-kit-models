const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Sequence_Repository extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Sequence_Repository || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get datasetId() {
    return this[_values].datasetId;
  }

  set datasetId(value) {
    return this[_values].datasetId = value;
  }

  get _datasetId() {
    if (!isPresent(this[_values]._datasetId)) {
      const klass = require('./Element');
      this[_values]._datasetId = new klass();
    }
    return this[_values]._datasetId;
  }

  set _datasetId(value) {
    const klass = require('./Element');
    return this[_values]._datasetId = new klass(value);
  }

  get variantsetId() {
    return this[_values].variantsetId;
  }

  set variantsetId(value) {
    return this[_values].variantsetId = value;
  }

  get _variantsetId() {
    if (!isPresent(this[_values]._variantsetId)) {
      const klass = require('./Element');
      this[_values]._variantsetId = new klass();
    }
    return this[_values]._variantsetId;
  }

  set _variantsetId(value) {
    const klass = require('./Element');
    return this[_values]._variantsetId = new klass(value);
  }

  get readsetId() {
    return this[_values].readsetId;
  }

  set readsetId(value) {
    return this[_values].readsetId = value;
  }

  get _readsetId() {
    if (!isPresent(this[_values]._readsetId)) {
      const klass = require('./Element');
      this[_values]._readsetId = new klass();
    }
    return this[_values]._readsetId;
  }

  set _readsetId(value) {
    const klass = require('./Element');
    return this[_values]._readsetId = new klass(value);
  }
}

module.exports = Sequence_Repository;

