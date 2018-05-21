const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ImagingManifest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImagingManifest || values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get patient() {
    if (!isPresent(this[_values].patient)) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }

  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }

  get authoringTime() {
    return this[_values].authoringTime;
  }

  set authoringTime(value) {
    return this[_values].authoringTime = value;
  }

  get _authoringTime() {
    if (!isPresent(this[_values]._authoringTime)) {
      const klass = require('./Element');
      this[_values]._authoringTime = new klass();
    }
    return this[_values]._authoringTime;
  }

  set _authoringTime(value) {
    const klass = require('./Element');
    return this[_values]._authoringTime = new klass(value);
  }

  get author() {
    if (!isPresent(this[_values].author)) {
      const klass = require('./Reference');
      this[_values].author = new klass();
    }
    return this[_values].author;
  }

  set author(value) {
    const klass = require('./Reference');
    return this[_values].author = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get study() {
    if (!isPresent(this[_values].study)) {
      const klass = require('./ImagingManifest_Study');
      this[_values].study = ArrayProxy(klass);
    }
    return this[_values].study;
  }

  set study(value) {
    const klass = require('./ImagingManifest_Study');
    this[_values].study = ArrayProxy(klass);
    value.forEach(entry => this[_values].study.push(entry));
    return this[_values].study;
  }
}

module.exports = ImagingManifest;

