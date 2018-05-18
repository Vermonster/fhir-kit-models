const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class Basic extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Basic || values instanceof DomainResource) {
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
    if (!this[_values].identifier) {
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
  get code() {
    if (!this[_values].code) {
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
    if (!this[_values].subject) {
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
    if (!this[_values]._created) {
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
    if (!this[_values].author) {
      const klass = require('./Reference');
      this[_values].author = new klass();
    }
    return this[_values].author;
  }
  set author(value) {
    const klass = require('./Reference');
    return this[_values].author = new klass(value);
  }
}
module.exports = Basic;