const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Sequence_ReferenceSeq extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Sequence_ReferenceSeq || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get chromosome() {
    if (!this[_values].chromosome) {
      const klass = require('./CodeableConcept');
      this[_values].chromosome = new klass();
    }
    return this[_values].chromosome;
  }
  set chromosome(value) {
    const klass = require('./CodeableConcept');
    return this[_values].chromosome = new klass(value);
  }
  get genomeBuild() {
    return this[_values].genomeBuild;
  }
  set genomeBuild(value) {
    return this[_values].genomeBuild = value;
  }
  get _genomeBuild() {
    if (!this[_values]._genomeBuild) {
      const klass = require('./Element');
      this[_values]._genomeBuild = new klass();
    }
    return this[_values]._genomeBuild;
  }
  set _genomeBuild(value) {
    const klass = require('./Element');
    return this[_values]._genomeBuild = new klass(value);
  }
  get referenceSeqId() {
    if (!this[_values].referenceSeqId) {
      const klass = require('./CodeableConcept');
      this[_values].referenceSeqId = new klass();
    }
    return this[_values].referenceSeqId;
  }
  set referenceSeqId(value) {
    const klass = require('./CodeableConcept');
    return this[_values].referenceSeqId = new klass(value);
  }
  get referenceSeqPointer() {
    if (!this[_values].referenceSeqPointer) {
      const klass = require('./Reference');
      this[_values].referenceSeqPointer = new klass();
    }
    return this[_values].referenceSeqPointer;
  }
  set referenceSeqPointer(value) {
    const klass = require('./Reference');
    return this[_values].referenceSeqPointer = new klass(value);
  }
  get referenceSeqString() {
    return this[_values].referenceSeqString;
  }
  set referenceSeqString(value) {
    return this[_values].referenceSeqString = value;
  }
  get _referenceSeqString() {
    if (!this[_values]._referenceSeqString) {
      const klass = require('./Element');
      this[_values]._referenceSeqString = new klass();
    }
    return this[_values]._referenceSeqString;
  }
  set _referenceSeqString(value) {
    const klass = require('./Element');
    return this[_values]._referenceSeqString = new klass(value);
  }
  get strand() {
    return this[_values].strand;
  }
  set strand(value) {
    return this[_values].strand = value;
  }
  get _strand() {
    if (!this[_values]._strand) {
      const klass = require('./Element');
      this[_values]._strand = new klass();
    }
    return this[_values]._strand;
  }
  set _strand(value) {
    const klass = require('./Element');
    return this[_values]._strand = new klass(value);
  }
  get windowStart() {
    return this[_values].windowStart;
  }
  set windowStart(value) {
    return this[_values].windowStart = value;
  }
  get _windowStart() {
    if (!this[_values]._windowStart) {
      const klass = require('./Element');
      this[_values]._windowStart = new klass();
    }
    return this[_values]._windowStart;
  }
  set _windowStart(value) {
    const klass = require('./Element');
    return this[_values]._windowStart = new klass(value);
  }
  get windowEnd() {
    return this[_values].windowEnd;
  }
  set windowEnd(value) {
    return this[_values].windowEnd = value;
  }
  get _windowEnd() {
    if (!this[_values]._windowEnd) {
      const klass = require('./Element');
      this[_values]._windowEnd = new klass();
    }
    return this[_values]._windowEnd;
  }
  set _windowEnd(value) {
    const klass = require('./Element');
    return this[_values]._windowEnd = new klass(value);
  }
}
module.exports = Sequence_ReferenceSeq;