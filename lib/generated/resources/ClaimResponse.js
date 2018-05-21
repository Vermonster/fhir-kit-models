const ArrayProxy = require('../../ArrayProxy');
const { isPresent, _values } = require('../../helpers');

const DomainResource = require('./DomainResource');

class ClaimResponse extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ClaimResponse || values instanceof DomainResource) {
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
    if (!isPresent(this[_values].identifier)) {
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

  get status() {
    return this[_values].status;
  }

  set status(value) {
    return this[_values].status = value;
  }

  get _status() {
    if (!isPresent(this[_values]._status)) {
      const klass = require('./Element');
      this[_values]._status = new klass();
    }
    return this[_values]._status;
  }

  set _status(value) {
    const klass = require('./Element');
    return this[_values]._status = new klass(value);
  }

  get patient() {
    if (!isPresent(this[_values].patient)) {
      const klass = require('./Reference');
      this[_values].patient = new klass();
    }
    return this[_values].patient;
  }

  set patient(value) {
    const klass = require('./Reference');
    return this[_values].patient = new klass(value);
  }

  get created() {
    return this[_values].created;
  }

  set created(value) {
    return this[_values].created = value;
  }

  get _created() {
    if (!isPresent(this[_values]._created)) {
      const klass = require('./Element');
      this[_values]._created = new klass();
    }
    return this[_values]._created;
  }

  set _created(value) {
    const klass = require('./Element');
    return this[_values]._created = new klass(value);
  }

  get insurer() {
    if (!isPresent(this[_values].insurer)) {
      const klass = require('./Reference');
      this[_values].insurer = new klass();
    }
    return this[_values].insurer;
  }

  set insurer(value) {
    const klass = require('./Reference');
    return this[_values].insurer = new klass(value);
  }

  get requestProvider() {
    if (!isPresent(this[_values].requestProvider)) {
      const klass = require('./Reference');
      this[_values].requestProvider = new klass();
    }
    return this[_values].requestProvider;
  }

  set requestProvider(value) {
    const klass = require('./Reference');
    return this[_values].requestProvider = new klass(value);
  }

  get requestOrganization() {
    if (!isPresent(this[_values].requestOrganization)) {
      const klass = require('./Reference');
      this[_values].requestOrganization = new klass();
    }
    return this[_values].requestOrganization;
  }

  set requestOrganization(value) {
    const klass = require('./Reference');
    return this[_values].requestOrganization = new klass(value);
  }

  get request() {
    if (!isPresent(this[_values].request)) {
      const klass = require('./Reference');
      this[_values].request = new klass();
    }
    return this[_values].request;
  }

  set request(value) {
    const klass = require('./Reference');
    return this[_values].request = new klass(value);
  }

  get outcome() {
    if (!isPresent(this[_values].outcome)) {
      const klass = require('./CodeableConcept');
      this[_values].outcome = new klass();
    }
    return this[_values].outcome;
  }

  set outcome(value) {
    const klass = require('./CodeableConcept');
    return this[_values].outcome = new klass(value);
  }

  get disposition() {
    return this[_values].disposition;
  }

  set disposition(value) {
    return this[_values].disposition = value;
  }

  get _disposition() {
    if (!isPresent(this[_values]._disposition)) {
      const klass = require('./Element');
      this[_values]._disposition = new klass();
    }
    return this[_values]._disposition;
  }

  set _disposition(value) {
    const klass = require('./Element');
    return this[_values]._disposition = new klass(value);
  }

  get payeeType() {
    if (!isPresent(this[_values].payeeType)) {
      const klass = require('./CodeableConcept');
      this[_values].payeeType = new klass();
    }
    return this[_values].payeeType;
  }

  set payeeType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].payeeType = new klass(value);
  }

  get item() {
    if (!isPresent(this[_values].item)) {
      const klass = require('./ClaimResponse_Item');
      this[_values].item = ArrayProxy(klass);
    }
    return this[_values].item;
  }

  set item(value) {
    const klass = require('./ClaimResponse_Item');
    this[_values].item = ArrayProxy(klass);
    value.forEach(entry => this[_values].item.push(entry));
    return this[_values].item;
  }

  get addItem() {
    if (!isPresent(this[_values].addItem)) {
      const klass = require('./ClaimResponse_AddItem');
      this[_values].addItem = ArrayProxy(klass);
    }
    return this[_values].addItem;
  }

  set addItem(value) {
    const klass = require('./ClaimResponse_AddItem');
    this[_values].addItem = ArrayProxy(klass);
    value.forEach(entry => this[_values].addItem.push(entry));
    return this[_values].addItem;
  }

  get error() {
    if (!isPresent(this[_values].error)) {
      const klass = require('./ClaimResponse_Error');
      this[_values].error = ArrayProxy(klass);
    }
    return this[_values].error;
  }

  set error(value) {
    const klass = require('./ClaimResponse_Error');
    this[_values].error = ArrayProxy(klass);
    value.forEach(entry => this[_values].error.push(entry));
    return this[_values].error;
  }

  get totalCost() {
    if (!isPresent(this[_values].totalCost)) {
      const klass = require('./Money');
      this[_values].totalCost = new klass();
    }
    return this[_values].totalCost;
  }

  set totalCost(value) {
    const klass = require('./Money');
    return this[_values].totalCost = new klass(value);
  }

  get unallocDeductable() {
    if (!isPresent(this[_values].unallocDeductable)) {
      const klass = require('./Money');
      this[_values].unallocDeductable = new klass();
    }
    return this[_values].unallocDeductable;
  }

  set unallocDeductable(value) {
    const klass = require('./Money');
    return this[_values].unallocDeductable = new klass(value);
  }

  get totalBenefit() {
    if (!isPresent(this[_values].totalBenefit)) {
      const klass = require('./Money');
      this[_values].totalBenefit = new klass();
    }
    return this[_values].totalBenefit;
  }

  set totalBenefit(value) {
    const klass = require('./Money');
    return this[_values].totalBenefit = new klass(value);
  }

  get payment() {
    if (!isPresent(this[_values].payment)) {
      const klass = require('./ClaimResponse_Payment');
      this[_values].payment = new klass();
    }
    return this[_values].payment;
  }

  set payment(value) {
    const klass = require('./ClaimResponse_Payment');
    return this[_values].payment = new klass(value);
  }

  get reserved() {
    if (!isPresent(this[_values].reserved)) {
      const klass = require('./Coding');
      this[_values].reserved = new klass();
    }
    return this[_values].reserved;
  }

  set reserved(value) {
    const klass = require('./Coding');
    return this[_values].reserved = new klass(value);
  }

  get form() {
    if (!isPresent(this[_values].form)) {
      const klass = require('./CodeableConcept');
      this[_values].form = new klass();
    }
    return this[_values].form;
  }

  set form(value) {
    const klass = require('./CodeableConcept');
    return this[_values].form = new klass(value);
  }

  get processNote() {
    if (!isPresent(this[_values].processNote)) {
      const klass = require('./ClaimResponse_ProcessNote');
      this[_values].processNote = ArrayProxy(klass);
    }
    return this[_values].processNote;
  }

  set processNote(value) {
    const klass = require('./ClaimResponse_ProcessNote');
    this[_values].processNote = ArrayProxy(klass);
    value.forEach(entry => this[_values].processNote.push(entry));
    return this[_values].processNote;
  }

  get communicationRequest() {
    if (!isPresent(this[_values].communicationRequest)) {
      const klass = require('./Reference');
      this[_values].communicationRequest = ArrayProxy(klass);
    }
    return this[_values].communicationRequest;
  }

  set communicationRequest(value) {
    const klass = require('./Reference');
    this[_values].communicationRequest = ArrayProxy(klass);
    value.forEach(entry => this[_values].communicationRequest.push(entry));
    return this[_values].communicationRequest;
  }

  get insurance() {
    if (!isPresent(this[_values].insurance)) {
      const klass = require('./ClaimResponse_Insurance');
      this[_values].insurance = ArrayProxy(klass);
    }
    return this[_values].insurance;
  }

  set insurance(value) {
    const klass = require('./ClaimResponse_Insurance');
    this[_values].insurance = ArrayProxy(klass);
    value.forEach(entry => this[_values].insurance.push(entry));
    return this[_values].insurance;
  }
}

module.exports = ClaimResponse;

