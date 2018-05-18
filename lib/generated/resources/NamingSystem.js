const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class NamingSystem extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof NamingSystem || values instanceof DomainResource) {
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
  get status() {
    return this[_values].status;
  }
  set status(value) {
    return this[_values].status = value;
  }
  get _status() {
    if (!this[_values]._status) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }
  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }
  get kind() {
    return this[_values].kind;
  }
  set kind(value) {
    return this[_values].kind = value;
  }
  get _kind() {
    if (!this[_values]._kind) {
      const klass = require('./Element');
      this[_values]._kind = new klass();
    }
    return this[_values]._kind;
  }
  set _kind(value) {
    const klass = require('./Element');
    return this[_values]._kind = new klass(value);
  }
  get date() {
    return this[_values].date;
  }
  set date(value) {
    return this[_values].date = value;
  }
  get _date() {
    if (!this[_values]._date) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }
  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }
  get publisher() {
    return this[_values].publisher;
  }
  set publisher(value) {
    return this[_values].publisher = value;
  }
  get _publisher() {
    if (!this[_values]._publisher) {
      const klass = require('./Element');
      this[_values]._publisher = new klass();
    }
    return this[_values]._publisher;
  }
  set _publisher(value) {
    const klass = require('./Element');
    return this[_values]._publisher = new klass(value);
  }
  get contact() {
    if (!this[_values].contact) {
      const klass = require('./ContactDetail');
      this[_values].contact = ArrayProxy(klass);
    }
    return this[_values].contact;
  }
  set contact(value) {
    const klass = require('./ContactDetail');
    this[_values].contact = ArrayProxy(klass);
    value.forEach(entry => this[_values].contact.push(entry));
    return this[_values].contact;
  }
  get responsible() {
    return this[_values].responsible;
  }
  set responsible(value) {
    return this[_values].responsible = value;
  }
  get _responsible() {
    if (!this[_values]._responsible) {
      const klass = require('./Element');
      this[_values]._responsible = new klass();
    }
    return this[_values]._responsible;
  }
  set _responsible(value) {
    const klass = require('./Element');
    return this[_values]._responsible = new klass(value);
  }
  get type() {
    if (!this[_values].type) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }
  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }
  get description() {
    return this[_values].description;
  }
  set description(value) {
    return this[_values].description = value;
  }
  get _description() {
    if (!this[_values]._description) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }
  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }
  get useContext() {
    if (!this[_values].useContext) {
      const klass = require('./UsageContext');
      this[_values].useContext = ArrayProxy(klass);
    }
    return this[_values].useContext;
  }
  set useContext(value) {
    const klass = require('./UsageContext');
    this[_values].useContext = ArrayProxy(klass);
    value.forEach(entry => this[_values].useContext.push(entry));
    return this[_values].useContext;
  }
  get jurisdiction() {
    if (!this[_values].jurisdiction) {
      const klass = require('./CodeableConcept');
      this[_values].jurisdiction = ArrayProxy(klass);
    }
    return this[_values].jurisdiction;
  }
  set jurisdiction(value) {
    const klass = require('./CodeableConcept');
    this[_values].jurisdiction = ArrayProxy(klass);
    value.forEach(entry => this[_values].jurisdiction.push(entry));
    return this[_values].jurisdiction;
  }
  get usage() {
    return this[_values].usage;
  }
  set usage(value) {
    return this[_values].usage = value;
  }
  get _usage() {
    if (!this[_values]._usage) {
      const klass = require('./Element');
      this[_values]._usage = new klass();
    }
    return this[_values]._usage;
  }
  set _usage(value) {
    const klass = require('./Element');
    return this[_values]._usage = new klass(value);
  }
  get uniqueId() {
    if (!this[_values].uniqueId) {
      const klass = require('./NamingSystem_UniqueId');
      this[_values].uniqueId = ArrayProxy(klass);
    }
    return this[_values].uniqueId;
  }
  set uniqueId(value) {
    const klass = require('./NamingSystem_UniqueId');
    this[_values].uniqueId = ArrayProxy(klass);
    value.forEach(entry => this[_values].uniqueId.push(entry));
    return this[_values].uniqueId;
  }
  get replacedBy() {
    if (!this[_values].replacedBy) {
      const klass = require('./Reference');
      this[_values].replacedBy = new klass();
    }
    return this[_values].replacedBy;
  }
  set replacedBy(value) {
    const klass = require('./Reference');
    return this[_values].replacedBy = new klass(value);
  }
}
module.exports = NamingSystem;