const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class RequestGroup extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof RequestGroup || values instanceof DomainResource) {
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

  get definition() {
    if (!isPresent(this[_values].definition)) {
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

  get intent() {
    return this[_values].intent;
  }

  set intent(value) {
    return this[_values].intent = value;
  }

  get _intent() {
    if (!isPresent(this[_values]._intent)) {
      const klass = require('./Element');
      this[_values]._intent = new klass();
    }
    return this[_values]._intent;
  }

  set _intent(value) {
    const klass = require('./Element');
    return this[_values]._intent = new klass(value);
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

  get reasonCodeableConcept() {
    if (!isPresent(this[_values].reasonCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].reasonCodeableConcept = new klass();
    }
    return this[_values].reasonCodeableConcept;
  }

  set reasonCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].reasonCodeableConcept = new klass(value);
  }

  get reasonReference() {
    if (!isPresent(this[_values].reasonReference)) {
      const klass = require('./Reference');
      this[_values].reasonReference = new klass();
    }
    return this[_values].reasonReference;
  }

  set reasonReference(value) {
    const klass = require('./Reference');
    return this[_values].reasonReference = new klass(value);
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

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./RequestGroup_Action');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./RequestGroup_Action');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }
}

module.exports = RequestGroup;

