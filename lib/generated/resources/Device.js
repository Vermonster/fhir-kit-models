const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class Device extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Device || values instanceof DomainResource) {
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
  get udi() {
    if (!this[_values].udi) {
      const klass = require('./Device_Udi');
      this[_values].udi = new klass();
    }
    return this[_values].udi;
  }
  set udi(value) {
    const klass = require('./Device_Udi');
    return this[_values].udi = new klass(value);
  }
  get status() {
    return this[_values].status;
  }
  set status(value) {
    return this[_values].status = value;
  }
  get _status() {
    if (!this[_values]._status) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }
  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
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
  get lotNumber() {
    return this[_values].lotNumber;
  }
  set lotNumber(value) {
    return this[_values].lotNumber = value;
  }
  get _lotNumber() {
    if (!this[_values]._lotNumber) {
      const klass = require('./Element');
      this[_values]._lotNumber = new klass();
    }
    return this[_values]._lotNumber;
  }
  set _lotNumber(value) {
    const klass = require('./Element');
    return this[_values]._lotNumber = new klass(value);
  }
  get manufacturer() {
    return this[_values].manufacturer;
  }
  set manufacturer(value) {
    return this[_values].manufacturer = value;
  }
  get _manufacturer() {
    if (!this[_values]._manufacturer) {
      const klass = require('./Element');
      this[_values]._manufacturer = new klass();
    }
    return this[_values]._manufacturer;
  }
  set _manufacturer(value) {
    const klass = require('./Element');
    return this[_values]._manufacturer = new klass(value);
  }
  get manufactureDate() {
    return this[_values].manufactureDate;
  }
  set manufactureDate(value) {
    return this[_values].manufactureDate = value;
  }
  get _manufactureDate() {
    if (!this[_values]._manufactureDate) {
      const klass = require('./Element');
      this[_values]._manufactureDate = new klass();
    }
    return this[_values]._manufactureDate;
  }
  set _manufactureDate(value) {
    const klass = require('./Element');
    return this[_values]._manufactureDate = new klass(value);
  }
  get expirationDate() {
    return this[_values].expirationDate;
  }
  set expirationDate(value) {
    return this[_values].expirationDate = value;
  }
  get _expirationDate() {
    if (!this[_values]._expirationDate) {
      const klass = require('./Element');
      this[_values]._expirationDate = new klass();
    }
    return this[_values]._expirationDate;
  }
  set _expirationDate(value) {
    const klass = require('./Element');
    return this[_values]._expirationDate = new klass(value);
  }
  get model() {
    return this[_values].model;
  }
  set model(value) {
    return this[_values].model = value;
  }
  get _model() {
    if (!this[_values]._model) {
      const klass = require('./Element');
      this[_values]._model = new klass();
    }
    return this[_values]._model;
  }
  set _model(value) {
    const klass = require('./Element');
    return this[_values]._model = new klass(value);
  }
  get version() {
    return this[_values].version;
  }
  set version(value) {
    return this[_values].version = value;
  }
  get _version() {
    if (!this[_values]._version) {
      const klass = require('./Element');
      this[_values]._version = new klass();
    }
    return this[_values]._version;
  }
  set _version(value) {
    const klass = require('./Element');
    return this[_values]._version = new klass(value);
  }
  get patient() {
    if (!this[_values].patient) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }
  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }
  get owner() {
    if (!this[_values].owner) {
      const klass = require('./Reference');
      this[_values].owner = new klass();
    }
    return this[_values].owner;
  }
  set owner(value) {
    const klass = require('./Reference');
    return this[_values].owner = new klass(value);
  }
  get contact() {
    if (!this[_values].contact) {
      const klass = require('./ContactPoint');
      this[_values].contact = ArrayProxy(klass);
    }
    return this[_values].contact;
  }
  set contact(value) {
    const klass = require('./ContactPoint');
    this[_values].contact = ArrayProxy(klass);
    value.forEach(entry => this[_values].contact.push(entry));
    return this[_values].contact;
  }
  get location() {
    if (!this[_values].location) {
      const klass = require('./Reference');
      this[_values].location = new klass();
    }
    return this[_values].location;
  }
  set location(value) {
    const klass = require('./Reference');
    return this[_values].location = new klass(value);
  }
  get url() {
    return this[_values].url;
  }
  set url(value) {
    return this[_values].url = value;
  }
  get _url() {
    if (!this[_values]._url) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }
  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
  }
  get note() {
    if (!this[_values].note) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }
  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }
  get safety() {
    if (!this[_values].safety) {
      const klass = require('./CodeableConcept');
      this[_values].safety = ArrayProxy(klass);
    }
    return this[_values].safety;
  }
  set safety(value) {
    const klass = require('./CodeableConcept');
    this[_values].safety = ArrayProxy(klass);
    value.forEach(entry => this[_values].safety.push(entry));
    return this[_values].safety;
  }
}
module.exports = Device;