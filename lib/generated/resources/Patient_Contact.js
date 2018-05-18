const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Patient_Contact extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Patient_Contact || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get relationship() {
    if (!this[_values].relationship) {
      const klass = require('./CodeableConcept');
      this[_values].relationship = ArrayProxy(klass);
    }
    return this[_values].relationship;
  }
  set relationship(value) {
    const klass = require('./CodeableConcept');
    this[_values].relationship = ArrayProxy(klass);
    value.forEach(entry => this[_values].relationship.push(entry));
    return this[_values].relationship;
  }
  get name() {
    if (!this[_values].name) {
      const klass = require('./HumanName');
      this[_values].name = new klass();
    }
    return this[_values].name;
  }
  set name(value) {
    const klass = require('./HumanName');
    return this[_values].name = new klass(value);
  }
  get telecom() {
    if (!this[_values].telecom) {
      const klass = require('./ContactPoint');
      this[_values].telecom = ArrayProxy(klass);
    }
    return this[_values].telecom;
  }
  set telecom(value) {
    const klass = require('./ContactPoint');
    this[_values].telecom = ArrayProxy(klass);
    value.forEach(entry => this[_values].telecom.push(entry));
    return this[_values].telecom;
  }
  get address() {
    if (!this[_values].address) {
      const klass = require('./Address');
      this[_values].address = new klass();
    }
    return this[_values].address;
  }
  set address(value) {
    const klass = require('./Address');
    return this[_values].address = new klass(value);
  }
  get gender() {
    return this[_values].gender;
  }
  set gender(value) {
    return this[_values].gender = value;
  }
  get _gender() {
    if (!this[_values]._gender) {
      const klass = require('./Element');
      this[_values]._gender = new klass();
    }
    return this[_values]._gender;
  }
  set _gender(value) {
    const klass = require('./Element');
    return this[_values]._gender = new klass(value);
  }
  get organization() {
    if (!this[_values].organization) {
      const klass = require('./Reference');
      this[_values].organization = new klass();
    }
    return this[_values].organization;
  }
  set organization(value) {
    const klass = require('./Reference');
    return this[_values].organization = new klass(value);
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
module.exports = Patient_Contact;