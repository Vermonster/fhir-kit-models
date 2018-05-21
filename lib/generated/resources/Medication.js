const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class Medication extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Medication || values instanceof DomainResource) {
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

  get isBrand() {
    return this[_values].isBrand;
  }

  set isBrand(value) {
    return this[_values].isBrand = value;
  }

  get _isBrand() {
    if (!isPresent(this[_values]._isBrand)) {
      const klass = require('./Element');
      this[_values]._isBrand = new klass();
    }
    return this[_values]._isBrand;
  }

  set _isBrand(value) {
    const klass = require('./Element');
    return this[_values]._isBrand = new klass(value);
  }

  get isOverTheCounter() {
    return this[_values].isOverTheCounter;
  }

  set isOverTheCounter(value) {
    return this[_values].isOverTheCounter = value;
  }

  get _isOverTheCounter() {
    if (!isPresent(this[_values]._isOverTheCounter)) {
      const klass = require('./Element');
      this[_values]._isOverTheCounter = new klass();
    }
    return this[_values]._isOverTheCounter;
  }

  set _isOverTheCounter(value) {
    const klass = require('./Element');
    return this[_values]._isOverTheCounter = new klass(value);
  }

  get manufacturer() {
    if (!isPresent(this[_values].manufacturer)) {
      const klass = require('./Reference');
      this[_values].manufacturer = new klass();
    }
    return this[_values].manufacturer;
  }

  set manufacturer(value) {
    const klass = require('./Reference');
    return this[_values].manufacturer = new klass(value);
  }

  get form() {
    if (!isPresent(this[_values].form)) {
      const klass = require('./CodeableConcept');
      this[_values].form = new klass();
    }
    return this[_values].form;
  }

  set form(value) {
    const klass = require('./CodeableConcept');
    return this[_values].form = new klass(value);
  }

  get ingredient() {
    if (!isPresent(this[_values].ingredient)) {
      const klass = require('./Medication_Ingredient');
      this[_values].ingredient = ArrayProxy(klass);
    }
    return this[_values].ingredient;
  }

  set ingredient(value) {
    const klass = require('./Medication_Ingredient');
    this[_values].ingredient = ArrayProxy(klass);
    value.forEach(entry => this[_values].ingredient.push(entry));
    return this[_values].ingredient;
  }

  get package() {
    if (!isPresent(this[_values].package)) {
      const klass = require('./Medication_Package');
      this[_values].package = new klass();
    }
    return this[_values].package;
  }

  set package(value) {
    const klass = require('./Medication_Package');
    return this[_values].package = new klass(value);
  }

  get image() {
    if (!isPresent(this[_values].image)) {
      const klass = require('./Attachment');
      this[_values].image = ArrayProxy(klass);
    }
    return this[_values].image;
  }

  set image(value) {
    const klass = require('./Attachment');
    this[_values].image = ArrayProxy(klass);
    value.forEach(entry => this[_values].image.push(entry));
    return this[_values].image;
  }
}

module.exports = Medication;

