const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class DocumentReference extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DocumentReference || values instanceof DomainResource) {
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

  get masterIdentifier() {
    if (!isPresent(this[_values].masterIdentifier)) {
      const klass = require('./Identifier');
      this[_values].masterIdentifier = new klass();
    }
    return this[_values].masterIdentifier;
  }

  set masterIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].masterIdentifier = new klass(value);
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

  get docStatus() {
    return this[_values].docStatus;
  }

  set docStatus(value) {
    return this[_values].docStatus = value;
  }

  get _docStatus() {
    if (!isPresent(this[_values]._docStatus)) {
      const klass = require('./Element');
      this[_values]._docStatus = new klass();
    }
    return this[_values]._docStatus;
  }

  set _docStatus(value) {
    const klass = require('./Element');
    return this[_values]._docStatus = new klass(value);
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

  get indexed() {
    return this[_values].indexed;
  }

  set indexed(value) {
    return this[_values].indexed = value;
  }

  get _indexed() {
    if (!isPresent(this[_values]._indexed)) {
      const klass = require('./Element');
      this[_values]._indexed = new klass();
    }
    return this[_values]._indexed;
  }

  set _indexed(value) {
    const klass = require('./Element');
    return this[_values]._indexed = new klass(value);
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

  get authenticator() {
    if (!isPresent(this[_values].authenticator)) {
      const klass = require('./Reference');
      this[_values].authenticator = new klass();
    }
    return this[_values].authenticator;
  }

  set authenticator(value) {
    const klass = require('./Reference');
    return this[_values].authenticator = new klass(value);
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
      const klass = require('./DocumentReference_RelatesTo');
      this[_values].relatesTo = ArrayProxy(klass);
    }
    return this[_values].relatesTo;
  }

  set relatesTo(value) {
    const klass = require('./DocumentReference_RelatesTo');
    this[_values].relatesTo = ArrayProxy(klass);
    value.forEach(entry => this[_values].relatesTo.push(entry));
    return this[_values].relatesTo;
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

  get securityLabel() {
    if (!isPresent(this[_values].securityLabel)) {
      const klass = require('./CodeableConcept');
      this[_values].securityLabel = ArrayProxy(klass);
    }
    return this[_values].securityLabel;
  }

  set securityLabel(value) {
    const klass = require('./CodeableConcept');
    this[_values].securityLabel = ArrayProxy(klass);
    value.forEach(entry => this[_values].securityLabel.push(entry));
    return this[_values].securityLabel;
  }

  get content() {
    if (!isPresent(this[_values].content)) {
      const klass = require('./DocumentReference_Content');
      this[_values].content = ArrayProxy(klass);
    }
    return this[_values].content;
  }

  set content(value) {
    const klass = require('./DocumentReference_Content');
    this[_values].content = ArrayProxy(klass);
    value.forEach(entry => this[_values].content.push(entry));
    return this[_values].content;
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./DocumentReference_Context');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./DocumentReference_Context');
    return this[_values].context = new klass(value);
  }
}

module.exports = DocumentReference;

