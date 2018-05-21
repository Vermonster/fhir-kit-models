const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Endpoint extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Endpoint ||
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

  get connectionType() {
    if (!isPresent(this[_values].connectionType)) {
      const klass = require('./Coding');
      this[_values].connectionType = new klass();
    }
    return this[_values].connectionType;
  }

  set connectionType(value) {
    const klass = require('./Coding');
    return this[_values].connectionType = new klass(value);
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

  get contact() {
    if (!isPresent(this[_values].contact)) {
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

  get payloadType() {
    if (!isPresent(this[_values].payloadType)) {
      const klass = require('./CodeableConcept');
      this[_values].payloadType = ArrayProxy(klass);
    }
    return this[_values].payloadType;
  }

  set payloadType(value) {
    const klass = require('./CodeableConcept');
    this[_values].payloadType = ArrayProxy(klass);
    value.forEach(entry => this[_values].payloadType.push(entry));
    return this[_values].payloadType;
  }

  get payloadMimeType() {
    return this[_values].payloadMimeType;
  }

  set payloadMimeType(value) {
    return this[_values].payloadMimeType = value;
  }

  get _payloadMimeType() {
    if (!isPresent(this[_values]._payloadMimeType)) {
      const klass = require('./Element');
      this[_values]._payloadMimeType = ArrayProxy(klass);
    }
    return this[_values]._payloadMimeType;
  }

  set _payloadMimeType(value) {
    const klass = require('./Element');
    this[_values]._payloadMimeType = ArrayProxy(klass);
    value.forEach(entry => this[_values]._payloadMimeType.push(entry));
    return this[_values]._payloadMimeType;
  }

  get address() {
    return this[_values].address;
  }

  set address(value) {
    return this[_values].address = value;
  }

  get _address() {
    if (!isPresent(this[_values]._address)) {
      const klass = require('./Element');
      this[_values]._address = new klass();
    }
    return this[_values]._address;
  }

  set _address(value) {
    const klass = require('./Element');
    return this[_values]._address = new klass(value);
  }

  get header() {
    return this[_values].header;
  }

  set header(value) {
    return this[_values].header = value;
  }

  get _header() {
    if (!isPresent(this[_values]._header)) {
      const klass = require('./Element');
      this[_values]._header = ArrayProxy(klass);
    }
    return this[_values]._header;
  }

  set _header(value) {
    const klass = require('./Element');
    this[_values]._header = ArrayProxy(klass);
    value.forEach(entry => this[_values]._header.push(entry));
    return this[_values]._header;
  }
}

module.exports = Endpoint;

