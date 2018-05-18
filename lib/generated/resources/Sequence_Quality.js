const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Sequence_Quality extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Sequence_Quality || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
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
  get standardSequence() {
    if (!this[_values].standardSequence) {
      const klass = require('./CodeableConcept');
      this[_values].standardSequence = new klass();
    }
    return this[_values].standardSequence;
  }
  set standardSequence(value) {
    const klass = require('./CodeableConcept');
    return this[_values].standardSequence = new klass(value);
  }
  get start() {
    return this[_values].start;
  }
  set start(value) {
    return this[_values].start = value;
  }
  get _start() {
    if (!this[_values]._start) {
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
    if (!this[_values]._end) {
      const klass = require('./Element');
      this[_values]._end = new klass();
    }
    return this[_values]._end;
  }
  set _end(value) {
    const klass = require('./Element');
    return this[_values]._end = new klass(value);
  }
  get score() {
    if (!this[_values].score) {
      const klass = require('./Quantity');
      this[_values].score = new klass();
    }
    return this[_values].score;
  }
  set score(value) {
    const klass = require('./Quantity');
    return this[_values].score = new klass(value);
  }
  get method() {
    if (!this[_values].method) {
      const klass = require('./CodeableConcept');
      this[_values].method = new klass();
    }
    return this[_values].method;
  }
  set method(value) {
    const klass = require('./CodeableConcept');
    return this[_values].method = new klass(value);
  }
  get truthTP() {
    return this[_values].truthTP;
  }
  set truthTP(value) {
    return this[_values].truthTP = value;
  }
  get _truthTP() {
    if (!this[_values]._truthTP) {
      const klass = require('./Element');
      this[_values]._truthTP = new klass();
    }
    return this[_values]._truthTP;
  }
  set _truthTP(value) {
    const klass = require('./Element');
    return this[_values]._truthTP = new klass(value);
  }
  get queryTP() {
    return this[_values].queryTP;
  }
  set queryTP(value) {
    return this[_values].queryTP = value;
  }
  get _queryTP() {
    if (!this[_values]._queryTP) {
      const klass = require('./Element');
      this[_values]._queryTP = new klass();
    }
    return this[_values]._queryTP;
  }
  set _queryTP(value) {
    const klass = require('./Element');
    return this[_values]._queryTP = new klass(value);
  }
  get truthFN() {
    return this[_values].truthFN;
  }
  set truthFN(value) {
    return this[_values].truthFN = value;
  }
  get _truthFN() {
    if (!this[_values]._truthFN) {
      const klass = require('./Element');
      this[_values]._truthFN = new klass();
    }
    return this[_values]._truthFN;
  }
  set _truthFN(value) {
    const klass = require('./Element');
    return this[_values]._truthFN = new klass(value);
  }
  get queryFP() {
    return this[_values].queryFP;
  }
  set queryFP(value) {
    return this[_values].queryFP = value;
  }
  get _queryFP() {
    if (!this[_values]._queryFP) {
      const klass = require('./Element');
      this[_values]._queryFP = new klass();
    }
    return this[_values]._queryFP;
  }
  set _queryFP(value) {
    const klass = require('./Element');
    return this[_values]._queryFP = new klass(value);
  }
  get gtFP() {
    return this[_values].gtFP;
  }
  set gtFP(value) {
    return this[_values].gtFP = value;
  }
  get _gtFP() {
    if (!this[_values]._gtFP) {
      const klass = require('./Element');
      this[_values]._gtFP = new klass();
    }
    return this[_values]._gtFP;
  }
  set _gtFP(value) {
    const klass = require('./Element');
    return this[_values]._gtFP = new klass(value);
  }
  get precision() {
    return this[_values].precision;
  }
  set precision(value) {
    return this[_values].precision = value;
  }
  get _precision() {
    if (!this[_values]._precision) {
      const klass = require('./Element');
      this[_values]._precision = new klass();
    }
    return this[_values]._precision;
  }
  set _precision(value) {
    const klass = require('./Element');
    return this[_values]._precision = new klass(value);
  }
  get recall() {
    return this[_values].recall;
  }
  set recall(value) {
    return this[_values].recall = value;
  }
  get _recall() {
    if (!this[_values]._recall) {
      const klass = require('./Element');
      this[_values]._recall = new klass();
    }
    return this[_values]._recall;
  }
  set _recall(value) {
    const klass = require('./Element');
    return this[_values]._recall = new klass(value);
  }
  get fScore() {
    return this[_values].fScore;
  }
  set fScore(value) {
    return this[_values].fScore = value;
  }
  get _fScore() {
    if (!this[_values]._fScore) {
      const klass = require('./Element');
      this[_values]._fScore = new klass();
    }
    return this[_values]._fScore;
  }
  set _fScore(value) {
    const klass = require('./Element');
    return this[_values]._fScore = new klass(value);
  }
}
module.exports = Sequence_Quality;