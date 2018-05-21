const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class PlanDefinition_Action extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof PlanDefinition_Action || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get label() {
    return this[_values].label;
  }

  set label(value) {
    return this[_values].label = value;
  }

  get _label() {
    if (!isPresent(this[_values]._label)) {
      const klass = require('./Element');
      this[_values]._label = new klass();
    }
    return this[_values]._label;
  }

  set _label(value) {
    const klass = require('./Element');
    return this[_values]._label = new klass(value);
  }

  get title() {
    return this[_values].title;
  }

  set title(value) {
    return this[_values].title = value;
  }

  get _title() {
    if (!isPresent(this[_values]._title)) {
      const klass = require('./Element');
      this[_values]._title = new klass();
    }
    return this[_values]._title;
  }

  set _title(value) {
    const klass = require('./Element');
    return this[_values]._title = new klass(value);
  }

  get description() {
    return this[_values].description;
  }

  set description(value) {
    return this[_values].description = value;
  }

  get _description() {
    if (!isPresent(this[_values]._description)) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }

  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }

  get textEquivalent() {
    return this[_values].textEquivalent;
  }

  set textEquivalent(value) {
    return this[_values].textEquivalent = value;
  }

  get _textEquivalent() {
    if (!isPresent(this[_values]._textEquivalent)) {
      const klass = require('./Element');
      this[_values]._textEquivalent = new klass();
    }
    return this[_values]._textEquivalent;
  }

  set _textEquivalent(value) {
    const klass = require('./Element');
    return this[_values]._textEquivalent = new klass(value);
  }

  get code() {
    if (!isPresent(this[_values].code)) {
      const klass = require('./CodeableConcept');
      this[_values].code = ArrayProxy(klass);
    }
    return this[_values].code;
  }

  set code(value) {
    const klass = require('./CodeableConcept');
    this[_values].code = ArrayProxy(klass);
    value.forEach(entry => this[_values].code.push(entry));
    return this[_values].code;
  }

  get reason() {
    if (!isPresent(this[_values].reason)) {
      const klass = require('./CodeableConcept');
      this[_values].reason = ArrayProxy(klass);
    }
    return this[_values].reason;
  }

  set reason(value) {
    const klass = require('./CodeableConcept');
    this[_values].reason = ArrayProxy(klass);
    value.forEach(entry => this[_values].reason.push(entry));
    return this[_values].reason;
  }

  get documentation() {
    if (!isPresent(this[_values].documentation)) {
      const klass = require('./RelatedArtifact');
      this[_values].documentation = ArrayProxy(klass);
    }
    return this[_values].documentation;
  }

  set documentation(value) {
    const klass = require('./RelatedArtifact');
    this[_values].documentation = ArrayProxy(klass);
    value.forEach(entry => this[_values].documentation.push(entry));
    return this[_values].documentation;
  }

  get goalId() {
    return this[_values].goalId;
  }

  set goalId(value) {
    return this[_values].goalId = value;
  }

  get _goalId() {
    if (!isPresent(this[_values]._goalId)) {
      const klass = require('./Element');
      this[_values]._goalId = ArrayProxy(klass);
    }
    return this[_values]._goalId;
  }

  set _goalId(value) {
    const klass = require('./Element');
    this[_values]._goalId = ArrayProxy(klass);
    value.forEach(entry => this[_values]._goalId.push(entry));
    return this[_values]._goalId;
  }

  get triggerDefinition() {
    if (!isPresent(this[_values].triggerDefinition)) {
      const klass = require('./TriggerDefinition');
      this[_values].triggerDefinition = ArrayProxy(klass);
    }
    return this[_values].triggerDefinition;
  }

  set triggerDefinition(value) {
    const klass = require('./TriggerDefinition');
    this[_values].triggerDefinition = ArrayProxy(klass);
    value.forEach(entry => this[_values].triggerDefinition.push(entry));
    return this[_values].triggerDefinition;
  }

  get condition() {
    if (!isPresent(this[_values].condition)) {
      const klass = require('./PlanDefinition_Condition');
      this[_values].condition = ArrayProxy(klass);
    }
    return this[_values].condition;
  }

  set condition(value) {
    const klass = require('./PlanDefinition_Condition');
    this[_values].condition = ArrayProxy(klass);
    value.forEach(entry => this[_values].condition.push(entry));
    return this[_values].condition;
  }

  get input() {
    if (!isPresent(this[_values].input)) {
      const klass = require('./DataRequirement');
      this[_values].input = ArrayProxy(klass);
    }
    return this[_values].input;
  }

  set input(value) {
    const klass = require('./DataRequirement');
    this[_values].input = ArrayProxy(klass);
    value.forEach(entry => this[_values].input.push(entry));
    return this[_values].input;
  }

  get output() {
    if (!isPresent(this[_values].output)) {
      const klass = require('./DataRequirement');
      this[_values].output = ArrayProxy(klass);
    }
    return this[_values].output;
  }

  set output(value) {
    const klass = require('./DataRequirement');
    this[_values].output = ArrayProxy(klass);
    value.forEach(entry => this[_values].output.push(entry));
    return this[_values].output;
  }

  get relatedAction() {
    if (!isPresent(this[_values].relatedAction)) {
      const klass = require('./PlanDefinition_RelatedAction');
      this[_values].relatedAction = ArrayProxy(klass);
    }
    return this[_values].relatedAction;
  }

  set relatedAction(value) {
    const klass = require('./PlanDefinition_RelatedAction');
    this[_values].relatedAction = ArrayProxy(klass);
    value.forEach(entry => this[_values].relatedAction.push(entry));
    return this[_values].relatedAction;
  }

  get timingDateTime() {
    return this[_values].timingDateTime;
  }

  set timingDateTime(value) {
    return this[_values].timingDateTime = value;
  }

  get _timingDateTime() {
    if (!isPresent(this[_values]._timingDateTime)) {
      const klass = require('./Element');
      this[_values]._timingDateTime = new klass();
    }
    return this[_values]._timingDateTime;
  }

  set _timingDateTime(value) {
    const klass = require('./Element');
    return this[_values]._timingDateTime = new klass(value);
  }

  get timingPeriod() {
    if (!isPresent(this[_values].timingPeriod)) {
      const klass = require('./Period');
      this[_values].timingPeriod = new klass();
    }
    return this[_values].timingPeriod;
  }

  set timingPeriod(value) {
    const klass = require('./Period');
    return this[_values].timingPeriod = new klass(value);
  }

  get timingDuration() {
    if (!isPresent(this[_values].timingDuration)) {
      const klass = require('./Duration');
      this[_values].timingDuration = new klass();
    }
    return this[_values].timingDuration;
  }

  set timingDuration(value) {
    const klass = require('./Duration');
    return this[_values].timingDuration = new klass(value);
  }

  get timingRange() {
    if (!isPresent(this[_values].timingRange)) {
      const klass = require('./Range');
      this[_values].timingRange = new klass();
    }
    return this[_values].timingRange;
  }

  set timingRange(value) {
    const klass = require('./Range');
    return this[_values].timingRange = new klass(value);
  }

  get timingTiming() {
    if (!isPresent(this[_values].timingTiming)) {
      const klass = require('./Timing');
      this[_values].timingTiming = new klass();
    }
    return this[_values].timingTiming;
  }

  set timingTiming(value) {
    const klass = require('./Timing');
    return this[_values].timingTiming = new klass(value);
  }

  get participant() {
    if (!isPresent(this[_values].participant)) {
      const klass = require('./PlanDefinition_Participant');
      this[_values].participant = ArrayProxy(klass);
    }
    return this[_values].participant;
  }

  set participant(value) {
    const klass = require('./PlanDefinition_Participant');
    this[_values].participant = ArrayProxy(klass);
    value.forEach(entry => this[_values].participant.push(entry));
    return this[_values].participant;
  }

  get type() {
    if (!isPresent(this[_values].type)) {
      const klass = require('./Coding');
      this[_values].type = new klass();
    }
    return this[_values].type;
  }

  set type(value) {
    const klass = require('./Coding');
    return this[_values].type = new klass(value);
  }

  get groupingBehavior() {
    return this[_values].groupingBehavior;
  }

  set groupingBehavior(value) {
    return this[_values].groupingBehavior = value;
  }

  get _groupingBehavior() {
    if (!isPresent(this[_values]._groupingBehavior)) {
      const klass = require('./Element');
      this[_values]._groupingBehavior = new klass();
    }
    return this[_values]._groupingBehavior;
  }

  set _groupingBehavior(value) {
    const klass = require('./Element');
    return this[_values]._groupingBehavior = new klass(value);
  }

  get selectionBehavior() {
    return this[_values].selectionBehavior;
  }

  set selectionBehavior(value) {
    return this[_values].selectionBehavior = value;
  }

  get _selectionBehavior() {
    if (!isPresent(this[_values]._selectionBehavior)) {
      const klass = require('./Element');
      this[_values]._selectionBehavior = new klass();
    }
    return this[_values]._selectionBehavior;
  }

  set _selectionBehavior(value) {
    const klass = require('./Element');
    return this[_values]._selectionBehavior = new klass(value);
  }

  get requiredBehavior() {
    return this[_values].requiredBehavior;
  }

  set requiredBehavior(value) {
    return this[_values].requiredBehavior = value;
  }

  get _requiredBehavior() {
    if (!isPresent(this[_values]._requiredBehavior)) {
      const klass = require('./Element');
      this[_values]._requiredBehavior = new klass();
    }
    return this[_values]._requiredBehavior;
  }

  set _requiredBehavior(value) {
    const klass = require('./Element');
    return this[_values]._requiredBehavior = new klass(value);
  }

  get precheckBehavior() {
    return this[_values].precheckBehavior;
  }

  set precheckBehavior(value) {
    return this[_values].precheckBehavior = value;
  }

  get _precheckBehavior() {
    if (!isPresent(this[_values]._precheckBehavior)) {
      const klass = require('./Element');
      this[_values]._precheckBehavior = new klass();
    }
    return this[_values]._precheckBehavior;
  }

  set _precheckBehavior(value) {
    const klass = require('./Element');
    return this[_values]._precheckBehavior = new klass(value);
  }

  get cardinalityBehavior() {
    return this[_values].cardinalityBehavior;
  }

  set cardinalityBehavior(value) {
    return this[_values].cardinalityBehavior = value;
  }

  get _cardinalityBehavior() {
    if (!isPresent(this[_values]._cardinalityBehavior)) {
      const klass = require('./Element');
      this[_values]._cardinalityBehavior = new klass();
    }
    return this[_values]._cardinalityBehavior;
  }

  set _cardinalityBehavior(value) {
    const klass = require('./Element');
    return this[_values]._cardinalityBehavior = new klass(value);
  }

  get definition() {
    if (!isPresent(this[_values].definition)) {
      const klass = require('./Reference');
      this[_values].definition = new klass();
    }
    return this[_values].definition;
  }

  set definition(value) {
    const klass = require('./Reference');
    return this[_values].definition = new klass(value);
  }

  get transform() {
    if (!isPresent(this[_values].transform)) {
      const klass = require('./Reference');
      this[_values].transform = new klass();
    }
    return this[_values].transform;
  }

  set transform(value) {
    const klass = require('./Reference');
    return this[_values].transform = new klass(value);
  }

  get dynamicValue() {
    if (!isPresent(this[_values].dynamicValue)) {
      const klass = require('./PlanDefinition_DynamicValue');
      this[_values].dynamicValue = ArrayProxy(klass);
    }
    return this[_values].dynamicValue;
  }

  set dynamicValue(value) {
    const klass = require('./PlanDefinition_DynamicValue');
    this[_values].dynamicValue = ArrayProxy(klass);
    value.forEach(entry => this[_values].dynamicValue.push(entry));
    return this[_values].dynamicValue;
  }

  get action() {
    if (!isPresent(this[_values].action)) {
      const klass = require('./PlanDefinition_Action');
      this[_values].action = ArrayProxy(klass);
    }
    return this[_values].action;
  }

  set action(value) {
    const klass = require('./PlanDefinition_Action');
    this[_values].action = ArrayProxy(klass);
    value.forEach(entry => this[_values].action.push(entry));
    return this[_values].action;
  }
}

module.exports = PlanDefinition_Action;

