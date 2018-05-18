const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class OperationDefinition extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof OperationDefinition || values instanceof DomainResource) {
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
  get url() {
    return this[_values].url;
  }
  set url(value) {
    return this[_values].url = value;
  }
  get _url() {
    if (!this[_values]._url) {
      const klass = require('./Element');
      this[_values]._url = new klass();
    }
    return this[_values]._url;
  }
  set _url(value) {
    const klass = require('./Element');
    return this[_values]._url = new klass(value);
  }
  get version() {
    return this[_values].version;
  }
  set version(value) {
    return this[_values].version = value;
  }
  get _version() {
    if (!this[_values]._version) {
      const klass = require('./Element');
      this[_values]._version = new klass();
    }
    return this[_values]._version;
  }
  set _version(value) {
    const klass = require('./Element');
    return this[_values]._version = new klass(value);
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
  get experimental() {
    return this[_values].experimental;
  }
  set experimental(value) {
    return this[_values].experimental = value;
  }
  get _experimental() {
    if (!this[_values]._experimental) {
      const klass = require('./Element');
      this[_values]._experimental = new klass();
    }
    return this[_values]._experimental;
  }
  set _experimental(value) {
    const klass = require('./Element');
    return this[_values]._experimental = new klass(value);
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
  get purpose() {
    return this[_values].purpose;
  }
  set purpose(value) {
    return this[_values].purpose = value;
  }
  get _purpose() {
    if (!this[_values]._purpose) {
      const klass = require('./Element');
      this[_values]._purpose = new klass();
    }
    return this[_values]._purpose;
  }
  set _purpose(value) {
    const klass = require('./Element');
    return this[_values]._purpose = new klass(value);
  }
  get idempotent() {
    return this[_values].idempotent;
  }
  set idempotent(value) {
    return this[_values].idempotent = value;
  }
  get _idempotent() {
    if (!this[_values]._idempotent) {
      const klass = require('./Element');
      this[_values]._idempotent = new klass();
    }
    return this[_values]._idempotent;
  }
  set _idempotent(value) {
    const klass = require('./Element');
    return this[_values]._idempotent = new klass(value);
  }
  get code() {
    return this[_values].code;
  }
  set code(value) {
    return this[_values].code = value;
  }
  get _code() {
    if (!this[_values]._code) {
      const klass = require('./Element');
      this[_values]._code = new klass();
    }
    return this[_values]._code;
  }
  set _code(value) {
    const klass = require('./Element');
    return this[_values]._code = new klass(value);
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
  get base() {
    if (!this[_values].base) {
      const klass = require('./Reference');
      this[_values].base = new klass();
    }
    return this[_values].base;
  }
  set base(value) {
    const klass = require('./Reference');
    return this[_values].base = new klass(value);
  }
  get resource() {
    return this[_values].resource;
  }
  set resource(value) {
    return this[_values].resource = value;
  }
  get _resource() {
    if (!this[_values]._resource) {
      const klass = require('./Element');
      this[_values]._resource = ArrayProxy(klass);
    }
    return this[_values]._resource;
  }
  set _resource(value) {
    const klass = require('./Element');
    this[_values]._resource = ArrayProxy(klass);
    value.forEach(entry => this[_values]._resource.push(entry));
    return this[_values]._resource;
  }
  get system() {
    return this[_values].system;
  }
  set system(value) {
    return this[_values].system = value;
  }
  get _system() {
    if (!this[_values]._system) {
      const klass = require('./Element');
      this[_values]._system = new klass();
    }
    return this[_values]._system;
  }
  set _system(value) {
    const klass = require('./Element');
    return this[_values]._system = new klass(value);
  }
  get type() {
    return this[_values].type;
  }
  set type(value) {
    return this[_values].type = value;
  }
  get _type() {
    if (!this[_values]._type) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }
  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }
  get instance() {
    return this[_values].instance;
  }
  set instance(value) {
    return this[_values].instance = value;
  }
  get _instance() {
    if (!this[_values]._instance) {
      const klass = require('./Element');
      this[_values]._instance = new klass();
    }
    return this[_values]._instance;
  }
  set _instance(value) {
    const klass = require('./Element');
    return this[_values]._instance = new klass(value);
  }
  get parameter() {
    if (!this[_values].parameter) {
      const klass = require('./OperationDefinition_Parameter');
      this[_values].parameter = ArrayProxy(klass);
    }
    return this[_values].parameter;
  }
  set parameter(value) {
    const klass = require('./OperationDefinition_Parameter');
    this[_values].parameter = ArrayProxy(klass);
    value.forEach(entry => this[_values].parameter.push(entry));
    return this[_values].parameter;
  }
  get overload() {
    if (!this[_values].overload) {
      const klass = require('./OperationDefinition_Overload');
      this[_values].overload = ArrayProxy(klass);
    }
    return this[_values].overload;
  }
  set overload(value) {
    const klass = require('./OperationDefinition_Overload');
    this[_values].overload = ArrayProxy(klass);
    value.forEach(entry => this[_values].overload.push(entry));
    return this[_values].overload;
  }
}
module.exports = OperationDefinition;