const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Specimen_Container extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Specimen_Container || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get identifier() {
    if (!this[_values].identifier) {
      const klass = require('./Identifier');
      this[_values].identifier = ArrayProxy(klass);
    }
    return this[_values].identifier;
  }
  set identifier(value) {
    const klass = require('./Identifier');
    this[_values].identifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].identifier.push(entry));
    return this[_values].identifier;
  }
  get description() {
    return this[_values].description;
  }
  set description(value) {
    return this[_values].description = value;
  }
  get _description() {
    if (!this[_values]._description) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }
  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
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
  get capacity() {
    if (!this[_values].capacity) {
      const klass = require('./Quantity');
      this[_values].capacity = new klass();
    }
    return this[_values].capacity;
  }
  set capacity(value) {
    const klass = require('./Quantity');
    return this[_values].capacity = new klass(value);
  }
  get specimenQuantity() {
    if (!this[_values].specimenQuantity) {
      const klass = require('./Quantity');
      this[_values].specimenQuantity = new klass();
    }
    return this[_values].specimenQuantity;
  }
  set specimenQuantity(value) {
    const klass = require('./Quantity');
    return this[_values].specimenQuantity = new klass(value);
  }
  get additiveCodeableConcept() {
    if (!this[_values].additiveCodeableConcept) {
      const klass = require('./CodeableConcept');
      this[_values].additiveCodeableConcept = new klass();
    }
    return this[_values].additiveCodeableConcept;
  }
  set additiveCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].additiveCodeableConcept = new klass(value);
  }
  get additiveReference() {
    if (!this[_values].additiveReference) {
      const klass = require('./Reference');
      this[_values].additiveReference = new klass();
    }
    return this[_values].additiveReference;
  }
  set additiveReference(value) {
    const klass = require('./Reference');
    return this[_values].additiveReference = new klass(value);
  }
}
module.exports = Specimen_Container;