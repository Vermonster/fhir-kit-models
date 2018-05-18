const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Element = require('./Element');
class Identifier extends Element {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Identifier || values instanceof Element) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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
  get type() {
    if (!this[_values].type) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }
  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
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
  get assigner() {
    if (!this[_values].assigner) {
      const klass = require('./Reference');
      this[_values].assigner = new klass();
    }
    return this[_values].assigner;
  }
  set assigner(value) {
    const klass = require('./Reference');
    return this[_values].assigner = new klass(value);
  }
}
module.exports = Identifier;