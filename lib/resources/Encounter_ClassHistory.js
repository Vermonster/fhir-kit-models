
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Encounter_ClassHistory extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Encounter_ClassHistory || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get class() {
    if (!isPresent(this[_values].class)) {
      const klass = require('./Coding');
      this[_values].class = new klass();
    }
    return this[_values].class;
  }

  set class(value) {
    const klass = require('./Coding');
    return this[_values].class = new klass(value);
  }

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }
}

module.exports = Encounter_ClassHistory;

