const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Composition extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'Composition';
    if (values instanceof Composition ||
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

  get class() {
    if (!isPresent(this[_values].class)) {
      const klass = require('./CodeableConcept');
      this[_values].class = new klass();
    }
    return this[_values].class;
  }

  set class(value) {
    const klass = require('./CodeableConcept');
    return this[_values].class = new klass(value);
  }

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get encounter() {
    if (!isPresent(this[_values].encounter)) {
      const klass = require('./Reference');
      this[_values].encounter = new klass();
    }
    return this[_values].encounter;
  }

  set encounter(value) {
    const klass = require('./Reference');
    return this[_values].encounter = new klass(value);
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

  get author() {
    if (!isPresent(this[_values].author)) {
      const klass = require('./Reference');
      this[_values].author = ArrayProxy(klass);
    }
    return this[_values].author;
  }

  set author(value) {
    const klass = require('./Reference');
    this[_values].author = ArrayProxy(klass);
    value.forEach(entry => this[_values].author.push(entry));
    return this[_values].author;
  }

  get title() {
    return this[_values].title;
  }

  set title(value) {
    return this[_values].title = value;
  }

  get _title() {
    if (!isPresent(this[_values]._title)) {
      const klass = require('./Element');
      this[_values]._title = new klass();
    }
    return this[_values]._title;
  }

  set _title(value) {
    const klass = require('./Element');
    return this[_values]._title = new klass(value);
  }

  get confidentiality() {
    return this[_values].confidentiality;
  }

  set confidentiality(value) {
    return this[_values].confidentiality = value;
  }

  get _confidentiality() {
    if (!isPresent(this[_values]._confidentiality)) {
      const klass = require('./Element');
      this[_values]._confidentiality = new klass();
    }
    return this[_values]._confidentiality;
  }

  set _confidentiality(value) {
    const klass = require('./Element');
    return this[_values]._confidentiality = new klass(value);
  }

  get attester() {
    if (!isPresent(this[_values].attester)) {
      const klass = require('./CompositionAttester');
      this[_values].attester = ArrayProxy(klass);
    }
    return this[_values].attester;
  }

  set attester(value) {
    const klass = require('./CompositionAttester');
    this[_values].attester = ArrayProxy(klass);
    value.forEach(entry => this[_values].attester.push(entry));
    return this[_values].attester;
  }

  get custodian() {
    if (!isPresent(this[_values].custodian)) {
      const klass = require('./Reference');
      this[_values].custodian = new klass();
    }
    return this[_values].custodian;
  }

  set custodian(value) {
    const klass = require('./Reference');
    return this[_values].custodian = new klass(value);
  }

  get relatesTo() {
    if (!isPresent(this[_values].relatesTo)) {
      const klass = require('./CompositionRelatesTo');
      this[_values].relatesTo = ArrayProxy(klass);
    }
    return this[_values].relatesTo;
  }

  set relatesTo(value) {
    const klass = require('./CompositionRelatesTo');
    this[_values].relatesTo = ArrayProxy(klass);
    value.forEach(entry => this[_values].relatesTo.push(entry));
    return this[_values].relatesTo;
  }

  get event() {
    if (!isPresent(this[_values].event)) {
      const klass = require('./CompositionEvent');
      this[_values].event = ArrayProxy(klass);
    }
    return this[_values].event;
  }

  set event(value) {
    const klass = require('./CompositionEvent');
    this[_values].event = ArrayProxy(klass);
    value.forEach(entry => this[_values].event.push(entry));
    return this[_values].event;
  }

  get section() {
    if (!isPresent(this[_values].section)) {
      const klass = require('./CompositionSection');
      this[_values].section = ArrayProxy(klass);
    }
    return this[_values].section;
  }

  set section(value) {
    const klass = require('./CompositionSection');
    this[_values].section = ArrayProxy(klass);
    value.forEach(entry => this[_values].section.push(entry));
    return this[_values].section;
  }
}

module.exports = Composition;

