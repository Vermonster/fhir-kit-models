const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class Contract extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Contract || values instanceof DomainResource) {
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
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }

  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
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

  get issued() {
    return this[_values].issued;
  }

  set issued(value) {
    return this[_values].issued = value;
  }

  get _issued() {
    if (!isPresent(this[_values]._issued)) {
      const klass = require('./Element');
      this[_values]._issued = new klass();
    }
    return this[_values]._issued;
  }

  set _issued(value) {
    const klass = require('./Element');
    return this[_values]._issued = new klass(value);
  }

  get applies() {
    if (!isPresent(this[_values].applies)) {
      const klass = require('./Period');
      this[_values].applies = new klass();
    }
    return this[_values].applies;
  }

  set applies(value) {
    const klass = require('./Period');
    return this[_values].applies = new klass(value);
  }

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = ArrayProxy(klass);
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    this[_values].subject = ArrayProxy(klass);
    value.forEach(entry => this[_values].subject.push(entry));
    return this[_values].subject;
  }

  get topic() {
    if (!isPresent(this[_values].topic)) {
      const klass = require('./Reference');
      this[_values].topic = ArrayProxy(klass);
    }
    return this[_values].topic;
  }

  set topic(value) {
    const klass = require('./Reference');
    this[_values].topic = ArrayProxy(klass);
    value.forEach(entry => this[_values].topic.push(entry));
    return this[_values].topic;
  }

  get authority() {
    if (!isPresent(this[_values].authority)) {
      const klass = require('./Reference');
      this[_values].authority = ArrayProxy(klass);
    }
    return this[_values].authority;
  }

  set authority(value) {
    const klass = require('./Reference');
    this[_values].authority = ArrayProxy(klass);
    value.forEach(entry => this[_values].authority.push(entry));
    return this[_values].authority;
  }

  get domain() {
    if (!isPresent(this[_values].domain)) {
      const klass = require('./Reference');
      this[_values].domain = ArrayProxy(klass);
    }
    return this[_values].domain;
  }

  set domain(value) {
    const klass = require('./Reference');
    this[_values].domain = ArrayProxy(klass);
    value.forEach(entry => this[_values].domain.push(entry));
    return this[_values].domain;
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

  get subType() {
    if (!isPresent(this[_values].subType)) {
      const klass = require('./CodeableConcept');
      this[_values].subType = ArrayProxy(klass);
    }
    return this[_values].subType;
  }

  set subType(value) {
    const klass = require('./CodeableConcept');
    this[_values].subType = ArrayProxy(klass);
    value.forEach(entry => this[_values].subType.push(entry));
    return this[_values].subType;
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./CodeableConcept');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./CodeableConcept');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }

  get actionReason() {
    if (!isPresent(this[_values].actionReason)) {
      const klass = require('./CodeableConcept');
      this[_values].actionReason = ArrayProxy(klass);
    }
    return this[_values].actionReason;
  }

  set actionReason(value) {
    const klass = require('./CodeableConcept');
    this[_values].actionReason = ArrayProxy(klass);
    value.forEach(entry => this[_values].actionReason.push(entry));
    return this[_values].actionReason;
  }

  get decisionType() {
    if (!isPresent(this[_values].decisionType)) {
      const klass = require('./CodeableConcept');
      this[_values].decisionType = new klass();
    }
    return this[_values].decisionType;
  }

  set decisionType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].decisionType = new klass(value);
  }

  get contentDerivative() {
    if (!isPresent(this[_values].contentDerivative)) {
      const klass = require('./CodeableConcept');
      this[_values].contentDerivative = new klass();
    }
    return this[_values].contentDerivative;
  }

  set contentDerivative(value) {
    const klass = require('./CodeableConcept');
    return this[_values].contentDerivative = new klass(value);
  }

  get securityLabel() {
    if (!isPresent(this[_values].securityLabel)) {
      const klass = require('./Coding');
      this[_values].securityLabel = ArrayProxy(klass);
    }
    return this[_values].securityLabel;
  }

  set securityLabel(value) {
    const klass = require('./Coding');
    this[_values].securityLabel = ArrayProxy(klass);
    value.forEach(entry => this[_values].securityLabel.push(entry));
    return this[_values].securityLabel;
  }

  get agent() {
    if (!isPresent(this[_values].agent)) {
      const klass = require('./Contract_Agent');
      this[_values].agent = ArrayProxy(klass);
    }
    return this[_values].agent;
  }

  set agent(value) {
    const klass = require('./Contract_Agent');
    this[_values].agent = ArrayProxy(klass);
    value.forEach(entry => this[_values].agent.push(entry));
    return this[_values].agent;
  }

  get signer() {
    if (!isPresent(this[_values].signer)) {
      const klass = require('./Contract_Signer');
      this[_values].signer = ArrayProxy(klass);
    }
    return this[_values].signer;
  }

  set signer(value) {
    const klass = require('./Contract_Signer');
    this[_values].signer = ArrayProxy(klass);
    value.forEach(entry => this[_values].signer.push(entry));
    return this[_values].signer;
  }

  get valuedItem() {
    if (!isPresent(this[_values].valuedItem)) {
      const klass = require('./Contract_ValuedItem');
      this[_values].valuedItem = ArrayProxy(klass);
    }
    return this[_values].valuedItem;
  }

  set valuedItem(value) {
    const klass = require('./Contract_ValuedItem');
    this[_values].valuedItem = ArrayProxy(klass);
    value.forEach(entry => this[_values].valuedItem.push(entry));
    return this[_values].valuedItem;
  }

  get term() {
    if (!isPresent(this[_values].term)) {
      const klass = require('./Contract_Term');
      this[_values].term = ArrayProxy(klass);
    }
    return this[_values].term;
  }

  set term(value) {
    const klass = require('./Contract_Term');
    this[_values].term = ArrayProxy(klass);
    value.forEach(entry => this[_values].term.push(entry));
    return this[_values].term;
  }

  get bindingAttachment() {
    if (!isPresent(this[_values].bindingAttachment)) {
      const klass = require('./Attachment');
      this[_values].bindingAttachment = new klass();
    }
    return this[_values].bindingAttachment;
  }

  set bindingAttachment(value) {
    const klass = require('./Attachment');
    return this[_values].bindingAttachment = new klass(value);
  }

  get bindingReference() {
    if (!isPresent(this[_values].bindingReference)) {
      const klass = require('./Reference');
      this[_values].bindingReference = new klass();
    }
    return this[_values].bindingReference;
  }

  set bindingReference(value) {
    const klass = require('./Reference');
    return this[_values].bindingReference = new klass(value);
  }

  get friendly() {
    if (!isPresent(this[_values].friendly)) {
      const klass = require('./Contract_Friendly');
      this[_values].friendly = ArrayProxy(klass);
    }
    return this[_values].friendly;
  }

  set friendly(value) {
    const klass = require('./Contract_Friendly');
    this[_values].friendly = ArrayProxy(klass);
    value.forEach(entry => this[_values].friendly.push(entry));
    return this[_values].friendly;
  }

  get legal() {
    if (!isPresent(this[_values].legal)) {
      const klass = require('./Contract_Legal');
      this[_values].legal = ArrayProxy(klass);
    }
    return this[_values].legal;
  }

  set legal(value) {
    const klass = require('./Contract_Legal');
    this[_values].legal = ArrayProxy(klass);
    value.forEach(entry => this[_values].legal.push(entry));
    return this[_values].legal;
  }

  get rule() {
    if (!isPresent(this[_values].rule)) {
      const klass = require('./Contract_Rule');
      this[_values].rule = ArrayProxy(klass);
    }
    return this[_values].rule;
  }

  set rule(value) {
    const klass = require('./Contract_Rule');
    this[_values].rule = ArrayProxy(klass);
    value.forEach(entry => this[_values].rule.push(entry));
    return this[_values].rule;
  }
}

module.exports = Contract;

