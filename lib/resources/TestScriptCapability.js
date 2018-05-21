const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class TestScriptCapability extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof TestScriptCapability || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get required() {
    return this[_values].required;
  }

  set required(value) {
    return this[_values].required = value;
  }

  get _required() {
    if (!isPresent(this[_values]._required)) {
      const klass = require('./Element');
      this[_values]._required = new klass();
    }
    return this[_values]._required;
  }

  set _required(value) {
    const klass = require('./Element');
    return this[_values]._required = new klass(value);
  }

  get validated() {
    return this[_values].validated;
  }

  set validated(value) {
    return this[_values].validated = value;
  }

  get _validated() {
    if (!isPresent(this[_values]._validated)) {
      const klass = require('./Element');
      this[_values]._validated = new klass();
    }
    return this[_values]._validated;
  }

  set _validated(value) {
    const klass = require('./Element');
    return this[_values]._validated = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get origin() {
    return this[_values].origin;
  }

  set origin(value) {
    return this[_values].origin = value;
  }

  get _origin() {
    if (!isPresent(this[_values]._origin)) {
      const klass = require('./Element');
      this[_values]._origin = ArrayProxy(klass);
    }
    return this[_values]._origin;
  }

  set _origin(value) {
    const klass = require('./Element');
    this[_values]._origin = ArrayProxy(klass);
    value.forEach(entry => this[_values]._origin.push(entry));
    return this[_values]._origin;
  }

  get destination() {
    return this[_values].destination;
  }

  set destination(value) {
    return this[_values].destination = value;
  }

  get _destination() {
    if (!isPresent(this[_values]._destination)) {
      const klass = require('./Element');
      this[_values]._destination = new klass();
    }
    return this[_values]._destination;
  }

  set _destination(value) {
    const klass = require('./Element');
    return this[_values]._destination = new klass(value);
  }

  get link() {
    return this[_values].link;
  }

  set link(value) {
    return this[_values].link = value;
  }

  get _link() {
    if (!isPresent(this[_values]._link)) {
      const klass = require('./Element');
      this[_values]._link = ArrayProxy(klass);
    }
    return this[_values]._link;
  }

  set _link(value) {
    const klass = require('./Element');
    this[_values]._link = ArrayProxy(klass);
    value.forEach(entry => this[_values]._link.push(entry));
    return this[_values]._link;
  }

  get capabilities() {
    if (!isPresent(this[_values].capabilities)) {
      const klass = require('./Reference');
      this[_values].capabilities = new klass();
    }
    return this[_values].capabilities;
  }

  set capabilities(value) {
    const klass = require('./Reference');
    return this[_values].capabilities = new klass(value);
  }
}

module.exports = TestScriptCapability;

