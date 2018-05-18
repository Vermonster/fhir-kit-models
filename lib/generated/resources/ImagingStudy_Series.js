const ArrayProxy = require('../../ArrayProxy');
const {isPresent, _values} = require('../../helpers');
const BackboneElement = require('./BackboneElement');
class ImagingStudy_Series extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof ImagingStudy_Series || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }
  get uid() {
    return this[_values].uid;
  }
  set uid(value) {
    return this[_values].uid = value;
  }
  get _uid() {
    if (!this[_values]._uid) {
      const klass = require('./Element');
      this[_values]._uid = new klass();
    }
    return this[_values]._uid;
  }
  set _uid(value) {
    const klass = require('./Element');
    return this[_values]._uid = new klass(value);
  }
  get number() {
    return this[_values].number;
  }
  set number(value) {
    return this[_values].number = value;
  }
  get _number() {
    if (!this[_values]._number) {
      const klass = require('./Element');
      this[_values]._number = new klass();
    }
    return this[_values]._number;
  }
  set _number(value) {
    const klass = require('./Element');
    return this[_values]._number = new klass(value);
  }
  get modality() {
    if (!this[_values].modality) {
      const klass = require('./Coding');
      this[_values].modality = new klass();
    }
    return this[_values].modality;
  }
  set modality(value) {
    const klass = require('./Coding');
    return this[_values].modality = new klass(value);
  }
  get description() {
    return this[_values].description;
  }
  set description(value) {
    return this[_values].description = value;
  }
  get _description() {
    if (!this[_values]._description) {
      const klass = require('./Element');
      this[_values]._description = new klass();
    }
    return this[_values]._description;
  }
  set _description(value) {
    const klass = require('./Element');
    return this[_values]._description = new klass(value);
  }
  get numberOfInstances() {
    return this[_values].numberOfInstances;
  }
  set numberOfInstances(value) {
    return this[_values].numberOfInstances = value;
  }
  get _numberOfInstances() {
    if (!this[_values]._numberOfInstances) {
      const klass = require('./Element');
      this[_values]._numberOfInstances = new klass();
    }
    return this[_values]._numberOfInstances;
  }
  set _numberOfInstances(value) {
    const klass = require('./Element');
    return this[_values]._numberOfInstances = new klass(value);
  }
  get availability() {
    return this[_values].availability;
  }
  set availability(value) {
    return this[_values].availability = value;
  }
  get _availability() {
    if (!this[_values]._availability) {
      const klass = require('./Element');
      this[_values]._availability = new klass();
    }
    return this[_values]._availability;
  }
  set _availability(value) {
    const klass = require('./Element');
    return this[_values]._availability = new klass(value);
  }
  get endpoint() {
    if (!this[_values].endpoint) {
      const klass = require('./Reference');
      this[_values].endpoint = ArrayProxy(klass);
    }
    return this[_values].endpoint;
  }
  set endpoint(value) {
    const klass = require('./Reference');
    this[_values].endpoint = ArrayProxy(klass);
    value.forEach(entry => this[_values].endpoint.push(entry));
    return this[_values].endpoint;
  }
  get bodySite() {
    if (!this[_values].bodySite) {
      const klass = require('./Coding');
      this[_values].bodySite = new klass();
    }
    return this[_values].bodySite;
  }
  set bodySite(value) {
    const klass = require('./Coding');
    return this[_values].bodySite = new klass(value);
  }
  get laterality() {
    if (!this[_values].laterality) {
      const klass = require('./Coding');
      this[_values].laterality = new klass();
    }
    return this[_values].laterality;
  }
  set laterality(value) {
    const klass = require('./Coding');
    return this[_values].laterality = new klass(value);
  }
  get started() {
    return this[_values].started;
  }
  set started(value) {
    return this[_values].started = value;
  }
  get _started() {
    if (!this[_values]._started) {
      const klass = require('./Element');
      this[_values]._started = new klass();
    }
    return this[_values]._started;
  }
  set _started(value) {
    const klass = require('./Element');
    return this[_values]._started = new klass(value);
  }
  get performer() {
    if (!this[_values].performer) {
      const klass = require('./Reference');
      this[_values].performer = ArrayProxy(klass);
    }
    return this[_values].performer;
  }
  set performer(value) {
    const klass = require('./Reference');
    this[_values].performer = ArrayProxy(klass);
    value.forEach(entry => this[_values].performer.push(entry));
    return this[_values].performer;
  }
  get instance() {
    if (!this[_values].instance) {
      const klass = require('./ImagingStudy_Instance');
      this[_values].instance = ArrayProxy(klass);
    }
    return this[_values].instance;
  }
  set instance(value) {
    const klass = require('./ImagingStudy_Instance');
    this[_values].instance = ArrayProxy(klass);
    value.forEach(entry => this[_values].instance.push(entry));
    return this[_values].instance;
  }
}
module.exports = ImagingStudy_Series;