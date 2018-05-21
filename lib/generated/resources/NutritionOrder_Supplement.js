const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const BackboneElement = require('./BackboneElement');

class NutritionOrder_Supplement extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NutritionOrder_Supplement || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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

  get productName() {
    return this[_values].productName;
  }

  set productName(value) {
    return this[_values].productName = value;
  }

  get _productName() {
    if (!isPresent(this[_values]._productName)) {
      const klass = require('./Element');
      this[_values]._productName = new klass();
    }
    return this[_values]._productName;
  }

  set _productName(value) {
    const klass = require('./Element');
    return this[_values]._productName = new klass(value);
  }

  get schedule() {
    if (!isPresent(this[_values].schedule)) {
      const klass = require('./Timing');
      this[_values].schedule = ArrayProxy(klass);
    }
    return this[_values].schedule;
  }

  set schedule(value) {
    const klass = require('./Timing');
    this[_values].schedule = ArrayProxy(klass);
    value.forEach(entry => this[_values].schedule.push(entry));
    return this[_values].schedule;
  }

  get quantity() {
    if (!isPresent(this[_values].quantity)) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }

  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }

  get instruction() {
    return this[_values].instruction;
  }

  set instruction(value) {
    return this[_values].instruction = value;
  }

  get _instruction() {
    if (!isPresent(this[_values]._instruction)) {
      const klass = require('./Element');
      this[_values]._instruction = new klass();
    }
    return this[_values]._instruction;
  }

  set _instruction(value) {
    const klass = require('./Element');
    return this[_values]._instruction = new klass(value);
  }
}

module.exports = NutritionOrder_Supplement;

