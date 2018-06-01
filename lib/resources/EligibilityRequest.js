const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class EligibilityRequest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'EligibilityRequest';
    if (values instanceof EligibilityRequest ||
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

  get priority() {
    if (!isPresent(this[_values].priority)) {
      const klass = require('./CodeableConcept');
      this[_values].priority = new klass();
    }
    return this[_values].priority;
  }

  set priority(value) {
    const klass = require('./CodeableConcept');
    return this[_values].priority = new klass(value);
  }

  get patient() {
    if (!isPresent(this[_values].patient)) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }

  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }

  get servicedDate() {
    return this[_values].servicedDate;
  }

  set servicedDate(value) {
    return this[_values].servicedDate = value;
  }

  get _servicedDate() {
    if (!isPresent(this[_values]._servicedDate)) {
      const klass = require('./Element');
      this[_values]._servicedDate = new klass();
    }
    return this[_values]._servicedDate;
  }

  set _servicedDate(value) {
    const klass = require('./Element');
    return this[_values]._servicedDate = new klass(value);
  }

  get servicedPeriod() {
    if (!isPresent(this[_values].servicedPeriod)) {
      const klass = require('./Period');
      this[_values].servicedPeriod = new klass();
    }
    return this[_values].servicedPeriod;
  }

  set servicedPeriod(value) {
    const klass = require('./Period');
    return this[_values].servicedPeriod = new klass(value);
  }

  get created() {
    return this[_values].created;
  }

  set created(value) {
    return this[_values].created = value;
  }

  get _created() {
    if (!isPresent(this[_values]._created)) {
      const klass = require('./Element');
      this[_values]._created = new klass();
    }
    return this[_values]._created;
  }

  set _created(value) {
    const klass = require('./Element');
    return this[_values]._created = new klass(value);
  }

  get enterer() {
    if (!isPresent(this[_values].enterer)) {
      const klass = require('./Reference');
      this[_values].enterer = new klass();
    }
    return this[_values].enterer;
  }

  set enterer(value) {
    const klass = require('./Reference');
    return this[_values].enterer = new klass(value);
  }

  get provider() {
    if (!isPresent(this[_values].provider)) {
      const klass = require('./Reference');
      this[_values].provider = new klass();
    }
    return this[_values].provider;
  }

  set provider(value) {
    const klass = require('./Reference');
    return this[_values].provider = new klass(value);
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

  get insurer() {
    if (!isPresent(this[_values].insurer)) {
      const klass = require('./Reference');
      this[_values].insurer = new klass();
    }
    return this[_values].insurer;
  }

  set insurer(value) {
    const klass = require('./Reference');
    return this[_values].insurer = new klass(value);
  }

  get facility() {
    if (!isPresent(this[_values].facility)) {
      const klass = require('./Reference');
      this[_values].facility = new klass();
    }
    return this[_values].facility;
  }

  set facility(value) {
    const klass = require('./Reference');
    return this[_values].facility = new klass(value);
  }

  get coverage() {
    if (!isPresent(this[_values].coverage)) {
      const klass = require('./Reference');
      this[_values].coverage = new klass();
    }
    return this[_values].coverage;
  }

  set coverage(value) {
    const klass = require('./Reference');
    return this[_values].coverage = new klass(value);
  }

  get businessArrangement() {
    return this[_values].businessArrangement;
  }

  set businessArrangement(value) {
    return this[_values].businessArrangement = value;
  }

  get _businessArrangement() {
    if (!isPresent(this[_values]._businessArrangement)) {
      const klass = require('./Element');
      this[_values]._businessArrangement = new klass();
    }
    return this[_values]._businessArrangement;
  }

  set _businessArrangement(value) {
    const klass = require('./Element');
    return this[_values]._businessArrangement = new klass(value);
  }

  get benefitCategory() {
    if (!isPresent(this[_values].benefitCategory)) {
      const klass = require('./CodeableConcept');
      this[_values].benefitCategory = new klass();
    }
    return this[_values].benefitCategory;
  }

  set benefitCategory(value) {
    const klass = require('./CodeableConcept');
    return this[_values].benefitCategory = new klass(value);
  }

  get benefitSubCategory() {
    if (!isPresent(this[_values].benefitSubCategory)) {
      const klass = require('./CodeableConcept');
      this[_values].benefitSubCategory = new klass();
    }
    return this[_values].benefitSubCategory;
  }

  set benefitSubCategory(value) {
    const klass = require('./CodeableConcept');
    return this[_values].benefitSubCategory = new klass(value);
  }
}

module.exports = EligibilityRequest;
