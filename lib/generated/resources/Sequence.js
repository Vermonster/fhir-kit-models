const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const DomainResource = require('./DomainResource');
class Sequence extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Sequence || values instanceof DomainResource) {
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
    if (!this[_values].identifier) {
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
  get type() {
    return this[_values].type;
  }
  set type(value) {
    return this[_values].type = value;
  }
  get _type() {
    if (!this[_values]._type) {
      const klass = require('./Element');
      this[_values]._type = new klass();
    }
    return this[_values]._type;
  }
  set _type(value) {
    const klass = require('./Element');
    return this[_values]._type = new klass(value);
  }
  get coordinateSystem() {
    return this[_values].coordinateSystem;
  }
  set coordinateSystem(value) {
    return this[_values].coordinateSystem = value;
  }
  get _coordinateSystem() {
    if (!this[_values]._coordinateSystem) {
      const klass = require('./Element');
      this[_values]._coordinateSystem = new klass();
    }
    return this[_values]._coordinateSystem;
  }
  set _coordinateSystem(value) {
    const klass = require('./Element');
    return this[_values]._coordinateSystem = new klass(value);
  }
  get patient() {
    if (!this[_values].patient) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }
  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }
  get specimen() {
    if (!this[_values].specimen) {
      const klass = require('./Reference');
      this[_values].specimen = new klass();
    }
    return this[_values].specimen;
  }
  set specimen(value) {
    const klass = require('./Reference');
    return this[_values].specimen = new klass(value);
  }
  get device() {
    if (!this[_values].device) {
      const klass = require('./Reference');
      this[_values].device = new klass();
    }
    return this[_values].device;
  }
  set device(value) {
    const klass = require('./Reference');
    return this[_values].device = new klass(value);
  }
  get performer() {
    if (!this[_values].performer) {
      const klass = require('./Reference');
      this[_values].performer = new klass();
    }
    return this[_values].performer;
  }
  set performer(value) {
    const klass = require('./Reference');
    return this[_values].performer = new klass(value);
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
  get referenceSeq() {
    if (!this[_values].referenceSeq) {
      const klass = require('./Sequence_ReferenceSeq');
      this[_values].referenceSeq = new klass();
    }
    return this[_values].referenceSeq;
  }
  set referenceSeq(value) {
    const klass = require('./Sequence_ReferenceSeq');
    return this[_values].referenceSeq = new klass(value);
  }
  get variant() {
    if (!this[_values].variant) {
      const klass = require('./Sequence_Variant');
      this[_values].variant = ArrayProxy(klass);
    }
    return this[_values].variant;
  }
  set variant(value) {
    const klass = require('./Sequence_Variant');
    this[_values].variant = ArrayProxy(klass);
    value.forEach(entry => this[_values].variant.push(entry));
    return this[_values].variant;
  }
  get observedSeq() {
    return this[_values].observedSeq;
  }
  set observedSeq(value) {
    return this[_values].observedSeq = value;
  }
  get _observedSeq() {
    if (!this[_values]._observedSeq) {
      const klass = require('./Element');
      this[_values]._observedSeq = new klass();
    }
    return this[_values]._observedSeq;
  }
  set _observedSeq(value) {
    const klass = require('./Element');
    return this[_values]._observedSeq = new klass(value);
  }
  get quality() {
    if (!this[_values].quality) {
      const klass = require('./Sequence_Quality');
      this[_values].quality = ArrayProxy(klass);
    }
    return this[_values].quality;
  }
  set quality(value) {
    const klass = require('./Sequence_Quality');
    this[_values].quality = ArrayProxy(klass);
    value.forEach(entry => this[_values].quality.push(entry));
    return this[_values].quality;
  }
  get readCoverage() {
    return this[_values].readCoverage;
  }
  set readCoverage(value) {
    return this[_values].readCoverage = value;
  }
  get _readCoverage() {
    if (!this[_values]._readCoverage) {
      const klass = require('./Element');
      this[_values]._readCoverage = new klass();
    }
    return this[_values]._readCoverage;
  }
  set _readCoverage(value) {
    const klass = require('./Element');
    return this[_values]._readCoverage = new klass(value);
  }
  get repository() {
    if (!this[_values].repository) {
      const klass = require('./Sequence_Repository');
      this[_values].repository = ArrayProxy(klass);
    }
    return this[_values].repository;
  }
  set repository(value) {
    const klass = require('./Sequence_Repository');
    this[_values].repository = ArrayProxy(klass);
    value.forEach(entry => this[_values].repository.push(entry));
    return this[_values].repository;
  }
  get pointer() {
    if (!this[_values].pointer) {
      const klass = require('./Reference');
      this[_values].pointer = ArrayProxy(klass);
    }
    return this[_values].pointer;
  }
  set pointer(value) {
    const klass = require('./Reference');
    this[_values].pointer = ArrayProxy(klass);
    value.forEach(entry => this[_values].pointer.push(entry));
    return this[_values].pointer;
  }
}
module.exports = Sequence;