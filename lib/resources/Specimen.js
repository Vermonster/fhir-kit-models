const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Specimen extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Specimen ||
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

  get accessionIdentifier() {
    if (!isPresent(this[_values].accessionIdentifier)) {
      const klass = require('./Identifier');
      this[_values].accessionIdentifier = new klass();
    }
    return this[_values].accessionIdentifier;
  }

  set accessionIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].accessionIdentifier = new klass(value);
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

  get receivedTime() {
    return this[_values].receivedTime;
  }

  set receivedTime(value) {
    return this[_values].receivedTime = value;
  }

  get _receivedTime() {
    if (!isPresent(this[_values]._receivedTime)) {
      const klass = require('./Element');
      this[_values]._receivedTime = new klass();
    }
    return this[_values]._receivedTime;
  }

  set _receivedTime(value) {
    const klass = require('./Element');
    return this[_values]._receivedTime = new klass(value);
  }

  get parent() {
    if (!isPresent(this[_values].parent)) {
      const klass = require('./Reference');
      this[_values].parent = ArrayProxy(klass);
    }
    return this[_values].parent;
  }

  set parent(value) {
    const klass = require('./Reference');
    this[_values].parent = ArrayProxy(klass);
    value.forEach(entry => this[_values].parent.push(entry));
    return this[_values].parent;
  }

  get request() {
    if (!isPresent(this[_values].request)) {
      const klass = require('./Reference');
      this[_values].request = ArrayProxy(klass);
    }
    return this[_values].request;
  }

  set request(value) {
    const klass = require('./Reference');
    this[_values].request = ArrayProxy(klass);
    value.forEach(entry => this[_values].request.push(entry));
    return this[_values].request;
  }

  get collection() {
    if (!isPresent(this[_values].collection)) {
      const klass = require('./SpecimenCollection');
      this[_values].collection = new klass();
    }
    return this[_values].collection;
  }

  set collection(value) {
    const klass = require('./SpecimenCollection');
    return this[_values].collection = new klass(value);
  }

  get processing() {
    if (!isPresent(this[_values].processing)) {
      const klass = require('./SpecimenProcessing');
      this[_values].processing = ArrayProxy(klass);
    }
    return this[_values].processing;
  }

  set processing(value) {
    const klass = require('./SpecimenProcessing');
    this[_values].processing = ArrayProxy(klass);
    value.forEach(entry => this[_values].processing.push(entry));
    return this[_values].processing;
  }

  get container() {
    if (!isPresent(this[_values].container)) {
      const klass = require('./SpecimenContainer');
      this[_values].container = ArrayProxy(klass);
    }
    return this[_values].container;
  }

  set container(value) {
    const klass = require('./SpecimenContainer');
    this[_values].container = ArrayProxy(klass);
    value.forEach(entry => this[_values].container.push(entry));
    return this[_values].container;
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
}

module.exports = Specimen;

