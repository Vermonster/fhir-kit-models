const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class Organization extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Organization || values instanceof DomainResource) {
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

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = ArrayProxy(klass);
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    this[_values].type = ArrayProxy(klass);
    value.forEach(entry => this[_values].type.push(entry));
    return this[_values].type;
  }

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }

  get alias() {
    return this[_values].alias;
  }

  set alias(value) {
    return this[_values].alias = value;
  }

  get _alias() {
    if (!isPresent(this[_values]._alias)) {
      const klass = require('./Element');
      this[_values]._alias = ArrayProxy(klass);
    }
    return this[_values]._alias;
  }

  set _alias(value) {
    const klass = require('./Element');
    this[_values]._alias = ArrayProxy(klass);
    value.forEach(entry => this[_values]._alias.push(entry));
    return this[_values]._alias;
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

  get partOf() {
    if (!isPresent(this[_values].partOf)) {
      const klass = require('./Reference');
      this[_values].partOf = new klass();
    }
    return this[_values].partOf;
  }

  set partOf(value) {
    const klass = require('./Reference');
    return this[_values].partOf = new klass(value);
  }

  get contact() {
    if (!isPresent(this[_values].contact)) {
      const klass = require('./Organization_Contact');
      this[_values].contact = ArrayProxy(klass);
    }
    return this[_values].contact;
  }

  set contact(value) {
    const klass = require('./Organization_Contact');
    this[_values].contact = ArrayProxy(klass);
    value.forEach(entry => this[_values].contact.push(entry));
    return this[_values].contact;
  }

  get endpoint() {
    if (!isPresent(this[_values].endpoint)) {
      const klass = require('./Reference');
      this[_values].endpoint = ArrayProxy(klass);
    }
    return this[_values].endpoint;
  }

  set endpoint(value) {
    const klass = require('./Reference');
    this[_values].endpoint = ArrayProxy(klass);
    value.forEach(entry => this[_values].endpoint.push(entry));
    return this[_values].endpoint;
  }
}

module.exports = Organization;

