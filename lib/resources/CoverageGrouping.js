
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class CoverageGrouping extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof CoverageGrouping || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get group() {
    return this[_values].group;
  }

  set group(value) {
    return this[_values].group = value;
  }

  get _group() {
    if (!isPresent(this[_values]._group)) {
      const klass = require('./Element');
      this[_values]._group = new klass();
    }
    return this[_values]._group;
  }

  set _group(value) {
    const klass = require('./Element');
    return this[_values]._group = new klass(value);
  }

  get groupDisplay() {
    return this[_values].groupDisplay;
  }

  set groupDisplay(value) {
    return this[_values].groupDisplay = value;
  }

  get _groupDisplay() {
    if (!isPresent(this[_values]._groupDisplay)) {
      const klass = require('./Element');
      this[_values]._groupDisplay = new klass();
    }
    return this[_values]._groupDisplay;
  }

  set _groupDisplay(value) {
    const klass = require('./Element');
    return this[_values]._groupDisplay = new klass(value);
  }

  get subGroup() {
    return this[_values].subGroup;
  }

  set subGroup(value) {
    return this[_values].subGroup = value;
  }

  get _subGroup() {
    if (!isPresent(this[_values]._subGroup)) {
      const klass = require('./Element');
      this[_values]._subGroup = new klass();
    }
    return this[_values]._subGroup;
  }

  set _subGroup(value) {
    const klass = require('./Element');
    return this[_values]._subGroup = new klass(value);
  }

  get subGroupDisplay() {
    return this[_values].subGroupDisplay;
  }

  set subGroupDisplay(value) {
    return this[_values].subGroupDisplay = value;
  }

  get _subGroupDisplay() {
    if (!isPresent(this[_values]._subGroupDisplay)) {
      const klass = require('./Element');
      this[_values]._subGroupDisplay = new klass();
    }
    return this[_values]._subGroupDisplay;
  }

  set _subGroupDisplay(value) {
    const klass = require('./Element');
    return this[_values]._subGroupDisplay = new klass(value);
  }

  get plan() {
    return this[_values].plan;
  }

  set plan(value) {
    return this[_values].plan = value;
  }

  get _plan() {
    if (!isPresent(this[_values]._plan)) {
      const klass = require('./Element');
      this[_values]._plan = new klass();
    }
    return this[_values]._plan;
  }

  set _plan(value) {
    const klass = require('./Element');
    return this[_values]._plan = new klass(value);
  }

  get planDisplay() {
    return this[_values].planDisplay;
  }

  set planDisplay(value) {
    return this[_values].planDisplay = value;
  }

  get _planDisplay() {
    if (!isPresent(this[_values]._planDisplay)) {
      const klass = require('./Element');
      this[_values]._planDisplay = new klass();
    }
    return this[_values]._planDisplay;
  }

  set _planDisplay(value) {
    const klass = require('./Element');
    return this[_values]._planDisplay = new klass(value);
  }

  get subPlan() {
    return this[_values].subPlan;
  }

  set subPlan(value) {
    return this[_values].subPlan = value;
  }

  get _subPlan() {
    if (!isPresent(this[_values]._subPlan)) {
      const klass = require('./Element');
      this[_values]._subPlan = new klass();
    }
    return this[_values]._subPlan;
  }

  set _subPlan(value) {
    const klass = require('./Element');
    return this[_values]._subPlan = new klass(value);
  }

  get subPlanDisplay() {
    return this[_values].subPlanDisplay;
  }

  set subPlanDisplay(value) {
    return this[_values].subPlanDisplay = value;
  }

  get _subPlanDisplay() {
    if (!isPresent(this[_values]._subPlanDisplay)) {
      const klass = require('./Element');
      this[_values]._subPlanDisplay = new klass();
    }
    return this[_values]._subPlanDisplay;
  }

  set _subPlanDisplay(value) {
    const klass = require('./Element');
    return this[_values]._subPlanDisplay = new klass(value);
  }

  get class() {
    return this[_values].class;
  }

  set class(value) {
    return this[_values].class = value;
  }

  get _class() {
    if (!isPresent(this[_values]._class)) {
      const klass = require('./Element');
      this[_values]._class = new klass();
    }
    return this[_values]._class;
  }

  set _class(value) {
    const klass = require('./Element');
    return this[_values]._class = new klass(value);
  }

  get classDisplay() {
    return this[_values].classDisplay;
  }

  set classDisplay(value) {
    return this[_values].classDisplay = value;
  }

  get _classDisplay() {
    if (!isPresent(this[_values]._classDisplay)) {
      const klass = require('./Element');
      this[_values]._classDisplay = new klass();
    }
    return this[_values]._classDisplay;
  }

  set _classDisplay(value) {
    const klass = require('./Element');
    return this[_values]._classDisplay = new klass(value);
  }

  get subClass() {
    return this[_values].subClass;
  }

  set subClass(value) {
    return this[_values].subClass = value;
  }

  get _subClass() {
    if (!isPresent(this[_values]._subClass)) {
      const klass = require('./Element');
      this[_values]._subClass = new klass();
    }
    return this[_values]._subClass;
  }

  set _subClass(value) {
    const klass = require('./Element');
    return this[_values]._subClass = new klass(value);
  }

  get subClassDisplay() {
    return this[_values].subClassDisplay;
  }

  set subClassDisplay(value) {
    return this[_values].subClassDisplay = value;
  }

  get _subClassDisplay() {
    if (!isPresent(this[_values]._subClassDisplay)) {
      const klass = require('./Element');
      this[_values]._subClassDisplay = new klass();
    }
    return this[_values]._subClassDisplay;
  }

  set _subClassDisplay(value) {
    const klass = require('./Element');
    return this[_values]._subClassDisplay = new klass(value);
  }
}

module.exports = CoverageGrouping;

