const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Element = require('./Element');
class ContactPoint extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ContactPoint || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get system() {
    return this[_values].system;
  }
  set system(value) {
    return this[_values].system = value;
  }
  get _system() {
    if (!this[_values]._system) {
      const klass = require('./Element');
      this[_values]._system = new klass();
    }
    return this[_values]._system;
  }
  set _system(value) {
    const klass = require('./Element');
    return this[_values]._system = new klass(value);
  }
  get value() {
    return this[_values].value;
  }
  set value(value) {
    return this[_values].value = value;
  }
  get _value() {
    if (!this[_values]._value) {
      const klass = require('./Element');
      this[_values]._value = new klass();
    }
    return this[_values]._value;
  }
  set _value(value) {
    const klass = require('./Element');
    return this[_values]._value = new klass(value);
  }
  get use() {
    return this[_values].use;
  }
  set use(value) {
    return this[_values].use = value;
  }
  get _use() {
    if (!this[_values]._use) {
      const klass = require('./Element');
      this[_values]._use = new klass();
    }
    return this[_values]._use;
  }
  set _use(value) {
    const klass = require('./Element');
    return this[_values]._use = new klass(value);
  }
  get rank() {
    return this[_values].rank;
  }
  set rank(value) {
    return this[_values].rank = value;
  }
  get _rank() {
    if (!this[_values]._rank) {
      const klass = require('./Element');
      this[_values]._rank = new klass();
    }
    return this[_values]._rank;
  }
  set _rank(value) {
    const klass = require('./Element');
    return this[_values]._rank = new klass(value);
  }
  get period() {
    if (!this[_values].period) {
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
module.exports = ContactPoint;