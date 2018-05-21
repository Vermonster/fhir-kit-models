const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class List extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof List || values instanceof DomainResource) {
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

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
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

  get source() {
    if (!isPresent(this[_values].source)) {
      const klass = require('./Reference');
      this[_values].source = new klass();
    }
    return this[_values].source;
  }

  set source(value) {
    const klass = require('./Reference');
    return this[_values].source = new klass(value);
  }

  get orderedBy() {
    if (!isPresent(this[_values].orderedBy)) {
      const klass = require('./CodeableConcept');
      this[_values].orderedBy = new klass();
    }
    return this[_values].orderedBy;
  }

  set orderedBy(value) {
    const klass = require('./CodeableConcept');
    return this[_values].orderedBy = new klass(value);
  }

  get note() {
    if (!isPresent(this[_values].note)) {
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

  get entry() {
    if (!isPresent(this[_values].entry)) {
      const klass = require('./List_Entry');
      this[_values].entry = ArrayProxy(klass);
    }
    return this[_values].entry;
  }

  set entry(value) {
    const klass = require('./List_Entry');
    this[_values].entry = ArrayProxy(klass);
    value.forEach(entry => this[_values].entry.push(entry));
    return this[_values].entry;
  }

  get emptyReason() {
    if (!isPresent(this[_values].emptyReason)) {
      const klass = require('./CodeableConcept');
      this[_values].emptyReason = new klass();
    }
    return this[_values].emptyReason;
  }

  set emptyReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].emptyReason = new klass(value);
  }
}

module.exports = List;

