const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ConsentExcept extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ConsentExcept || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
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

  get actor() {
    if (!isPresent(this[_values].actor)) {
      const klass = require('./ConsentActor1');
      this[_values].actor = ArrayProxy(klass);
    }
    return this[_values].actor;
  }

  set actor(value) {
    const klass = require('./ConsentActor1');
    this[_values].actor = ArrayProxy(klass);
    value.forEach(entry => this[_values].actor.push(entry));
    return this[_values].actor;
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./CodeableConcept');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./CodeableConcept');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }

  get securityLabel() {
    if (!isPresent(this[_values].securityLabel)) {
      const klass = require('./Coding');
      this[_values].securityLabel = ArrayProxy(klass);
    }
    return this[_values].securityLabel;
  }

  set securityLabel(value) {
    const klass = require('./Coding');
    this[_values].securityLabel = ArrayProxy(klass);
    value.forEach(entry => this[_values].securityLabel.push(entry));
    return this[_values].securityLabel;
  }

  get purpose() {
    if (!isPresent(this[_values].purpose)) {
      const klass = require('./Coding');
      this[_values].purpose = ArrayProxy(klass);
    }
    return this[_values].purpose;
  }

  set purpose(value) {
    const klass = require('./Coding');
    this[_values].purpose = ArrayProxy(klass);
    value.forEach(entry => this[_values].purpose.push(entry));
    return this[_values].purpose;
  }

  get class() {
    if (!isPresent(this[_values].class)) {
      const klass = require('./Coding');
      this[_values].class = ArrayProxy(klass);
    }
    return this[_values].class;
  }

  set class(value) {
    const klass = require('./Coding');
    this[_values].class = ArrayProxy(klass);
    value.forEach(entry => this[_values].class.push(entry));
    return this[_values].class;
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./Coding');
      this[_values].code = ArrayProxy(klass);
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./Coding');
    this[_values].code = ArrayProxy(klass);
    value.forEach(entry => this[_values].code.push(entry));
    return this[_values].code;
  }

  get dataPeriod() {
    if (!isPresent(this[_values].dataPeriod)) {
      const klass = require('./Period');
      this[_values].dataPeriod = new klass();
    }
    return this[_values].dataPeriod;
  }

  set dataPeriod(value) {
    const klass = require('./Period');
    return this[_values].dataPeriod = new klass(value);
  }

  get data() {
    if (!isPresent(this[_values].data)) {
      const klass = require('./ConsentData1');
      this[_values].data = ArrayProxy(klass);
    }
    return this[_values].data;
  }

  set data(value) {
    const klass = require('./ConsentData1');
    this[_values].data = ArrayProxy(klass);
    value.forEach(entry => this[_values].data.push(entry));
    return this[_values].data;
  }
}

module.exports = ConsentExcept;

