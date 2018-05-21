const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class DocumentManifest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof DocumentManifest || values instanceof DomainResource) {
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

  get recipient() {
    if (!isPresent(this[_values].recipient)) {
      const klass = require('./Reference');
      this[_values].recipient = ArrayProxy(klass);
    }
    return this[_values].recipient;
  }

  set recipient(value) {
    const klass = require('./Reference');
    this[_values].recipient = ArrayProxy(klass);
    value.forEach(entry => this[_values].recipient.push(entry));
    return this[_values].recipient;
  }

  get source() {
    return this[_values].source;
  }

  set source(value) {
    return this[_values].source = value;
  }

  get _source() {
    if (!isPresent(this[_values]._source)) {
      const klass = require('./Element');
      this[_values]._source = new klass();
    }
    return this[_values]._source;
  }

  set _source(value) {
    const klass = require('./Element');
    return this[_values]._source = new klass(value);
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

  get content() {
    if (!isPresent(this[_values].content)) {
      const klass = require('./DocumentManifest_Content');
      this[_values].content = ArrayProxy(klass);
    }
    return this[_values].content;
  }

  set content(value) {
    const klass = require('./DocumentManifest_Content');
    this[_values].content = ArrayProxy(klass);
    value.forEach(entry => this[_values].content.push(entry));
    return this[_values].content;
  }

  get related() {
    if (!isPresent(this[_values].related)) {
      const klass = require('./DocumentManifest_Related');
      this[_values].related = ArrayProxy(klass);
    }
    return this[_values].related;
  }

  set related(value) {
    const klass = require('./DocumentManifest_Related');
    this[_values].related = ArrayProxy(klass);
    value.forEach(entry => this[_values].related.push(entry));
    return this[_values].related;
  }
}

module.exports = DocumentManifest;

