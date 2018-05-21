const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Patient extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Patient ||
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

  get deceasedBoolean() {
    return this[_values].deceasedBoolean;
  }

  set deceasedBoolean(value) {
    return this[_values].deceasedBoolean = value;
  }

  get _deceasedBoolean() {
    if (!isPresent(this[_values]._deceasedBoolean)) {
      const klass = require('./Element');
      this[_values]._deceasedBoolean = new klass();
    }
    return this[_values]._deceasedBoolean;
  }

  set _deceasedBoolean(value) {
    const klass = require('./Element');
    return this[_values]._deceasedBoolean = new klass(value);
  }

  get deceasedDateTime() {
    return this[_values].deceasedDateTime;
  }

  set deceasedDateTime(value) {
    return this[_values].deceasedDateTime = value;
  }

  get _deceasedDateTime() {
    if (!isPresent(this[_values]._deceasedDateTime)) {
      const klass = require('./Element');
      this[_values]._deceasedDateTime = new klass();
    }
    return this[_values]._deceasedDateTime;
  }

  set _deceasedDateTime(value) {
    const klass = require('./Element');
    return this[_values]._deceasedDateTime = new klass(value);
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

  get maritalStatus() {
    if (!isPresent(this[_values].maritalStatus)) {
      const klass = require('./CodeableConcept');
      this[_values].maritalStatus = new klass();
    }
    return this[_values].maritalStatus;
  }

  set maritalStatus(value) {
    const klass = require('./CodeableConcept');
    return this[_values].maritalStatus = new klass(value);
  }

  get multipleBirthBoolean() {
    return this[_values].multipleBirthBoolean;
  }

  set multipleBirthBoolean(value) {
    return this[_values].multipleBirthBoolean = value;
  }

  get _multipleBirthBoolean() {
    if (!isPresent(this[_values]._multipleBirthBoolean)) {
      const klass = require('./Element');
      this[_values]._multipleBirthBoolean = new klass();
    }
    return this[_values]._multipleBirthBoolean;
  }

  set _multipleBirthBoolean(value) {
    const klass = require('./Element');
    return this[_values]._multipleBirthBoolean = new klass(value);
  }

  get multipleBirthInteger() {
    return this[_values].multipleBirthInteger;
  }

  set multipleBirthInteger(value) {
    return this[_values].multipleBirthInteger = value;
  }

  get _multipleBirthInteger() {
    if (!isPresent(this[_values]._multipleBirthInteger)) {
      const klass = require('./Element');
      this[_values]._multipleBirthInteger = new klass();
    }
    return this[_values]._multipleBirthInteger;
  }

  set _multipleBirthInteger(value) {
    const klass = require('./Element');
    return this[_values]._multipleBirthInteger = new klass(value);
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

  get contact() {
    if (!isPresent(this[_values].contact)) {
      const klass = require('./PatientContact');
      this[_values].contact = ArrayProxy(klass);
    }
    return this[_values].contact;
  }

  set contact(value) {
    const klass = require('./PatientContact');
    this[_values].contact = ArrayProxy(klass);
    value.forEach(entry => this[_values].contact.push(entry));
    return this[_values].contact;
  }

  get animal() {
    if (!isPresent(this[_values].animal)) {
      const klass = require('./PatientAnimal');
      this[_values].animal = new klass();
    }
    return this[_values].animal;
  }

  set animal(value) {
    const klass = require('./PatientAnimal');
    return this[_values].animal = new klass(value);
  }

  get communication() {
    if (!isPresent(this[_values].communication)) {
      const klass = require('./PatientCommunication');
      this[_values].communication = ArrayProxy(klass);
    }
    return this[_values].communication;
  }

  set communication(value) {
    const klass = require('./PatientCommunication');
    this[_values].communication = ArrayProxy(klass);
    value.forEach(entry => this[_values].communication.push(entry));
    return this[_values].communication;
  }

  get generalPractitioner() {
    if (!isPresent(this[_values].generalPractitioner)) {
      const klass = require('./Reference');
      this[_values].generalPractitioner = ArrayProxy(klass);
    }
    return this[_values].generalPractitioner;
  }

  set generalPractitioner(value) {
    const klass = require('./Reference');
    this[_values].generalPractitioner = ArrayProxy(klass);
    value.forEach(entry => this[_values].generalPractitioner.push(entry));
    return this[_values].generalPractitioner;
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

  get link() {
    if (!isPresent(this[_values].link)) {
      const klass = require('./PatientLink');
      this[_values].link = ArrayProxy(klass);
    }
    return this[_values].link;
  }

  set link(value) {
    const klass = require('./PatientLink');
    this[_values].link = ArrayProxy(klass);
    value.forEach(entry => this[_values].link.push(entry));
    return this[_values].link;
  }
}

module.exports = Patient;

