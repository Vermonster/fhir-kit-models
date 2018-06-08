const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Practitioner extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'Practitioner';
    if (values instanceof Practitioner ||
      values instanceof DomainResource) {
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

  get active() {
    return this[_values].active;
  }

  set active(value) {
    return this[_values].active = value;
  }

  get _active() {
    if (!isPresent(this[_values]._active)) {
      const klass = require('./Element');
      this[_values]._active = new klass();
    }
    return this[_values]._active;
  }

  set _active(value) {
    const klass = require('./Element');
    return this[_values]._active = new klass(value);
  }

  get name() {
    if (!isPresent(this[_values].name)) {
      const klass = require('./HumanName');
      this[_values].name = ArrayProxy(klass);
    }
    return this[_values].name;
  }

  set name(value) {
    const klass = require('./HumanName');
    this[_values].name = ArrayProxy(klass);
    value.forEach(entry => this[_values].name.push(entry));
    return this[_values].name;
  }

  get telecom() {
    if (!isPresent(this[_values].telecom)) {
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
    if (!isPresent(this[_values].address)) {
      const klass = require('./Address');
      this[_values].address = ArrayProxy(klass);
    }
    return this[_values].address;
  }

  set address(value) {
    const klass = require('./Address');
    this[_values].address = ArrayProxy(klass);
    value.forEach(entry => this[_values].address.push(entry));
    return this[_values].address;
  }

  get gender() {
    return this[_values].gender;
  }

  set gender(value) {
    return this[_values].gender = value;
  }

  get _gender() {
    if (!isPresent(this[_values]._gender)) {
      const klass = require('./Element');
      this[_values]._gender = new klass();
    }
    return this[_values]._gender;
  }

  set _gender(value) {
    const klass = require('./Element');
    return this[_values]._gender = new klass(value);
  }

  get birthDate() {
    return this[_values].birthDate;
  }

  set birthDate(value) {
    return this[_values].birthDate = value;
  }

  get _birthDate() {
    if (!isPresent(this[_values]._birthDate)) {
      const klass = require('./Element');
      this[_values]._birthDate = new klass();
    }
    return this[_values]._birthDate;
  }

  set _birthDate(value) {
    const klass = require('./Element');
    return this[_values]._birthDate = new klass(value);
  }

  get photo() {
    if (!isPresent(this[_values].photo)) {
      const klass = require('./Attachment');
      this[_values].photo = ArrayProxy(klass);
    }
    return this[_values].photo;
  }

  set photo(value) {
    const klass = require('./Attachment');
    this[_values].photo = ArrayProxy(klass);
    value.forEach(entry => this[_values].photo.push(entry));
    return this[_values].photo;
  }

  get qualification() {
    if (!isPresent(this[_values].qualification)) {
      const klass = require('./PractitionerQualification');
      this[_values].qualification = ArrayProxy(klass);
    }
    return this[_values].qualification;
  }

  set qualification(value) {
    const klass = require('./PractitionerQualification');
    this[_values].qualification = ArrayProxy(klass);
    value.forEach(entry => this[_values].qualification.push(entry));
    return this[_values].qualification;
  }

  get communication() {
    if (!isPresent(this[_values].communication)) {
      const klass = require('./CodeableConcept');
      this[_values].communication = ArrayProxy(klass);
    }
    return this[_values].communication;
  }

  set communication(value) {
    const klass = require('./CodeableConcept');
    this[_values].communication = ArrayProxy(klass);
    value.forEach(entry => this[_values].communication.push(entry));
    return this[_values].communication;
  }
}

module.exports = Practitioner;

