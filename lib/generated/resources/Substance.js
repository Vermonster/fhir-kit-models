const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class Substance extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Substance || values instanceof DomainResource) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get resourceType() {
    return this[_values].resourceType;
  }

  set resourceType(value) {
    return this[_values].resourceType = value;
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
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

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = ArrayProxy(klass);
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    this[_values].category = ArrayProxy(klass);
    value.forEach(entry => this[_values].category.push(entry));
    return this[_values].category;
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
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

  get instance() {
    if (!isPresent(this[_values].instance)) {
      const klass = require('./Substance_Instance');
      this[_values].instance = ArrayProxy(klass);
    }
    return this[_values].instance;
  }

  set instance(value) {
    const klass = require('./Substance_Instance');
    this[_values].instance = ArrayProxy(klass);
    value.forEach(entry => this[_values].instance.push(entry));
    return this[_values].instance;
  }

  get ingredient() {
    if (!isPresent(this[_values].ingredient)) {
      const klass = require('./Substance_Ingredient');
      this[_values].ingredient = ArrayProxy(klass);
    }
    return this[_values].ingredient;
  }

  set ingredient(value) {
    const klass = require('./Substance_Ingredient');
    this[_values].ingredient = ArrayProxy(klass);
    value.forEach(entry => this[_values].ingredient.push(entry));
    return this[_values].ingredient;
  }
}

module.exports = Substance;

