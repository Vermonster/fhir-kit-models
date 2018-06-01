
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class ResearchSubject extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    this.resourceType = 'ResearchSubject';
    if (values instanceof ResearchSubject ||
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

  get study() {
    if (!isPresent(this[_values].study)) {
      const klass = require('./Reference');
      this[_values].study = new klass();
    }
    return this[_values].study;
  }

  set study(value) {
    const klass = require('./Reference');
    return this[_values].study = new klass(value);
  }

  get individual() {
    if (!isPresent(this[_values].individual)) {
      const klass = require('./Reference');
      this[_values].individual = new klass();
    }
    return this[_values].individual;
  }

  set individual(value) {
    const klass = require('./Reference');
    return this[_values].individual = new klass(value);
  }

  get assignedArm() {
    return this[_values].assignedArm;
  }

  set assignedArm(value) {
    return this[_values].assignedArm = value;
  }

  get _assignedArm() {
    if (!isPresent(this[_values]._assignedArm)) {
      const klass = require('./Element');
      this[_values]._assignedArm = new klass();
    }
    return this[_values]._assignedArm;
  }

  set _assignedArm(value) {
    const klass = require('./Element');
    return this[_values]._assignedArm = new klass(value);
  }

  get actualArm() {
    return this[_values].actualArm;
  }

  set actualArm(value) {
    return this[_values].actualArm = value;
  }

  get _actualArm() {
    if (!isPresent(this[_values]._actualArm)) {
      const klass = require('./Element');
      this[_values]._actualArm = new klass();
    }
    return this[_values]._actualArm;
  }

  set _actualArm(value) {
    const klass = require('./Element');
    return this[_values]._actualArm = new klass(value);
  }

  get consent() {
    if (!isPresent(this[_values].consent)) {
      const klass = require('./Reference');
      this[_values].consent = new klass();
    }
    return this[_values].consent;
  }

  set consent(value) {
    const klass = require('./Reference');
    return this[_values].consent = new klass(value);
  }
}

module.exports = ResearchSubject;
