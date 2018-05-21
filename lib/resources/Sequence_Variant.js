const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class Sequence_Variant extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Sequence_Variant || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get start() {
    return this[_values].start;
  }

  set start(value) {
    return this[_values].start = value;
  }

  get _start() {
    if (!isPresent(this[_values]._start)) {
      const klass = require('./Element');
      this[_values]._start = new klass();
    }
    return this[_values]._start;
  }

  set _start(value) {
    const klass = require('./Element');
    return this[_values]._start = new klass(value);
  }

  get end() {
    return this[_values].end;
  }

  set end(value) {
    return this[_values].end = value;
  }

  get _end() {
    if (!isPresent(this[_values]._end)) {
      const klass = require('./Element');
      this[_values]._end = new klass();
    }
    return this[_values]._end;
  }

  set _end(value) {
    const klass = require('./Element');
    return this[_values]._end = new klass(value);
  }

  get observedAllele() {
    return this[_values].observedAllele;
  }

  set observedAllele(value) {
    return this[_values].observedAllele = value;
  }

  get _observedAllele() {
    if (!isPresent(this[_values]._observedAllele)) {
      const klass = require('./Element');
      this[_values]._observedAllele = new klass();
    }
    return this[_values]._observedAllele;
  }

  set _observedAllele(value) {
    const klass = require('./Element');
    return this[_values]._observedAllele = new klass(value);
  }

  get referenceAllele() {
    return this[_values].referenceAllele;
  }

  set referenceAllele(value) {
    return this[_values].referenceAllele = value;
  }

  get _referenceAllele() {
    if (!isPresent(this[_values]._referenceAllele)) {
      const klass = require('./Element');
      this[_values]._referenceAllele = new klass();
    }
    return this[_values]._referenceAllele;
  }

  set _referenceAllele(value) {
    const klass = require('./Element');
    return this[_values]._referenceAllele = new klass(value);
  }

  get cigar() {
    return this[_values].cigar;
  }

  set cigar(value) {
    return this[_values].cigar = value;
  }

  get _cigar() {
    if (!isPresent(this[_values]._cigar)) {
      const klass = require('./Element');
      this[_values]._cigar = new klass();
    }
    return this[_values]._cigar;
  }

  set _cigar(value) {
    const klass = require('./Element');
    return this[_values]._cigar = new klass(value);
  }

  get variantPointer() {
    if (!isPresent(this[_values].variantPointer)) {
      const klass = require('./Reference');
      this[_values].variantPointer = new klass();
    }
    return this[_values].variantPointer;
  }

  set variantPointer(value) {
    const klass = require('./Reference');
    return this[_values].variantPointer = new klass(value);
  }
}

module.exports = Sequence_Variant;

