const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class CarePlan extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'CarePlan';
    if (values instanceof CarePlan ||
      values instanceof DomainResource) {
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

  get definition() {
    if (!isPresent(this[_values].definition)) {
      const klass = require('./Reference');
      this[_values].definition = ArrayProxy(klass);
    }
    return this[_values].definition;
  }

  set definition(value) {
    const klass = require('./Reference');
    this[_values].definition = ArrayProxy(klass);
    value.forEach(entry => this[_values].definition.push(entry));
    return this[_values].definition;
  }

  get basedOn() {
    if (!isPresent(this[_values].basedOn)) {
      const klass = require('./Reference');
      this[_values].basedOn = ArrayProxy(klass);
    }
    return this[_values].basedOn;
  }

  set basedOn(value) {
    const klass = require('./Reference');
    this[_values].basedOn = ArrayProxy(klass);
    value.forEach(entry => this[_values].basedOn.push(entry));
    return this[_values].basedOn;
  }

  get replaces() {
    if (!isPresent(this[_values].replaces)) {
      const klass = require('./Reference');
      this[_values].replaces = ArrayProxy(klass);
    }
    return this[_values].replaces;
  }

  set replaces(value) {
    const klass = require('./Reference');
    this[_values].replaces = ArrayProxy(klass);
    value.forEach(entry => this[_values].replaces.push(entry));
    return this[_values].replaces;
  }

  get partOf() {
    if (!isPresent(this[_values].partOf)) {
      const klass = require('./Reference');
      this[_values].partOf = ArrayProxy(klass);
    }
    return this[_values].partOf;
  }

  set partOf(value) {
    const klass = require('./Reference');
    this[_values].partOf = ArrayProxy(klass);
    value.forEach(entry => this[_values].partOf.push(entry));
    return this[_values].partOf;
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

  get intent() {
    return this[_values].intent;
  }

  set intent(value) {
    return this[_values].intent = value;
  }

  get _intent() {
    if (!isPresent(this[_values]._intent)) {
      const klass = require('./Element');
      this[_values]._intent = new klass();
    }
    return this[_values]._intent;
  }

  set _intent(value) {
    const klass = require('./Element');
    return this[_values]._intent = new klass(value);
  }

  get category() {
    if (!isPresent(this[_values].category)) {
      const klass = require('./CodeableConcept');
      this[_values].category = ArrayProxy(klass);
    }
    return this[_values].category;
  }

  set category(value) {
    const klass = require('./CodeableConcept');
    this[_values].category = ArrayProxy(klass);
    value.forEach(entry => this[_values].category.push(entry));
    return this[_values].category;
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

  get subject() {
    if (!isPresent(this[_values].subject)) {
      const klass = require('./Reference');
      this[_values].subject = new klass();
    }
    return this[_values].subject;
  }

  set subject(value) {
    const klass = require('./Reference');
    return this[_values].subject = new klass(value);
  }

  get context() {
    if (!isPresent(this[_values].context)) {
      const klass = require('./Reference');
      this[_values].context = new klass();
    }
    return this[_values].context;
  }

  set context(value) {
    const klass = require('./Reference');
    return this[_values].context = new klass(value);
  }

  get period() {
    if (!isPresent(this[_values].period)) {
      const klass = require('./Period');
      this[_values].period = new klass();
    }
    return this[_values].period;
  }

  set period(value) {
    const klass = require('./Period');
    return this[_values].period = new klass(value);
  }

  get author() {
    if (!isPresent(this[_values].author)) {
      const klass = require('./Reference');
      this[_values].author = ArrayProxy(klass);
    }
    return this[_values].author;
  }

  set author(value) {
    const klass = require('./Reference');
    this[_values].author = ArrayProxy(klass);
    value.forEach(entry => this[_values].author.push(entry));
    return this[_values].author;
  }

  get careTeam() {
    if (!isPresent(this[_values].careTeam)) {
      const klass = require('./Reference');
      this[_values].careTeam = ArrayProxy(klass);
    }
    return this[_values].careTeam;
  }

  set careTeam(value) {
    const klass = require('./Reference');
    this[_values].careTeam = ArrayProxy(klass);
    value.forEach(entry => this[_values].careTeam.push(entry));
    return this[_values].careTeam;
  }

  get addresses() {
    if (!isPresent(this[_values].addresses)) {
      const klass = require('./Reference');
      this[_values].addresses = ArrayProxy(klass);
    }
    return this[_values].addresses;
  }

  set addresses(value) {
    const klass = require('./Reference');
    this[_values].addresses = ArrayProxy(klass);
    value.forEach(entry => this[_values].addresses.push(entry));
    return this[_values].addresses;
  }

  get supportingInfo() {
    if (!isPresent(this[_values].supportingInfo)) {
      const klass = require('./Reference');
      this[_values].supportingInfo = ArrayProxy(klass);
    }
    return this[_values].supportingInfo;
  }

  set supportingInfo(value) {
    const klass = require('./Reference');
    this[_values].supportingInfo = ArrayProxy(klass);
    value.forEach(entry => this[_values].supportingInfo.push(entry));
    return this[_values].supportingInfo;
  }

  get goal() {
    if (!isPresent(this[_values].goal)) {
      const klass = require('./Reference');
      this[_values].goal = ArrayProxy(klass);
    }
    return this[_values].goal;
  }

  set goal(value) {
    const klass = require('./Reference');
    this[_values].goal = ArrayProxy(klass);
    value.forEach(entry => this[_values].goal.push(entry));
    return this[_values].goal;
  }

  get activity() {
    if (!isPresent(this[_values].activity)) {
      const klass = require('./CarePlanActivity');
      this[_values].activity = ArrayProxy(klass);
    }
    return this[_values].activity;
  }

  set activity(value) {
    const klass = require('./CarePlanActivity');
    this[_values].activity = ArrayProxy(klass);
    value.forEach(entry => this[_values].activity.push(entry));
    return this[_values].activity;
  }

  get note() {
    if (!isPresent(this[_values].note)) {
      const klass = require('./Annotation');
      this[_values].note = ArrayProxy(klass);
    }
    return this[_values].note;
  }

  set note(value) {
    const klass = require('./Annotation');
    this[_values].note = ArrayProxy(klass);
    value.forEach(entry => this[_values].note.push(entry));
    return this[_values].note;
  }
}

module.exports = CarePlan;

