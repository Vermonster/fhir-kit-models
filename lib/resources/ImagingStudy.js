const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ImagingStudy extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImagingStudy ||
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

  get uid() {
    return this[_values].uid;
  }

  set uid(value) {
    return this[_values].uid = value;
  }

  get _uid() {
    if (!isPresent(this[_values]._uid)) {
      const klass = require('./Element');
      this[_values]._uid = new klass();
    }
    return this[_values]._uid;
  }

  set _uid(value) {
    const klass = require('./Element');
    return this[_values]._uid = new klass(value);
  }

  get accession() {
    if (!isPresent(this[_values].accession)) {
      const klass = require('./Identifier');
      this[_values].accession = new klass();
    }
    return this[_values].accession;
  }

  set accession(value) {
    const klass = require('./Identifier');
    return this[_values].accession = new klass(value);
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

  get availability() {
    return this[_values].availability;
  }

  set availability(value) {
    return this[_values].availability = value;
  }

  get _availability() {
    if (!isPresent(this[_values]._availability)) {
      const klass = require('./Element');
      this[_values]._availability = new klass();
    }
    return this[_values]._availability;
  }

  set _availability(value) {
    const klass = require('./Element');
    return this[_values]._availability = new klass(value);
  }

  get modalityList() {
    if (!isPresent(this[_values].modalityList)) {
      const klass = require('./Coding');
      this[_values].modalityList = ArrayProxy(klass);
    }
    return this[_values].modalityList;
  }

  set modalityList(value) {
    const klass = require('./Coding');
    this[_values].modalityList = ArrayProxy(klass);
    value.forEach(entry => this[_values].modalityList.push(entry));
    return this[_values].modalityList;
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

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }

  get started() {
    return this[_values].started;
  }

  set started(value) {
    return this[_values].started = value;
  }

  get _started() {
    if (!isPresent(this[_values]._started)) {
      const klass = require('./Element');
      this[_values]._started = new klass();
    }
    return this[_values]._started;
  }

  set _started(value) {
    const klass = require('./Element');
    return this[_values]._started = new klass(value);
  }

  get basedOn() {
    if (!isPresent(this[_values].basedOn)) {
      const klass = require('./Reference');
      this[_values].basedOn = ArrayProxy(klass);
    }
    return this[_values].basedOn;
  }

  set basedOn(value) {
    const klass = require('./Reference');
    this[_values].basedOn = ArrayProxy(klass);
    value.forEach(entry => this[_values].basedOn.push(entry));
    return this[_values].basedOn;
  }

  get referrer() {
    if (!isPresent(this[_values].referrer)) {
      const klass = require('./Reference');
      this[_values].referrer = new klass();
    }
    return this[_values].referrer;
  }

  set referrer(value) {
    const klass = require('./Reference');
    return this[_values].referrer = new klass(value);
  }

  get interpreter() {
    if (!isPresent(this[_values].interpreter)) {
      const klass = require('./Reference');
      this[_values].interpreter = ArrayProxy(klass);
    }
    return this[_values].interpreter;
  }

  set interpreter(value) {
    const klass = require('./Reference');
    this[_values].interpreter = ArrayProxy(klass);
    value.forEach(entry => this[_values].interpreter.push(entry));
    return this[_values].interpreter;
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

  get numberOfSeries() {
    return this[_values].numberOfSeries;
  }

  set numberOfSeries(value) {
    return this[_values].numberOfSeries = value;
  }

  get _numberOfSeries() {
    if (!isPresent(this[_values]._numberOfSeries)) {
      const klass = require('./Element');
      this[_values]._numberOfSeries = new klass();
    }
    return this[_values]._numberOfSeries;
  }

  set _numberOfSeries(value) {
    const klass = require('./Element');
    return this[_values]._numberOfSeries = new klass(value);
  }

  get numberOfInstances() {
    return this[_values].numberOfInstances;
  }

  set numberOfInstances(value) {
    return this[_values].numberOfInstances = value;
  }

  get _numberOfInstances() {
    if (!isPresent(this[_values]._numberOfInstances)) {
      const klass = require('./Element');
      this[_values]._numberOfInstances = new klass();
    }
    return this[_values]._numberOfInstances;
  }

  set _numberOfInstances(value) {
    const klass = require('./Element');
    return this[_values]._numberOfInstances = new klass(value);
  }

  get procedureReference() {
    if (!isPresent(this[_values].procedureReference)) {
      const klass = require('./Reference');
      this[_values].procedureReference = ArrayProxy(klass);
    }
    return this[_values].procedureReference;
  }

  set procedureReference(value) {
    const klass = require('./Reference');
    this[_values].procedureReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].procedureReference.push(entry));
    return this[_values].procedureReference;
  }

  get procedureCode() {
    if (!isPresent(this[_values].procedureCode)) {
      const klass = require('./CodeableConcept');
      this[_values].procedureCode = ArrayProxy(klass);
    }
    return this[_values].procedureCode;
  }

  set procedureCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].procedureCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].procedureCode.push(entry));
    return this[_values].procedureCode;
  }

  get reason() {
    if (!isPresent(this[_values].reason)) {
      const klass = require('./CodeableConcept');
      this[_values].reason = new klass();
    }
    return this[_values].reason;
  }

  set reason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reason = new klass(value);
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

  get series() {
    if (!isPresent(this[_values].series)) {
      const klass = require('./ImagingStudySeries');
      this[_values].series = ArrayProxy(klass);
    }
    return this[_values].series;
  }

  set series(value) {
    const klass = require('./ImagingStudySeries');
    this[_values].series = ArrayProxy(klass);
    value.forEach(entry => this[_values].series.push(entry));
    return this[_values].series;
  }
}

module.exports = ImagingStudy;

