const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class ImagingManifest_Instance extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImagingManifest_Instance || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sopClass() {
    return this[_values].sopClass;
  }

  set sopClass(value) {
    return this[_values].sopClass = value;
  }

  get _sopClass() {
    if (!isPresent(this[_values]._sopClass)) {
      const klass = require('./Element');
      this[_values]._sopClass = new klass();
    }
    return this[_values]._sopClass;
  }

  set _sopClass(value) {
    const klass = require('./Element');
    return this[_values]._sopClass = new klass(value);
  }

  get uid() {
    return this[_values].uid;
  }

  set uid(value) {
    return this[_values].uid = value;
  }

  get _uid() {
    if (!isPresent(this[_values]._uid)) {
      const klass = require('./Element');
      this[_values]._uid = new klass();
    }
    return this[_values]._uid;
  }

  set _uid(value) {
    const klass = require('./Element');
    return this[_values]._uid = new klass(value);
  }
}

module.exports = ImagingManifest_Instance;

