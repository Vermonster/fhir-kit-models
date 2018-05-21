const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class ExplanationOfBenefitSubDetail extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ExplanationOfBenefitSubDetail ||
      values instanceof BackboneElement) {
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

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./CodeableConcept');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./CodeableConcept');
    return this[_values].type = new klass(value);
  }

  get revenue() {
    if (!isPresent(this[_values].revenue)) {
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

  get service() {
    if (!isPresent(this[_values].service)) {
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
    if (!isPresent(this[_values].modifier)) {
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
    if (!isPresent(this[_values].programCode)) {
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
    if (!isPresent(this[_values].quantity)) {
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
    if (!isPresent(this[_values].unitPrice)) {
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
    if (!isPresent(this[_values]._factor)) {
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
    if (!isPresent(this[_values].net)) {
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
    if (!isPresent(this[_values].udi)) {
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
      const klass = require('./ExplanationOfBenefitAdjudication');
      this[_values].adjudication = ArrayProxy(klass);
    }
    return this[_values].adjudication;
  }

  set adjudication(value) {
    const klass = require('./ExplanationOfBenefitAdjudication');
    this[_values].adjudication = ArrayProxy(klass);
    value.forEach(entry => this[_values].adjudication.push(entry));
    return this[_values].adjudication;
  }
}

module.exports = ExplanationOfBenefitSubDetail;

