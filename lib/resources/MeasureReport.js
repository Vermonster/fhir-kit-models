const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class MeasureReport extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MeasureReport || values instanceof DomainResource) {
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
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get measure() {
    if (!isPresent(this[_values].measure)) {
      const klass = require('./Reference');
      this[_values].measure = new klass();
    }
    return this[_values].measure;
  }

  set measure(value) {
    const klass = require('./Reference');
    return this[_values].measure = new klass(value);
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

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get reportingOrganization() {
    if (!isPresent(this[_values].reportingOrganization)) {
      const klass = require('./Reference');
      this[_values].reportingOrganization = new klass();
    }
    return this[_values].reportingOrganization;
  }

  set reportingOrganization(value) {
    const klass = require('./Reference');
    return this[_values].reportingOrganization = new klass(value);
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

  get group() {
    if (!isPresent(this[_values].group)) {
      const klass = require('./MeasureReportGroup');
      this[_values].group = ArrayProxy(klass);
    }
    return this[_values].group;
  }

  set group(value) {
    const klass = require('./MeasureReportGroup');
    this[_values].group = ArrayProxy(klass);
    value.forEach(entry => this[_values].group.push(entry));
    return this[_values].group;
  }

  get evaluatedResources() {
    if (!isPresent(this[_values].evaluatedResources)) {
      const klass = require('./Reference');
      this[_values].evaluatedResources = new klass();
    }
    return this[_values].evaluatedResources;
  }

  set evaluatedResources(value) {
    const klass = require('./Reference');
    return this[_values].evaluatedResources = new klass(value);
  }
}

module.exports = MeasureReport;

