const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ClaimResponseDetail extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClaimResponseDetail ||
      values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get sequenceLinkId() {
    return this[_values].sequenceLinkId;
  }

  set sequenceLinkId(value) {
    return this[_values].sequenceLinkId = value;
  }

  get _sequenceLinkId() {
    if (!isPresent(this[_values]._sequenceLinkId)) {
      const klass = require('./Element');
      this[_values]._sequenceLinkId = new klass();
    }
    return this[_values]._sequenceLinkId;
  }

  set _sequenceLinkId(value) {
    const klass = require('./Element');
    return this[_values]._sequenceLinkId = new klass(value);
  }

  get noteNumber() {
    return this[_values].noteNumber;
  }

  set noteNumber(value) {
    return this[_values].noteNumber = value;
  }

  get _noteNumber() {
    if (!isPresent(this[_values]._noteNumber)) {
      const klass = require('./Element');
      this[_values]._noteNumber = ArrayProxy(klass);
    }
    return this[_values]._noteNumber;
  }

  set _noteNumber(value) {
    const klass = require('./Element');
    this[_values]._noteNumber = ArrayProxy(klass);
    value.forEach(entry => this[_values]._noteNumber.push(entry));
    return this[_values]._noteNumber;
  }

  get adjudication() {
    if (!isPresent(this[_values].adjudication)) {
      const klass = require('./ClaimResponseAdjudication');
      this[_values].adjudication = ArrayProxy(klass);
    }
    return this[_values].adjudication;
  }

  set adjudication(value) {
    const klass = require('./ClaimResponseAdjudication');
    this[_values].adjudication = ArrayProxy(klass);
    value.forEach(entry => this[_values].adjudication.push(entry));
    return this[_values].adjudication;
  }

  get subDetail() {
    if (!isPresent(this[_values].subDetail)) {
      const klass = require('./ClaimResponseSubDetail');
      this[_values].subDetail = ArrayProxy(klass);
    }
    return this[_values].subDetail;
  }

  set subDetail(value) {
    const klass = require('./ClaimResponseSubDetail');
    this[_values].subDetail = ArrayProxy(klass);
    value.forEach(entry => this[_values].subDetail.push(entry));
    return this[_values].subDetail;
  }
}

module.exports = ClaimResponseDetail;
