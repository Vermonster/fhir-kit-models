const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Claim_Detail extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Claim_Detail || values instanceof BackboneElement) {
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
    if (!this[_values]._sequence) {
      const klass = require('./Element');
      this[_values]._sequence = new klass();
    }
    return this[_values]._sequence;
  }
  set _sequence(value) {
    const klass = require('./Element');
    return this[_values]._sequence = new klass(value);
  }
  get revenue() {
    if (!this[_values].revenue) {
      const klass = require('./CodeableConcept');
      this[_values].revenue = new klass();
    }
    return this[_values].revenue;
  }
  set revenue(value) {
    const klass = require('./CodeableConcept');
    return this[_values].revenue = new klass(value);
  }
  get category() {
    if (!this[_values].category) {
      const klass = require('./CodeableConcept');
      this[_values].category = new klass();
    }
    return this[_values].category;
  }
  set category(value) {
    const klass = require('./CodeableConcept');
    return this[_values].category = new klass(value);
  }
  get service() {
    if (!this[_values].service) {
      const klass = require('./CodeableConcept');
      this[_values].service = new klass();
    }
    return this[_values].service;
  }
  set service(value) {
    const klass = require('./CodeableConcept');
    return this[_values].service = new klass(value);
  }
  get modifier() {
    if (!this[_values].modifier) {
      const klass = require('./CodeableConcept');
      this[_values].modifier = ArrayProxy(klass);
    }
    return this[_values].modifier;
  }
  set modifier(value) {
    const klass = require('./CodeableConcept');
    this[_values].modifier = ArrayProxy(klass);
    value.forEach(entry => this[_values].modifier.push(entry));
    return this[_values].modifier;
  }
  get programCode() {
    if (!this[_values].programCode) {
      const klass = require('./CodeableConcept');
      this[_values].programCode = ArrayProxy(klass);
    }
    return this[_values].programCode;
  }
  set programCode(value) {
    const klass = require('./CodeableConcept');
    this[_values].programCode = ArrayProxy(klass);
    value.forEach(entry => this[_values].programCode.push(entry));
    return this[_values].programCode;
  }
  get quantity() {
    if (!this[_values].quantity) {
      const klass = require('./Quantity');
      this[_values].quantity = new klass();
    }
    return this[_values].quantity;
  }
  set quantity(value) {
    const klass = require('./Quantity');
    return this[_values].quantity = new klass(value);
  }
  get unitPrice() {
    if (!this[_values].unitPrice) {
      const klass = require('./Money');
      this[_values].unitPrice = new klass();
    }
    return this[_values].unitPrice;
  }
  set unitPrice(value) {
    const klass = require('./Money');
    return this[_values].unitPrice = new klass(value);
  }
  get factor() {
    return this[_values].factor;
  }
  set factor(value) {
    return this[_values].factor = value;
  }
  get _factor() {
    if (!this[_values]._factor) {
      const klass = require('./Element');
      this[_values]._factor = new klass();
    }
    return this[_values]._factor;
  }
  set _factor(value) {
    const klass = require('./Element');
    return this[_values]._factor = new klass(value);
  }
  get net() {
    if (!this[_values].net) {
      const klass = require('./Money');
      this[_values].net = new klass();
    }
    return this[_values].net;
  }
  set net(value) {
    const klass = require('./Money');
    return this[_values].net = new klass(value);
  }
  get udi() {
    if (!this[_values].udi) {
      const klass = require('./Reference');
      this[_values].udi = ArrayProxy(klass);
    }
    return this[_values].udi;
  }
  set udi(value) {
    const klass = require('./Reference');
    this[_values].udi = ArrayProxy(klass);
    value.forEach(entry => this[_values].udi.push(entry));
    return this[_values].udi;
  }
  get subDetail() {
    if (!this[_values].subDetail) {
      const klass = require('./Claim_SubDetail');
      this[_values].subDetail = ArrayProxy(klass);
    }
    return this[_values].subDetail;
  }
  set subDetail(value) {
    const klass = require('./Claim_SubDetail');
    this[_values].subDetail = ArrayProxy(klass);
    value.forEach(entry => this[_values].subDetail.push(entry));
    return this[_values].subDetail;
  }
}
module.exports = Claim_Detail;