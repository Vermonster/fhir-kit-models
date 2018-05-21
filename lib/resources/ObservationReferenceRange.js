const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ObservationReferenceRange extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ObservationReferenceRange ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get low() {
    if (!isPresent(this[_values].low)) {
      const klass = require('./Quantity');
      this[_values].low = new klass();
    }
    return this[_values].low;
  }

  set low(value) {
    const klass = require('./Quantity');
    return this[_values].low = new klass(value);
  }

  get high() {
    if (!isPresent(this[_values].high)) {
      const klass = require('./Quantity');
      this[_values].high = new klass();
    }
    return this[_values].high;
  }

  set high(value) {
    const klass = require('./Quantity');
    return this[_values].high = new klass(value);
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }

  get appliesTo() {
    if (!isPresent(this[_values].appliesTo)) {
      const klass = require('./CodeableConcept');
      this[_values].appliesTo = ArrayProxy(klass);
    }
    return this[_values].appliesTo;
  }

  set appliesTo(value) {
    const klass = require('./CodeableConcept');
    this[_values].appliesTo = ArrayProxy(klass);
    value.forEach(entry => this[_values].appliesTo.push(entry));
    return this[_values].appliesTo;
  }

  get age() {
    if (!isPresent(this[_values].age)) {
      const klass = require('./Range');
      this[_values].age = new klass();
    }
    return this[_values].age;
  }

  set age(value) {
    const klass = require('./Range');
    return this[_values].age = new klass(value);
  }

  get text() {
    return this[_values].text;
  }

  set text(value) {
    return this[_values].text = value;
  }

  get _text() {
    if (!isPresent(this[_values]._text)) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }

  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
  }
}

module.exports = ObservationReferenceRange;

