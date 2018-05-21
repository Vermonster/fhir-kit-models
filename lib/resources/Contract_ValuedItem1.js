const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Contract_ValuedItem1 extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Contract_ValuedItem1 || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get entityCodeableConcept() {
    if (!isPresent(this[_values].entityCodeableConcept)) {
      const klass = require('./CodeableConcept');
      this[_values].entityCodeableConcept = new klass();
    }
    return this[_values].entityCodeableConcept;
  }

  set entityCodeableConcept(value) {
    const klass = require('./CodeableConcept');
    return this[_values].entityCodeableConcept = new klass(value);
  }

  get entityReference() {
    if (!isPresent(this[_values].entityReference)) {
      const klass = require('./Reference');
      this[_values].entityReference = new klass();
    }
    return this[_values].entityReference;
  }

  set entityReference(value) {
    const klass = require('./Reference');
    return this[_values].entityReference = new klass(value);
  }

  get identifier() {
    if (!isPresent(this[_values].identifier)) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }

  get effectiveTime() {
    return this[_values].effectiveTime;
  }

  set effectiveTime(value) {
    return this[_values].effectiveTime = value;
  }

  get _effectiveTime() {
    if (!isPresent(this[_values]._effectiveTime)) {
      const klass = require('./Element');
      this[_values]._effectiveTime = new klass();
    }
    return this[_values]._effectiveTime;
  }

  set _effectiveTime(value) {
    const klass = require('./Element');
    return this[_values]._effectiveTime = new klass(value);
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

  get points() {
    return this[_values].points;
  }

  set points(value) {
    return this[_values].points = value;
  }

  get _points() {
    if (!isPresent(this[_values]._points)) {
      const klass = require('./Element');
      this[_values]._points = new klass();
    }
    return this[_values]._points;
  }

  set _points(value) {
    const klass = require('./Element');
    return this[_values]._points = new klass(value);
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
}

module.exports = Contract_ValuedItem1;

