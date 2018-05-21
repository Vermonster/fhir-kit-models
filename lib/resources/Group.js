const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Group extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Group || values instanceof DomainResource) {
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

  get active() {
    return this[_values].active;
  }

  set active(value) {
    return this[_values].active = value;
  }

  get _active() {
    if (!isPresent(this[_values]._active)) {
      const klass = require('./Element');
      this[_values]._active = new klass();
    }
    return this[_values]._active;
  }

  set _active(value) {
    const klass = require('./Element');
    return this[_values]._active = new klass(value);
  }

  get type() {
    return this[_values].type;
  }

  set type(value) {
    return this[_values].type = value;
  }

  get _type() {
    if (!isPresent(this[_values]._type)) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }

  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }

  get actual() {
    return this[_values].actual;
  }

  set actual(value) {
    return this[_values].actual = value;
  }

  get _actual() {
    if (!isPresent(this[_values]._actual)) {
      const klass = require('./Element');
      this[_values]._actual = new klass();
    }
    return this[_values]._actual;
  }

  set _actual(value) {
    const klass = require('./Element');
    return this[_values]._actual = new klass(value);
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }

  get name() {
    return this[_values].name;
  }

  set name(value) {
    return this[_values].name = value;
  }

  get _name() {
    if (!isPresent(this[_values]._name)) {
      const klass = require('./Element');
      this[_values]._name = new klass();
    }
    return this[_values]._name;
  }

  set _name(value) {
    const klass = require('./Element');
    return this[_values]._name = new klass(value);
  }

  get quantity() {
    return this[_values].quantity;
  }

  set quantity(value) {
    return this[_values].quantity = value;
  }

  get _quantity() {
    if (!isPresent(this[_values]._quantity)) {
      const klass = require('./Element');
      this[_values]._quantity = new klass();
    }
    return this[_values]._quantity;
  }

  set _quantity(value) {
    const klass = require('./Element');
    return this[_values]._quantity = new klass(value);
  }

  get characteristic() {
    if (!isPresent(this[_values].characteristic)) {
      const klass = require('./GroupCharacteristic');
      this[_values].characteristic = ArrayProxy(klass);
    }
    return this[_values].characteristic;
  }

  set characteristic(value) {
    const klass = require('./GroupCharacteristic');
    this[_values].characteristic = ArrayProxy(klass);
    value.forEach(entry => this[_values].characteristic.push(entry));
    return this[_values].characteristic;
  }

  get member() {
    if (!isPresent(this[_values].member)) {
      const klass = require('./GroupMember');
      this[_values].member = ArrayProxy(klass);
    }
    return this[_values].member;
  }

  set member(value) {
    const klass = require('./GroupMember');
    this[_values].member = ArrayProxy(klass);
    value.forEach(entry => this[_values].member.push(entry));
    return this[_values].member;
  }
}

module.exports = Group;

