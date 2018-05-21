
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class LocationPosition extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof LocationPosition || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get longitude() {
    return this[_values].longitude;
  }

  set longitude(value) {
    return this[_values].longitude = value;
  }

  get _longitude() {
    if (!isPresent(this[_values]._longitude)) {
      const klass = require('./Element');
      this[_values]._longitude = new klass();
    }
    return this[_values]._longitude;
  }

  set _longitude(value) {
    const klass = require('./Element');
    return this[_values]._longitude = new klass(value);
  }

  get latitude() {
    return this[_values].latitude;
  }

  set latitude(value) {
    return this[_values].latitude = value;
  }

  get _latitude() {
    if (!isPresent(this[_values]._latitude)) {
      const klass = require('./Element');
      this[_values]._latitude = new klass();
    }
    return this[_values]._latitude;
  }

  set _latitude(value) {
    const klass = require('./Element');
    return this[_values]._latitude = new klass(value);
  }

  get altitude() {
    return this[_values].altitude;
  }

  set altitude(value) {
    return this[_values].altitude = value;
  }

  get _altitude() {
    if (!isPresent(this[_values]._altitude)) {
      const klass = require('./Element');
      this[_values]._altitude = new klass();
    }
    return this[_values]._altitude;
  }

  set _altitude(value) {
    const klass = require('./Element');
    return this[_values]._altitude = new klass(value);
  }
}

module.exports = LocationPosition;

