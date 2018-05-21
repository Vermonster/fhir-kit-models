const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Claim_Insurance extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Claim_Insurance || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sequence() {
    return this[_values].sequence;
  }

  set sequence(value) {
    return this[_values].sequence = value;
  }

  get _sequence() {
    if (!isPresent(this[_values]._sequence)) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }

  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
  }

  get focal() {
    return this[_values].focal;
  }

  set focal(value) {
    return this[_values].focal = value;
  }

  get _focal() {
    if (!isPresent(this[_values]._focal)) {
      const klass = require('./Element');
      this[_values]._focal = new klass();
    }
    return this[_values]._focal;
  }

  set _focal(value) {
    const klass = require('./Element');
    return this[_values]._focal = new klass(value);
  }

  get coverage() {
    if (!isPresent(this[_values].coverage)) {
      const klass = require('./Reference');
      this[_values].coverage = new klass();
    }
    return this[_values].coverage;
  }

  set coverage(value) {
    const klass = require('./Reference');
    return this[_values].coverage = new klass(value);
  }

  get businessArrangement() {
    return this[_values].businessArrangement;
  }

  set businessArrangement(value) {
    return this[_values].businessArrangement = value;
  }

  get _businessArrangement() {
    if (!isPresent(this[_values]._businessArrangement)) {
      const klass = require('./Element');
      this[_values]._businessArrangement = new klass();
    }
    return this[_values]._businessArrangement;
  }

  set _businessArrangement(value) {
    const klass = require('./Element');
    return this[_values]._businessArrangement = new klass(value);
  }

  get preAuthRef() {
    return this[_values].preAuthRef;
  }

  set preAuthRef(value) {
    return this[_values].preAuthRef = value;
  }

  get _preAuthRef() {
    if (!isPresent(this[_values]._preAuthRef)) {
      const klass = require('./Element');
      this[_values]._preAuthRef = ArrayProxy(klass);
    }
    return this[_values]._preAuthRef;
  }

  set _preAuthRef(value) {
    const klass = require('./Element');
    this[_values]._preAuthRef = ArrayProxy(klass);
    value.forEach(entry => this[_values]._preAuthRef.push(entry));
    return this[_values]._preAuthRef;
  }

  get claimResponse() {
    if (!isPresent(this[_values].claimResponse)) {
      const klass = require('./Reference');
      this[_values].claimResponse = new klass();
    }
    return this[_values].claimResponse;
  }

  set claimResponse(value) {
    const klass = require('./Reference');
    return this[_values].claimResponse = new klass(value);
  }
}

module.exports = Claim_Insurance;

