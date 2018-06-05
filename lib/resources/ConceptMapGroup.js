const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ConceptMapGroup extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConceptMapGroup ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get source() {
    return this[_values].source;
  }

  set source(value) {
    return this[_values].source = value;
  }

  get _source() {
    if (!isPresent(this[_values]._source)) {
      const klass = require('./Element');
      this[_values]._source = new klass();
    }
    return this[_values]._source;
  }

  set _source(value) {
    const klass = require('./Element');
    return this[_values]._source = new klass(value);
  }

  get sourceVersion() {
    return this[_values].sourceVersion;
  }

  set sourceVersion(value) {
    return this[_values].sourceVersion = value;
  }

  get _sourceVersion() {
    if (!isPresent(this[_values]._sourceVersion)) {
      const klass = require('./Element');
      this[_values]._sourceVersion = new klass();
    }
    return this[_values]._sourceVersion;
  }

  set _sourceVersion(value) {
    const klass = require('./Element');
    return this[_values]._sourceVersion = new klass(value);
  }

  get target() {
    return this[_values].target;
  }

  set target(value) {
    return this[_values].target = value;
  }

  get _target() {
    if (!isPresent(this[_values]._target)) {
      const klass = require('./Element');
      this[_values]._target = new klass();
    }
    return this[_values]._target;
  }

  set _target(value) {
    const klass = require('./Element');
    return this[_values]._target = new klass(value);
  }

  get targetVersion() {
    return this[_values].targetVersion;
  }

  set targetVersion(value) {
    return this[_values].targetVersion = value;
  }

  get _targetVersion() {
    if (!isPresent(this[_values]._targetVersion)) {
      const klass = require('./Element');
      this[_values]._targetVersion = new klass();
    }
    return this[_values]._targetVersion;
  }

  set _targetVersion(value) {
    const klass = require('./Element');
    return this[_values]._targetVersion = new klass(value);
  }

  get element() {
    if (!isPresent(this[_values].element)) {
      const klass = require('./ConceptMapElement');
      this[_values].element = ArrayProxy(klass);
    }
    return this[_values].element;
  }

  set element(value) {
    const klass = require('./ConceptMapElement');
    this[_values].element = ArrayProxy(klass);
    value.forEach(entry => this[_values].element.push(entry));
    return this[_values].element;
  }

  get unmapped() {
    if (!isPresent(this[_values].unmapped)) {
      const klass = require('./ConceptMapUnmapped');
      this[_values].unmapped = new klass();
    }
    return this[_values].unmapped;
  }

  set unmapped(value) {
    const klass = require('./ConceptMapUnmapped');
    return this[_values].unmapped = new klass(value);
  }
}

module.exports = ConceptMapGroup;

