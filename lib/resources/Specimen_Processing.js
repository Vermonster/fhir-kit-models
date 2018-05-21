const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Specimen_Processing extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Specimen_Processing || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get procedure() {
    if (!isPresent(this[_values].procedure)) {
      const klass = require('./CodeableConcept');
      this[_values].procedure = new klass();
    }
    return this[_values].procedure;
  }

  set procedure(value) {
    const klass = require('./CodeableConcept');
    return this[_values].procedure = new klass(value);
  }

  get additive() {
    if (!isPresent(this[_values].additive)) {
      const klass = require('./Reference');
      this[_values].additive = ArrayProxy(klass);
    }
    return this[_values].additive;
  }

  set additive(value) {
    const klass = require('./Reference');
    this[_values].additive = ArrayProxy(klass);
    value.forEach(entry => this[_values].additive.push(entry));
    return this[_values].additive;
  }

  get timeDateTime() {
    return this[_values].timeDateTime;
  }

  set timeDateTime(value) {
    return this[_values].timeDateTime = value;
  }

  get _timeDateTime() {
    if (!isPresent(this[_values]._timeDateTime)) {
      const klass = require('./Element');
      this[_values]._timeDateTime = new klass();
    }
    return this[_values]._timeDateTime;
  }

  set _timeDateTime(value) {
    const klass = require('./Element');
    return this[_values]._timeDateTime = new klass(value);
  }

  get timePeriod() {
    if (!isPresent(this[_values].timePeriod)) {
      const klass = require('./Period');
      this[_values].timePeriod = new klass();
    }
    return this[_values].timePeriod;
  }

  set timePeriod(value) {
    const klass = require('./Period');
    return this[_values].timePeriod = new klass(value);
  }
}

module.exports = Specimen_Processing;

