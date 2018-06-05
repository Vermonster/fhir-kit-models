const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class SupplyRequest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'SupplyRequest';
    if (values instanceof SupplyRequest ||
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
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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
      this[_values].category = new klass();
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
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

  get orderedItem() {
    if (!isPresent(this[_values].orderedItem)) {
      const klass = require('./SupplyRequestOrderedItem');
      this[_values].orderedItem = new klass();
    }
    return this[_values].orderedItem;
  }

  set orderedItem(value) {
    const klass = require('./SupplyRequestOrderedItem');
    return this[_values].orderedItem = new klass(value);
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

  get occurrenceTiming() {
    if (!isPresent(this[_values].occurrenceTiming)) {
      const klass = require('./Timing');
      this[_values].occurrenceTiming = new klass();
    }
    return this[_values].occurrenceTiming;
  }

  set occurrenceTiming(value) {
    const klass = require('./Timing');
    return this[_values].occurrenceTiming = new klass(value);
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

  get requester() {
    if (!isPresent(this[_values].requester)) {
      const klass = require('./SupplyRequestRequester');
      this[_values].requester = new klass();
    }
    return this[_values].requester;
  }

  set requester(value) {
    const klass = require('./SupplyRequestRequester');
    return this[_values].requester = new klass(value);
  }

  get supplier() {
    if (!isPresent(this[_values].supplier)) {
      const klass = require('./Reference');
      this[_values].supplier = ArrayProxy(klass);
    }
    return this[_values].supplier;
  }

  set supplier(value) {
    const klass = require('./Reference');
    this[_values].supplier = ArrayProxy(klass);
    value.forEach(entry => this[_values].supplier.push(entry));
    return this[_values].supplier;
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

  get deliverFrom() {
    if (!isPresent(this[_values].deliverFrom)) {
      const klass = require('./Reference');
      this[_values].deliverFrom = new klass();
    }
    return this[_values].deliverFrom;
  }

  set deliverFrom(value) {
    const klass = require('./Reference');
    return this[_values].deliverFrom = new klass(value);
  }

  get deliverTo() {
    if (!isPresent(this[_values].deliverTo)) {
      const klass = require('./Reference');
      this[_values].deliverTo = new klass();
    }
    return this[_values].deliverTo;
  }

  set deliverTo(value) {
    const klass = require('./Reference');
    return this[_values].deliverTo = new klass(value);
  }
}

module.exports = SupplyRequest;

