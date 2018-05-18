const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class Communication extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Communication || values instanceof DomainResource) {
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
  get definition() {
    if (!this[_values].definition) {
      const klass = require('./Reference');
      this[_values].definition = ArrayProxy(klass);
    }
    return this[_values].definition;
  }
  set definition(value) {
    const klass = require('./Reference');
    this[_values].definition = ArrayProxy(klass);
    value.forEach(entry => this[_values].definition.push(entry));
    return this[_values].definition;
  }
  get basedOn() {
    if (!this[_values].basedOn) {
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
  get partOf() {
    if (!this[_values].partOf) {
      const klass = require('./Reference');
      this[_values].partOf = ArrayProxy(klass);
    }
    return this[_values].partOf;
  }
  set partOf(value) {
    const klass = require('./Reference');
    this[_values].partOf = ArrayProxy(klass);
    value.forEach(entry => this[_values].partOf.push(entry));
    return this[_values].partOf;
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
  get notDone() {
    return this[_values].notDone;
  }
  set notDone(value) {
    return this[_values].notDone = value;
  }
  get _notDone() {
    if (!this[_values]._notDone) {
      const klass = require('./Element');
      this[_values]._notDone = new klass();
    }
    return this[_values]._notDone;
  }
  set _notDone(value) {
    const klass = require('./Element');
    return this[_values]._notDone = new klass(value);
  }
  get notDoneReason() {
    if (!this[_values].notDoneReason) {
      const klass = require('./CodeableConcept');
      this[_values].notDoneReason = new klass();
    }
    return this[_values].notDoneReason;
  }
  set notDoneReason(value) {
    const klass = require('./CodeableConcept');
    return this[_values].notDoneReason = new klass(value);
  }
  get category() {
    if (!this[_values].category) {
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
  get medium() {
    if (!this[_values].medium) {
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
  get recipient() {
    if (!this[_values].recipient) {
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
    if (!this[_values].topic) {
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
    if (!this[_values].context) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }
  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }
  get sent() {
    return this[_values].sent;
  }
  set sent(value) {
    return this[_values].sent = value;
  }
  get _sent() {
    if (!this[_values]._sent) {
      const klass = require('./Element');
      this[_values]._sent = new klass();
    }
    return this[_values]._sent;
  }
  set _sent(value) {
    const klass = require('./Element');
    return this[_values]._sent = new klass(value);
  }
  get received() {
    return this[_values].received;
  }
  set received(value) {
    return this[_values].received = value;
  }
  get _received() {
    if (!this[_values]._received) {
      const klass = require('./Element');
      this[_values]._received = new klass();
    }
    return this[_values]._received;
  }
  set _received(value) {
    const klass = require('./Element');
    return this[_values]._received = new klass(value);
  }
  get sender() {
    if (!this[_values].sender) {
      const klass = require('./Reference');
      this[_values].sender = new klass();
    }
    return this[_values].sender;
  }
  set sender(value) {
    const klass = require('./Reference');
    return this[_values].sender = new klass(value);
  }
  get reasonCode() {
    if (!this[_values].reasonCode) {
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
    if (!this[_values].reasonReference) {
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
  get payload() {
    if (!this[_values].payload) {
      const klass = require('./Communication_Payload');
      this[_values].payload = ArrayProxy(klass);
    }
    return this[_values].payload;
  }
  set payload(value) {
    const klass = require('./Communication_Payload');
    this[_values].payload = ArrayProxy(klass);
    value.forEach(entry => this[_values].payload.push(entry));
    return this[_values].payload;
  }
  get note() {
    if (!this[_values].note) {
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
module.exports = Communication;