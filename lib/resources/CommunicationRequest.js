const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class CommunicationRequest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CommunicationRequest || values instanceof DomainResource) {
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

  get replaces() {
    if (!isPresent(this[_values].replaces)) {
      const klass = require('./Reference');
      this[_values].replaces = ArrayProxy(klass);
    }
    return this[_values].replaces;
  }

  set replaces(value) {
    const klass = require('./Reference');
    this[_values].replaces = ArrayProxy(klass);
    value.forEach(entry => this[_values].replaces.push(entry));
    return this[_values].replaces;
  }

  get groupIdentifier() {
    if (!isPresent(this[_values].groupIdentifier)) {
      const klass = require('./Identifier');
      this[_values].groupIdentifier = new klass();
    }
    return this[_values].groupIdentifier;
  }

  set groupIdentifier(value) {
    const klass = require('./Identifier');
    return this[_values].groupIdentifier = new klass(value);
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

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = ArrayProxy(klass);
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    this[_values].category = ArrayProxy(klass);
    value.forEach(entry => this[_values].category.push(entry));
    return this[_values].category;
  }

  get priority() {
    return this[_values].priority;
  }

  set priority(value) {
    return this[_values].priority = value;
  }

  get _priority() {
    if (!isPresent(this[_values]._priority)) {
      const klass = require('./Element');
      this[_values]._priority = new klass();
    }
    return this[_values]._priority;
  }

  set _priority(value) {
    const klass = require('./Element');
    return this[_values]._priority = new klass(value);
  }

  get medium() {
    if (!isPresent(this[_values].medium)) {
      const klass = require('./CodeableConcept');
      this[_values].medium = ArrayProxy(klass);
    }
    return this[_values].medium;
  }

  set medium(value) {
    const klass = require('./CodeableConcept');
    this[_values].medium = ArrayProxy(klass);
    value.forEach(entry => this[_values].medium.push(entry));
    return this[_values].medium;
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

  get topic() {
    if (!isPresent(this[_values].topic)) {
      const klass = require('./Reference');
      this[_values].topic = ArrayProxy(klass);
    }
    return this[_values].topic;
  }

  set topic(value) {
    const klass = require('./Reference');
    this[_values].topic = ArrayProxy(klass);
    value.forEach(entry => this[_values].topic.push(entry));
    return this[_values].topic;
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

  get payload() {
    if (!isPresent(this[_values].payload)) {
      const klass = require('./CommunicationRequestPayload');
      this[_values].payload = ArrayProxy(klass);
    }
    return this[_values].payload;
  }

  set payload(value) {
    const klass = require('./CommunicationRequestPayload');
    this[_values].payload = ArrayProxy(klass);
    value.forEach(entry => this[_values].payload.push(entry));
    return this[_values].payload;
  }

  get occurrenceDateTime() {
    return this[_values].occurrenceDateTime;
  }

  set occurrenceDateTime(value) {
    return this[_values].occurrenceDateTime = value;
  }

  get _occurrenceDateTime() {
    if (!isPresent(this[_values]._occurrenceDateTime)) {
      const klass = require('./Element');
      this[_values]._occurrenceDateTime = new klass();
    }
    return this[_values]._occurrenceDateTime;
  }

  set _occurrenceDateTime(value) {
    const klass = require('./Element');
    return this[_values]._occurrenceDateTime = new klass(value);
  }

  get occurrencePeriod() {
    if (!isPresent(this[_values].occurrencePeriod)) {
      const klass = require('./Period');
      this[_values].occurrencePeriod = new klass();
    }
    return this[_values].occurrencePeriod;
  }

  set occurrencePeriod(value) {
    const klass = require('./Period');
    return this[_values].occurrencePeriod = new klass(value);
  }

  get authoredOn() {
    return this[_values].authoredOn;
  }

  set authoredOn(value) {
    return this[_values].authoredOn = value;
  }

  get _authoredOn() {
    if (!isPresent(this[_values]._authoredOn)) {
      const klass = require('./Element');
      this[_values]._authoredOn = new klass();
    }
    return this[_values]._authoredOn;
  }

  set _authoredOn(value) {
    const klass = require('./Element');
    return this[_values]._authoredOn = new klass(value);
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

  get requester() {
    if (!isPresent(this[_values].requester)) {
      const klass = require('./CommunicationRequestRequester');
      this[_values].requester = new klass();
    }
    return this[_values].requester;
  }

  set requester(value) {
    const klass = require('./CommunicationRequestRequester');
    return this[_values].requester = new klass(value);
  }

  get reasonCode() {
    if (!isPresent(this[_values].reasonCode)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCode = ArrayProxy(klass);
    }
    return this[_values].reasonCode;
  }

  set reasonCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].reasonCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonCode.push(entry));
    return this[_values].reasonCode;
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = ArrayProxy(klass);
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    this[_values].reasonReference = ArrayProxy(klass);
    value.forEach(entry => this[_values].reasonReference.push(entry));
    return this[_values].reasonReference;
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

module.exports = CommunicationRequest;

