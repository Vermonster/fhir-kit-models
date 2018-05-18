const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class HealthcareService extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof HealthcareService || values instanceof DomainResource) {
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
  get active() {
    return this[_values].active;
  }
  set active(value) {
    return this[_values].active = value;
  }
  get _active() {
    if (!this[_values]._active) {
      const klass = require('./Element');
      this[_values]._active = new klass();
    }
    return this[_values]._active;
  }
  set _active(value) {
    const klass = require('./Element');
    return this[_values]._active = new klass(value);
  }
  get providedBy() {
    if (!this[_values].providedBy) {
      const klass = require('./Reference');
      this[_values].providedBy = new klass();
    }
    return this[_values].providedBy;
  }
  set providedBy(value) {
    const klass = require('./Reference');
    return this[_values].providedBy = new klass(value);
  }
  get category() {
    if (!this[_values].category) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }
  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }
  get type() {
    if (!this[_values].type) {
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
  get specialty() {
    if (!this[_values].specialty) {
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
    if (!this[_values].location) {
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
  get name() {
    return this[_values].name;
  }
  set name(value) {
    return this[_values].name = value;
  }
  get _name() {
    if (!this[_values]._name) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }
  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }
  get comment() {
    return this[_values].comment;
  }
  set comment(value) {
    return this[_values].comment = value;
  }
  get _comment() {
    if (!this[_values]._comment) {
      const klass = require('./Element');
      this[_values]._comment = new klass();
    }
    return this[_values]._comment;
  }
  set _comment(value) {
    const klass = require('./Element');
    return this[_values]._comment = new klass(value);
  }
  get extraDetails() {
    return this[_values].extraDetails;
  }
  set extraDetails(value) {
    return this[_values].extraDetails = value;
  }
  get _extraDetails() {
    if (!this[_values]._extraDetails) {
      const klass = require('./Element');
      this[_values]._extraDetails = new klass();
    }
    return this[_values]._extraDetails;
  }
  set _extraDetails(value) {
    const klass = require('./Element');
    return this[_values]._extraDetails = new klass(value);
  }
  get photo() {
    if (!this[_values].photo) {
      const klass = require('./Attachment');
      this[_values].photo = new klass();
    }
    return this[_values].photo;
  }
  set photo(value) {
    const klass = require('./Attachment');
    return this[_values].photo = new klass(value);
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
  get coverageArea() {
    if (!this[_values].coverageArea) {
      const klass = require('./Reference');
      this[_values].coverageArea = ArrayProxy(klass);
    }
    return this[_values].coverageArea;
  }
  set coverageArea(value) {
    const klass = require('./Reference');
    this[_values].coverageArea = ArrayProxy(klass);
    value.forEach(entry => this[_values].coverageArea.push(entry));
    return this[_values].coverageArea;
  }
  get serviceProvisionCode() {
    if (!this[_values].serviceProvisionCode) {
      const klass = require('./CodeableConcept');
      this[_values].serviceProvisionCode = ArrayProxy(klass);
    }
    return this[_values].serviceProvisionCode;
  }
  set serviceProvisionCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].serviceProvisionCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].serviceProvisionCode.push(entry));
    return this[_values].serviceProvisionCode;
  }
  get eligibility() {
    if (!this[_values].eligibility) {
      const klass = require('./CodeableConcept');
      this[_values].eligibility = new klass();
    }
    return this[_values].eligibility;
  }
  set eligibility(value) {
    const klass = require('./CodeableConcept');
    return this[_values].eligibility = new klass(value);
  }
  get eligibilityNote() {
    return this[_values].eligibilityNote;
  }
  set eligibilityNote(value) {
    return this[_values].eligibilityNote = value;
  }
  get _eligibilityNote() {
    if (!this[_values]._eligibilityNote) {
      const klass = require('./Element');
      this[_values]._eligibilityNote = new klass();
    }
    return this[_values]._eligibilityNote;
  }
  set _eligibilityNote(value) {
    const klass = require('./Element');
    return this[_values]._eligibilityNote = new klass(value);
  }
  get programName() {
    return this[_values].programName;
  }
  set programName(value) {
    return this[_values].programName = value;
  }
  get _programName() {
    if (!this[_values]._programName) {
      const klass = require('./Element');
      this[_values]._programName = ArrayProxy(klass);
    }
    return this[_values]._programName;
  }
  set _programName(value) {
    const klass = require('./Element');
    this[_values]._programName = ArrayProxy(klass);
    value.forEach(entry => this[_values]._programName.push(entry));
    return this[_values]._programName;
  }
  get characteristic() {
    if (!this[_values].characteristic) {
      const klass = require('./CodeableConcept');
      this[_values].characteristic = ArrayProxy(klass);
    }
    return this[_values].characteristic;
  }
  set characteristic(value) {
    const klass = require('./CodeableConcept');
    this[_values].characteristic = ArrayProxy(klass);
    value.forEach(entry => this[_values].characteristic.push(entry));
    return this[_values].characteristic;
  }
  get referralMethod() {
    if (!this[_values].referralMethod) {
      const klass = require('./CodeableConcept');
      this[_values].referralMethod = ArrayProxy(klass);
    }
    return this[_values].referralMethod;
  }
  set referralMethod(value) {
    const klass = require('./CodeableConcept');
    this[_values].referralMethod = ArrayProxy(klass);
    value.forEach(entry => this[_values].referralMethod.push(entry));
    return this[_values].referralMethod;
  }
  get appointmentRequired() {
    return this[_values].appointmentRequired;
  }
  set appointmentRequired(value) {
    return this[_values].appointmentRequired = value;
  }
  get _appointmentRequired() {
    if (!this[_values]._appointmentRequired) {
      const klass = require('./Element');
      this[_values]._appointmentRequired = new klass();
    }
    return this[_values]._appointmentRequired;
  }
  set _appointmentRequired(value) {
    const klass = require('./Element');
    return this[_values]._appointmentRequired = new klass(value);
  }
  get availableTime() {
    if (!this[_values].availableTime) {
      const klass = require('./HealthcareService_AvailableTime');
      this[_values].availableTime = ArrayProxy(klass);
    }
    return this[_values].availableTime;
  }
  set availableTime(value) {
    const klass = require('./HealthcareService_AvailableTime');
    this[_values].availableTime = ArrayProxy(klass);
    value.forEach(entry => this[_values].availableTime.push(entry));
    return this[_values].availableTime;
  }
  get notAvailable() {
    if (!this[_values].notAvailable) {
      const klass = require('./HealthcareService_NotAvailable');
      this[_values].notAvailable = ArrayProxy(klass);
    }
    return this[_values].notAvailable;
  }
  set notAvailable(value) {
    const klass = require('./HealthcareService_NotAvailable');
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
    if (!this[_values]._availabilityExceptions) {
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
    if (!this[_values].endpoint) {
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
module.exports = HealthcareService;