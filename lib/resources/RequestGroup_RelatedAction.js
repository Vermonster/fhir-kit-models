
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class RequestGroup_RelatedAction extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof RequestGroup_RelatedAction || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get actionId() {
    return this[_values].actionId;
  }

  set actionId(value) {
    return this[_values].actionId = value;
  }

  get _actionId() {
    if (!isPresent(this[_values]._actionId)) {
      const klass = require('./Element');
      this[_values]._actionId = new klass();
    }
    return this[_values]._actionId;
  }

  set _actionId(value) {
    const klass = require('./Element');
    return this[_values]._actionId = new klass(value);
  }

  get relationship() {
    return this[_values].relationship;
  }

  set relationship(value) {
    return this[_values].relationship = value;
  }

  get _relationship() {
    if (!isPresent(this[_values]._relationship)) {
      const klass = require('./Element');
      this[_values]._relationship = new klass();
    }
    return this[_values]._relationship;
  }

  set _relationship(value) {
    const klass = require('./Element');
    return this[_values]._relationship = new klass(value);
  }

  get offsetDuration() {
    if (!isPresent(this[_values].offsetDuration)) {
      const klass = require('./Duration');
      this[_values].offsetDuration = new klass();
    }
    return this[_values].offsetDuration;
  }

  set offsetDuration(value) {
    const klass = require('./Duration');
    return this[_values].offsetDuration = new klass(value);
  }

  get offsetRange() {
    if (!isPresent(this[_values].offsetRange)) {
      const klass = require('./Range');
      this[_values].offsetRange = new klass();
    }
    return this[_values].offsetRange;
  }

  set offsetRange(value) {
    const klass = require('./Range');
    return this[_values].offsetRange = new klass(value);
  }
}

module.exports = RequestGroup_RelatedAction;

