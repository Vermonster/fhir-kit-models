const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class MeasureGroup extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MeasureGroup || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get population() {
    if (!isPresent(this[_values].population)) {
      const klass = require('./MeasurePopulation');
      this[_values].population = ArrayProxy(klass);
    }
    return this[_values].population;
  }

  set population(value) {
    const klass = require('./MeasurePopulation');
    this[_values].population = ArrayProxy(klass);
    value.forEach(entry => this[_values].population.push(entry));
    return this[_values].population;
  }

  get stratifier() {
    if (!isPresent(this[_values].stratifier)) {
      const klass = require('./MeasureStratifier');
      this[_values].stratifier = ArrayProxy(klass);
    }
    return this[_values].stratifier;
  }

  set stratifier(value) {
    const klass = require('./MeasureStratifier');
    this[_values].stratifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].stratifier.push(entry));
    return this[_values].stratifier;
  }
}

module.exports = MeasureGroup;

