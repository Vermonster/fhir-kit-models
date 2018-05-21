const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Person extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Person || values instanceof DomainResource) {
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

  get photo() {
    if (!isPresent(this[_values].photo)) {
      const klass = require('./Attachment');
      this[_values].photo = new klass();
    }
    return this[_values].photo;
  }

  set photo(value) {
    const klass = require('./Attachment');
    return this[_values].photo = new klass(value);
  }

  get managingOrganization() {
    if (!isPresent(this[_values].managingOrganization)) {
      const klass = require('./Reference');
      this[_values].managingOrganization = new klass();
    }
    return this[_values].managingOrganization;
  }

  set managingOrganization(value) {
    const klass = require('./Reference');
    return this[_values].managingOrganization = new klass(value);
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

  get link() {
    if (!isPresent(this[_values].link)) {
      const klass = require('./Person_Link');
      this[_values].link = ArrayProxy(klass);
    }
    return this[_values].link;
  }

  set link(value) {
    const klass = require('./Person_Link');
    this[_values].link = ArrayProxy(klass);
    value.forEach(entry => this[_values].link.push(entry));
    return this[_values].link;
  }
}

module.exports = Person;

