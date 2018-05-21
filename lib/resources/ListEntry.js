
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ListEntry extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ListEntry || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get flag() {
    if (!isPresent(this[_values].flag)) {
      const klass = require('./CodeableConcept');
      this[_values].flag = new klass();
    }
    return this[_values].flag;
  }

  set flag(value) {
    const klass = require('./CodeableConcept');
    return this[_values].flag = new klass(value);
  }

  get deleted() {
    return this[_values].deleted;
  }

  set deleted(value) {
    return this[_values].deleted = value;
  }

  get _deleted() {
    if (!isPresent(this[_values]._deleted)) {
      const klass = require('./Element');
      this[_values]._deleted = new klass();
    }
    return this[_values]._deleted;
  }

  set _deleted(value) {
    const klass = require('./Element');
    return this[_values]._deleted = new klass(value);
  }

  get date() {
    return this[_values].date;
  }

  set date(value) {
    return this[_values].date = value;
  }

  get _date() {
    if (!isPresent(this[_values]._date)) {
      const klass = require('./Element');
      this[_values]._date = new klass();
    }
    return this[_values]._date;
  }

  set _date(value) {
    const klass = require('./Element');
    return this[_values]._date = new klass(value);
  }

  get item() {
    if (!isPresent(this[_values].item)) {
      const klass = require('./Reference');
      this[_values].item = new klass();
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./Reference');
    return this[_values].item = new klass(value);
  }
}

module.exports = ListEntry;

