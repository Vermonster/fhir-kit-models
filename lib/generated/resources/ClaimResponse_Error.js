const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ClaimResponse_Error extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClaimResponse_Error || values instanceof BackboneElement) {
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
    if (!this[_values]._sequenceLinkId) {
      const klass = require('./Element');
      this[_values]._sequenceLinkId = new klass();
    }
    return this[_values]._sequenceLinkId;
  }
  set _sequenceLinkId(value) {
    const klass = require('./Element');
    return this[_values]._sequenceLinkId = new klass(value);
  }
  get detailSequenceLinkId() {
    return this[_values].detailSequenceLinkId;
  }
  set detailSequenceLinkId(value) {
    return this[_values].detailSequenceLinkId = value;
  }
  get _detailSequenceLinkId() {
    if (!this[_values]._detailSequenceLinkId) {
      const klass = require('./Element');
      this[_values]._detailSequenceLinkId = new klass();
    }
    return this[_values]._detailSequenceLinkId;
  }
  set _detailSequenceLinkId(value) {
    const klass = require('./Element');
    return this[_values]._detailSequenceLinkId = new klass(value);
  }
  get subdetailSequenceLinkId() {
    return this[_values].subdetailSequenceLinkId;
  }
  set subdetailSequenceLinkId(value) {
    return this[_values].subdetailSequenceLinkId = value;
  }
  get _subdetailSequenceLinkId() {
    if (!this[_values]._subdetailSequenceLinkId) {
      const klass = require('./Element');
      this[_values]._subdetailSequenceLinkId = new klass();
    }
    return this[_values]._subdetailSequenceLinkId;
  }
  set _subdetailSequenceLinkId(value) {
    const klass = require('./Element');
    return this[_values]._subdetailSequenceLinkId = new klass(value);
  }
  get code() {
    if (!this[_values].code) {
      const klass = require('./CodeableConcept');
      this[_values].code = new klass();
    }
    return this[_values].code;
  }
  set code(value) {
    const klass = require('./CodeableConcept');
    return this[_values].code = new klass(value);
  }
}
module.exports = ClaimResponse_Error;