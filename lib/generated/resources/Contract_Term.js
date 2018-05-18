const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class Contract_Term extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Contract_Term || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get identifier() {
    if (!this[_values].identifier) {
      const klass = require('./Identifier');
      this[_values].identifier = new klass();
    }
    return this[_values].identifier;
  }
  set identifier(value) {
    const klass = require('./Identifier');
    return this[_values].identifier = new klass(value);
  }
  get issued() {
    return this[_values].issued;
  }
  set issued(value) {
    return this[_values].issued = value;
  }
  get _issued() {
    if (!this[_values]._issued) {
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
    if (!this[_values].applies) {
      const klass = require('./Period');
      this[_values].applies = new klass();
    }
    return this[_values].applies;
  }
  set applies(value) {
    const klass = require('./Period');
    return this[_values].applies = new klass(value);
  }
  get type() {
    if (!this[_values].type) {
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
    if (!this[_values].subType) {
      const klass = require('./CodeableConcept');
      this[_values].subType = new klass();
    }
    return this[_values].subType;
  }
  set subType(value) {
    const klass = require('./CodeableConcept');
    return this[_values].subType = new klass(value);
  }
  get topic() {
    if (!this[_values].topic) {
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
  get action() {
    if (!this[_values].action) {
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
    if (!this[_values].actionReason) {
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
  get securityLabel() {
    if (!this[_values].securityLabel) {
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
    if (!this[_values].agent) {
      const klass = require('./Contract_Agent1');
      this[_values].agent = ArrayProxy(klass);
    }
    return this[_values].agent;
  }
  set agent(value) {
    const klass = require('./Contract_Agent1');
    this[_values].agent = ArrayProxy(klass);
    value.forEach(entry => this[_values].agent.push(entry));
    return this[_values].agent;
  }
  get text() {
    return this[_values].text;
  }
  set text(value) {
    return this[_values].text = value;
  }
  get _text() {
    if (!this[_values]._text) {
      const klass = require('./Element');
      this[_values]._text = new klass();
    }
    return this[_values]._text;
  }
  set _text(value) {
    const klass = require('./Element');
    return this[_values]._text = new klass(value);
  }
  get valuedItem() {
    if (!this[_values].valuedItem) {
      const klass = require('./Contract_ValuedItem1');
      this[_values].valuedItem = ArrayProxy(klass);
    }
    return this[_values].valuedItem;
  }
  set valuedItem(value) {
    const klass = require('./Contract_ValuedItem1');
    this[_values].valuedItem = ArrayProxy(klass);
    value.forEach(entry => this[_values].valuedItem.push(entry));
    return this[_values].valuedItem;
  }
  get group() {
    if (!this[_values].group) {
      const klass = require('./Contract_Term');
      this[_values].group = ArrayProxy(klass);
    }
    return this[_values].group;
  }
  set group(value) {
    const klass = require('./Contract_Term');
    this[_values].group = ArrayProxy(klass);
    value.forEach(entry => this[_values].group.push(entry));
    return this[_values].group;
  }
}
module.exports = Contract_Term;