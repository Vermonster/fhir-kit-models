const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ProcessRequest extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ProcessRequest || values instanceof DomainResource) {
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

  get action() {
    return this[_values].action;
  }

  set action(value) {
    return this[_values].action = value;
  }

  get _action() {
    if (!isPresent(this[_values]._action)) {
      const klass = require('./Element');
      this[_values]._action = new klass();
    }
    return this[_values]._action;
  }

  set _action(value) {
    const klass = require('./Element');
    return this[_values]._action = new klass(value);
  }

  get target() {
    if (!isPresent(this[_values].target)) {
      const klass = require('./Reference');
      this[_values].target = new klass();
    }
    return this[_values].target;
  }

  set target(value) {
    const klass = require('./Reference');
    return this[_values].target = new klass(value);
  }

  get created() {
    return this[_values].created;
  }

  set created(value) {
    return this[_values].created = value;
  }

  get _created() {
    if (!isPresent(this[_values]._created)) {
      const klass = require('./Element');
      this[_values]._created = new klass();
    }
    return this[_values]._created;
  }

  set _created(value) {
    const klass = require('./Element');
    return this[_values]._created = new klass(value);
  }

  get provider() {
    if (!isPresent(this[_values].provider)) {
      const klass = require('./Reference');
      this[_values].provider = new klass();
    }
    return this[_values].provider;
  }

  set provider(value) {
    const klass = require('./Reference');
    return this[_values].provider = new klass(value);
  }

  get organization() {
    if (!isPresent(this[_values].organization)) {
      const klass = require('./Reference');
      this[_values].organization = new klass();
    }
    return this[_values].organization;
  }

  set organization(value) {
    const klass = require('./Reference');
    return this[_values].organization = new klass(value);
  }

  get request() {
    if (!isPresent(this[_values].request)) {
      const klass = require('./Reference');
      this[_values].request = new klass();
    }
    return this[_values].request;
  }

  set request(value) {
    const klass = require('./Reference');
    return this[_values].request = new klass(value);
  }

  get response() {
    if (!isPresent(this[_values].response)) {
      const klass = require('./Reference');
      this[_values].response = new klass();
    }
    return this[_values].response;
  }

  set response(value) {
    const klass = require('./Reference');
    return this[_values].response = new klass(value);
  }

  get nullify() {
    return this[_values].nullify;
  }

  set nullify(value) {
    return this[_values].nullify = value;
  }

  get _nullify() {
    if (!isPresent(this[_values]._nullify)) {
      const klass = require('./Element');
      this[_values]._nullify = new klass();
    }
    return this[_values]._nullify;
  }

  set _nullify(value) {
    const klass = require('./Element');
    return this[_values]._nullify = new klass(value);
  }

  get reference() {
    return this[_values].reference;
  }

  set reference(value) {
    return this[_values].reference = value;
  }

  get _reference() {
    if (!isPresent(this[_values]._reference)) {
      const klass = require('./Element');
      this[_values]._reference = new klass();
    }
    return this[_values]._reference;
  }

  set _reference(value) {
    const klass = require('./Element');
    return this[_values]._reference = new klass(value);
  }

  get item() {
    if (!isPresent(this[_values].item)) {
      const klass = require('./ProcessRequest_Item');
      this[_values].item = ArrayProxy(klass);
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./ProcessRequest_Item');
    this[_values].item = ArrayProxy(klass);
    value.forEach(entry => this[_values].item.push(entry));
    return this[_values].item;
  }

  get include() {
    return this[_values].include;
  }

  set include(value) {
    return this[_values].include = value;
  }

  get _include() {
    if (!isPresent(this[_values]._include)) {
      const klass = require('./Element');
      this[_values]._include = ArrayProxy(klass);
    }
    return this[_values]._include;
  }

  set _include(value) {
    const klass = require('./Element');
    this[_values]._include = ArrayProxy(klass);
    value.forEach(entry => this[_values]._include.push(entry));
    return this[_values]._include;
  }

  get exclude() {
    return this[_values].exclude;
  }

  set exclude(value) {
    return this[_values].exclude = value;
  }

  get _exclude() {
    if (!isPresent(this[_values]._exclude)) {
      const klass = require('./Element');
      this[_values]._exclude = ArrayProxy(klass);
    }
    return this[_values]._exclude;
  }

  set _exclude(value) {
    const klass = require('./Element');
    this[_values]._exclude = ArrayProxy(klass);
    value.forEach(entry => this[_values]._exclude.push(entry));
    return this[_values]._exclude;
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
}

module.exports = ProcessRequest;

