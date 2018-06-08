const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Location extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'Location';
    if (values instanceof Location ||
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

  get operationalStatus() {
    if (!isPresent(this[_values].operationalStatus)) {
      const klass = require('./Coding');
      this[_values].operationalStatus = new klass();
    }
    return this[_values].operationalStatus;
  }

  set operationalStatus(value) {
    const klass = require('./Coding');
    return this[_values].operationalStatus = new klass(value);
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

  get mode() {
    return this[_values].mode;
  }

  set mode(value) {
    return this[_values].mode = value;
  }

  get _mode() {
    if (!isPresent(this[_values]._mode)) {
      const klass = require('./Element');
      this[_values]._mode = new klass();
    }
    return this[_values]._mode;
  }

  set _mode(value) {
    const klass = require('./Element');
    return this[_values]._mode = new klass(value);
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
      this[_values].address = new klass();
    }
    return this[_values].address;
  }

  set address(value) {
    const klass = require('./Address');
    return this[_values].address = new klass(value);
  }

  get physicalType() {
    if (!isPresent(this[_values].physicalType)) {
      const klass = require('./CodeableConcept');
      this[_values].physicalType = new klass();
    }
    return this[_values].physicalType;
  }

  set physicalType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].physicalType = new klass(value);
  }

  get position() {
    if (!isPresent(this[_values].position)) {
      const klass = require('./LocationPosition');
      this[_values].position = new klass();
    }
    return this[_values].position;
  }

  set position(value) {
    const klass = require('./LocationPosition');
    return this[_values].position = new klass(value);
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

module.exports = Location;
