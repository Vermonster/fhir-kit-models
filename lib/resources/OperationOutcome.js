const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const DomainResource = require('./DomainResource');

class OperationOutcome extends DomainResource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof OperationOutcome ||
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

  get issue() {
    if (!isPresent(this[_values].issue)) {
      const klass = require('./OperationOutcomeIssue');
      this[_values].issue = ArrayProxy(klass);
    }
    return this[_values].issue;
  }

  set issue(value) {
    const klass = require('./OperationOutcomeIssue');
    this[_values].issue = ArrayProxy(klass);
    value.forEach(entry => this[_values].issue.push(entry));
    return this[_values].issue;
  }
}

module.exports = OperationOutcome;

