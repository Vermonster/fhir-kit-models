const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class PractitionerRole extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PractitionerRole || values instanceof DomainResource) {
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

  get practitioner() {
    if (!isPresent(this[_values].practitioner)) {
      const klass = require('./Reference');
      this[_values].practitioner = new klass();
    }
    return this[_values].practitioner;
  }

  set practitioner(value) {
    const klass = require('./Reference');
    return this[_values].practitioner = new klass(value);
  }

  get organization() {
    if (!isPresent(this[_values].organization)) {
      const klass = require('./Reference');
      this[_values].organization = new klass();
    }
    return this[_values].organization;
  }

  set organization(value) {
    const klass = require('./Reference');
    return this[_values].organization = new klass(value);
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = ArrayProxy(klass);
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    this[_values].code = ArrayProxy(klass);
    value.forEach(entry => this[_values].code.push(entry));
    return this[_values].code;
  }

  get specialty() {
    if (!isPresent(this[_values].specialty)) {
      const klass = require('./CodeableConcept');
      this[_values].specialty = ArrayProxy(klass);
    }
    return this[_values].specialty;
  }

  set specialty(value) {
    const klass = require('./CodeableConcept');
    this[_values].specialty = ArrayProxy(klass);
    value.forEach(entry => this[_values].specialty.push(entry));
    return this[_values].specialty;
  }

  get location() {
    if (!isPresent(this[_values].location)) {
      const klass = require('./Reference');
      this[_values].location = ArrayProxy(klass);
    }
    return this[_values].location;
  }

  set location(value) {
    const klass = require('./Reference');
    this[_values].location = ArrayProxy(klass);
    value.forEach(entry => this[_values].location.push(entry));
    return this[_values].location;
  }

  get healthcareService() {
    if (!isPresent(this[_values].healthcareService)) {
      const klass = require('./Reference');
      this[_values].healthcareService = ArrayProxy(klass);
    }
    return this[_values].healthcareService;
  }

  set healthcareService(value) {
    const klass = require('./Reference');
    this[_values].healthcareService = ArrayProxy(klass);
    value.forEach(entry => this[_values].healthcareService.push(entry));
    return this[_values].healthcareService;
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

  get availableTime() {
    if (!isPresent(this[_values].availableTime)) {
      const klass = require('./PractitionerRole_AvailableTime');
      this[_values].availableTime = ArrayProxy(klass);
    }
    return this[_values].availableTime;
  }

  set availableTime(value) {
    const klass = require('./PractitionerRole_AvailableTime');
    this[_values].availableTime = ArrayProxy(klass);
    value.forEach(entry => this[_values].availableTime.push(entry));
    return this[_values].availableTime;
  }

  get notAvailable() {
    if (!isPresent(this[_values].notAvailable)) {
      const klass = require('./PractitionerRole_NotAvailable');
      this[_values].notAvailable = ArrayProxy(klass);
    }
    return this[_values].notAvailable;
  }

  set notAvailable(value) {
    const klass = require('./PractitionerRole_NotAvailable');
    this[_values].notAvailable = ArrayProxy(klass);
    value.forEach(entry => this[_values].notAvailable.push(entry));
    return this[_values].notAvailable;
  }

  get availabilityExceptions() {
    return this[_values].availabilityExceptions;
  }

  set availabilityExceptions(value) {
    return this[_values].availabilityExceptions = value;
  }

  get _availabilityExceptions() {
    if (!isPresent(this[_values]._availabilityExceptions)) {
      const klass = require('./Element');
      this[_values]._availabilityExceptions = new klass();
    }
    return this[_values]._availabilityExceptions;
  }

  set _availabilityExceptions(value) {
    const klass = require('./Element');
    return this[_values]._availabilityExceptions = new klass(value);
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

module.exports = PractitionerRole;

