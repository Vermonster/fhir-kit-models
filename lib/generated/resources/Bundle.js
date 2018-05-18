const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const Resource = require('./Resource');
class Bundle extends Resource {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof Bundle || values instanceof Resource) {
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
  get total() {
    return this[_values].total;
  }
  set total(value) {
    return this[_values].total = value;
  }
  get _total() {
    if (!this[_values]._total) {
      const klass = require('./Element');
      this[_values]._total = new klass();
    }
    return this[_values]._total;
  }
  set _total(value) {
    const klass = require('./Element');
    return this[_values]._total = new klass(value);
  }
  get link() {
    if (!this[_values].link) {
      const klass = require('./Bundle_Link');
      this[_values].link = ArrayProxy(klass);
    }
    return this[_values].link;
  }
  set link(value) {
    const klass = require('./Bundle_Link');
    this[_values].link = ArrayProxy(klass);
    value.forEach(entry => this[_values].link.push(entry));
    return this[_values].link;
  }
  get entry() {
    if (!this[_values].entry) {
      const klass = require('./Bundle_Entry');
      this[_values].entry = ArrayProxy(klass);
    }
    return this[_values].entry;
  }
  set entry(value) {
    const klass = require('./Bundle_Entry');
    this[_values].entry = ArrayProxy(klass);
    value.forEach(entry => this[_values].entry.push(entry));
    return this[_values].entry;
  }
  get signature() {
    if (!this[_values].signature) {
      const klass = require('./Signature');
      this[_values].signature = new klass();
    }
    return this[_values].signature;
  }
  set signature(value) {
    const klass = require('./Signature');
    return this[_values].signature = new klass(value);
  }
}
module.exports = Bundle;