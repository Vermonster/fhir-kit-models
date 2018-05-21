const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ImagingManifest_Series extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImagingManifest_Series || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get endpoint() {
    if (!isPresent(this[_values].endpoint)) {
      const klass = require('./Reference');
      this[_values].endpoint = ArrayProxy(klass);
    }
    return this[_values].endpoint;
  }

  set endpoint(value) {
    const klass = require('./Reference');
    this[_values].endpoint = ArrayProxy(klass);
    value.forEach(entry => this[_values].endpoint.push(entry));
    return this[_values].endpoint;
  }

  get instance() {
    if (!isPresent(this[_values].instance)) {
      const klass = require('./ImagingManifest_Instance');
      this[_values].instance = ArrayProxy(klass);
    }
    return this[_values].instance;
  }

  set instance(value) {
    const klass = require('./ImagingManifest_Instance');
    this[_values].instance = ArrayProxy(klass);
    value.forEach(entry => this[_values].instance.push(entry));
    return this[_values].instance;
  }
}

module.exports = ImagingManifest_Series;

