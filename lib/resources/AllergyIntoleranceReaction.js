const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class AllergyIntoleranceReaction extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof AllergyIntoleranceReaction ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get substance() {
    if (!isPresent(this[_values].substance)) {
      const klass = require('./CodeableConcept');
      this[_values].substance = new klass();
    }
    return this[_values].substance;
  }

  set substance(value) {
    const klass = require('./CodeableConcept');
    return this[_values].substance = new klass(value);
  }

  get manifestation() {
    if (!isPresent(this[_values].manifestation)) {
      const klass = require('./CodeableConcept');
      this[_values].manifestation = ArrayProxy(klass);
    }
    return this[_values].manifestation;
  }

  set manifestation(value) {
    const klass = require('./CodeableConcept');
    this[_values].manifestation = ArrayProxy(klass);
    value.forEach(entry => this[_values].manifestation.push(entry));
    return this[_values].manifestation;
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

  get onset() {
    return this[_values].onset;
  }

  set onset(value) {
    return this[_values].onset = value;
  }

  get _onset() {
    if (!isPresent(this[_values]._onset)) {
      const klass = require('./Element');
      this[_values]._onset = new klass();
    }
    return this[_values]._onset;
  }

  set _onset(value) {
    const klass = require('./Element');
    return this[_values]._onset = new klass(value);
  }

  get severity() {
    return this[_values].severity;
  }

  set severity(value) {
    return this[_values].severity = value;
  }

  get _severity() {
    if (!isPresent(this[_values]._severity)) {
      const klass = require('./Element');
      this[_values]._severity = new klass();
    }
    return this[_values]._severity;
  }

  set _severity(value) {
    const klass = require('./Element');
    return this[_values]._severity = new klass(value);
  }

  get exposureRoute() {
    if (!isPresent(this[_values].exposureRoute)) {
      const klass = require('./CodeableConcept');
      this[_values].exposureRoute = new klass();
    }
    return this[_values].exposureRoute;
  }

  set exposureRoute(value) {
    const klass = require('./CodeableConcept');
    return this[_values].exposureRoute = new klass(value);
  }

  get note() {
    if (!isPresent(this[_values].note)) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }

  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }
}

module.exports = AllergyIntoleranceReaction;

