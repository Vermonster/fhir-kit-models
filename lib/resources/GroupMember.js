
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class GroupMember extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof GroupMember || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get entity() {
    if (!isPresent(this[_values].entity)) {
      const klass = require('./Reference');
      this[_values].entity = new klass();
    }
    return this[_values].entity;
  }

  set entity(value) {
    const klass = require('./Reference');
    return this[_values].entity = new klass(value);
  }

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }

  get inactive() {
    return this[_values].inactive;
  }

  set inactive(value) {
    return this[_values].inactive = value;
  }

  get _inactive() {
    if (!isPresent(this[_values]._inactive)) {
      const klass = require('./Element');
      this[_values]._inactive = new klass();
    }
    return this[_values]._inactive;
  }

  set _inactive(value) {
    const klass = require('./Element');
    return this[_values]._inactive = new klass(value);
  }
}

module.exports = GroupMember;

