const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class MessageHeader extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof MessageHeader || values instanceof DomainResource) {
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

  get event() {
    if (!isPresent(this[_values].event)) {
      const klass = require('./Coding');
      this[_values].event = new klass();
    }
    return this[_values].event;
  }

  set event(value) {
    const klass = require('./Coding');
    return this[_values].event = new klass(value);
  }

  get destination() {
    if (!isPresent(this[_values].destination)) {
      const klass = require('./MessageHeaderDestination');
      this[_values].destination = ArrayProxy(klass);
    }
    return this[_values].destination;
  }

  set destination(value) {
    const klass = require('./MessageHeaderDestination');
    this[_values].destination = ArrayProxy(klass);
    value.forEach(entry => this[_values].destination.push(entry));
    return this[_values].destination;
  }

  get receiver() {
    if (!isPresent(this[_values].receiver)) {
      const klass = require('./Reference');
      this[_values].receiver = new klass();
    }
    return this[_values].receiver;
  }

  set receiver(value) {
    const klass = require('./Reference');
    return this[_values].receiver = new klass(value);
  }

  get sender() {
    if (!isPresent(this[_values].sender)) {
      const klass = require('./Reference');
      this[_values].sender = new klass();
    }
    return this[_values].sender;
  }

  set sender(value) {
    const klass = require('./Reference');
    return this[_values].sender = new klass(value);
  }

  get timestamp() {
    return this[_values].timestamp;
  }

  set timestamp(value) {
    return this[_values].timestamp = value;
  }

  get _timestamp() {
    if (!isPresent(this[_values]._timestamp)) {
      const klass = require('./Element');
      this[_values]._timestamp = new klass();
    }
    return this[_values]._timestamp;
  }

  set _timestamp(value) {
    const klass = require('./Element');
    return this[_values]._timestamp = new klass(value);
  }

  get enterer() {
    if (!isPresent(this[_values].enterer)) {
      const klass = require('./Reference');
      this[_values].enterer = new klass();
    }
    return this[_values].enterer;
  }

  set enterer(value) {
    const klass = require('./Reference');
    return this[_values].enterer = new klass(value);
  }

  get author() {
    if (!isPresent(this[_values].author)) {
      const klass = require('./Reference');
      this[_values].author = new klass();
    }
    return this[_values].author;
  }

  set author(value) {
    const klass = require('./Reference');
    return this[_values].author = new klass(value);
  }

  get source() {
    if (!isPresent(this[_values].source)) {
      const klass = require('./MessageHeaderSource');
      this[_values].source = new klass();
    }
    return this[_values].source;
  }

  set source(value) {
    const klass = require('./MessageHeaderSource');
    return this[_values].source = new klass(value);
  }

  get responsible() {
    if (!isPresent(this[_values].responsible)) {
      const klass = require('./Reference');
      this[_values].responsible = new klass();
    }
    return this[_values].responsible;
  }

  set responsible(value) {
    const klass = require('./Reference');
    return this[_values].responsible = new klass(value);
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

  get response() {
    if (!isPresent(this[_values].response)) {
      const klass = require('./MessageHeaderResponse');
      this[_values].response = new klass();
    }
    return this[_values].response;
  }

  set response(value) {
    const klass = require('./MessageHeaderResponse');
    return this[_values].response = new klass(value);
  }

  get focus() {
    if (!isPresent(this[_values].focus)) {
      const klass = require('./Reference');
      this[_values].focus = ArrayProxy(klass);
    }
    return this[_values].focus;
  }

  set focus(value) {
    const klass = require('./Reference');
    this[_values].focus = ArrayProxy(klass);
    value.forEach(entry => this[_values].focus.push(entry));
    return this[_values].focus;
  }
}

module.exports = MessageHeader;

