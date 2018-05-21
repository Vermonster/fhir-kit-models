const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Bundle_Response extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Bundle_Response || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get location() {
    return this[_values].location;
  }

  set location(value) {
    return this[_values].location = value;
  }

  get _location() {
    if (!isPresent(this[_values]._location)) {
      const klass = require('./Element');
      this[_values]._location = new klass();
    }
    return this[_values]._location;
  }

  set _location(value) {
    const klass = require('./Element');
    return this[_values]._location = new klass(value);
  }

  get etag() {
    return this[_values].etag;
  }

  set etag(value) {
    return this[_values].etag = value;
  }

  get _etag() {
    if (!isPresent(this[_values]._etag)) {
      const klass = require('./Element');
      this[_values]._etag = new klass();
    }
    return this[_values]._etag;
  }

  set _etag(value) {
    const klass = require('./Element');
    return this[_values]._etag = new klass(value);
  }

  get lastModified() {
    return this[_values].lastModified;
  }

  set lastModified(value) {
    return this[_values].lastModified = value;
  }

  get _lastModified() {
    if (!isPresent(this[_values]._lastModified)) {
      const klass = require('./Element');
      this[_values]._lastModified = new klass();
    }
    return this[_values]._lastModified;
  }

  set _lastModified(value) {
    const klass = require('./Element');
    return this[_values]._lastModified = new klass(value);
  }

  get outcome() {
    if (!isPresent(this[_values].outcome)) {
      const klass = require('./ResourceList');
      this[_values].outcome = new klass();
    }
    return this[_values].outcome;
  }

  set outcome(value) {
    const klass = require('./ResourceList');
    return this[_values].outcome = new klass(value);
  }
}

module.exports = Bundle_Response;

