const ArrayProxy = require('../ArrayProxy');
const { isPresent, _values } = require('../helpers');

const BackboneElement = require('./BackboneElement');

class VisionPrescriptionDispense extends BackboneElement {
  constructor(values = {}) {
    super();
    this[_values] = {};
    if (values instanceof VisionPrescriptionDispense || values instanceof BackboneElement) {
      for (const [key, value] of values) {
        this[key] = value;
      }
    } else {
      Object.entries(values).forEach(([key, value]) => this[key] = value);
    }
  }

  get product() {
    if (!isPresent(this[_values].product)) {
      const klass = require('./CodeableConcept');
      this[_values].product = new klass();
    }
    return this[_values].product;
  }

  set product(value) {
    const klass = require('./CodeableConcept');
    return this[_values].product = new klass(value);
  }

  get eye() {
    return this[_values].eye;
  }

  set eye(value) {
    return this[_values].eye = value;
  }

  get _eye() {
    if (!isPresent(this[_values]._eye)) {
      const klass = require('./Element');
      this[_values]._eye = new klass();
    }
    return this[_values]._eye;
  }

  set _eye(value) {
    const klass = require('./Element');
    return this[_values]._eye = new klass(value);
  }

  get sphere() {
    return this[_values].sphere;
  }

  set sphere(value) {
    return this[_values].sphere = value;
  }

  get _sphere() {
    if (!isPresent(this[_values]._sphere)) {
      const klass = require('./Element');
      this[_values]._sphere = new klass();
    }
    return this[_values]._sphere;
  }

  set _sphere(value) {
    const klass = require('./Element');
    return this[_values]._sphere = new klass(value);
  }

  get cylinder() {
    return this[_values].cylinder;
  }

  set cylinder(value) {
    return this[_values].cylinder = value;
  }

  get _cylinder() {
    if (!isPresent(this[_values]._cylinder)) {
      const klass = require('./Element');
      this[_values]._cylinder = new klass();
    }
    return this[_values]._cylinder;
  }

  set _cylinder(value) {
    const klass = require('./Element');
    return this[_values]._cylinder = new klass(value);
  }

  get axis() {
    return this[_values].axis;
  }

  set axis(value) {
    return this[_values].axis = value;
  }

  get _axis() {
    if (!isPresent(this[_values]._axis)) {
      const klass = require('./Element');
      this[_values]._axis = new klass();
    }
    return this[_values]._axis;
  }

  set _axis(value) {
    const klass = require('./Element');
    return this[_values]._axis = new klass(value);
  }

  get prism() {
    return this[_values].prism;
  }

  set prism(value) {
    return this[_values].prism = value;
  }

  get _prism() {
    if (!isPresent(this[_values]._prism)) {
      const klass = require('./Element');
      this[_values]._prism = new klass();
    }
    return this[_values]._prism;
  }

  set _prism(value) {
    const klass = require('./Element');
    return this[_values]._prism = new klass(value);
  }

  get base() {
    return this[_values].base;
  }

  set base(value) {
    return this[_values].base = value;
  }

  get _base() {
    if (!isPresent(this[_values]._base)) {
      const klass = require('./Element');
      this[_values]._base = new klass();
    }
    return this[_values]._base;
  }

  set _base(value) {
    const klass = require('./Element');
    return this[_values]._base = new klass(value);
  }

  get add() {
    return this[_values].add;
  }

  set add(value) {
    return this[_values].add = value;
  }

  get _add() {
    if (!isPresent(this[_values]._add)) {
      const klass = require('./Element');
      this[_values]._add = new klass();
    }
    return this[_values]._add;
  }

  set _add(value) {
    const klass = require('./Element');
    return this[_values]._add = new klass(value);
  }

  get power() {
    return this[_values].power;
  }

  set power(value) {
    return this[_values].power = value;
  }

  get _power() {
    if (!isPresent(this[_values]._power)) {
      const klass = require('./Element');
      this[_values]._power = new klass();
    }
    return this[_values]._power;
  }

  set _power(value) {
    const klass = require('./Element');
    return this[_values]._power = new klass(value);
  }

  get backCurve() {
    return this[_values].backCurve;
  }

  set backCurve(value) {
    return this[_values].backCurve = value;
  }

  get _backCurve() {
    if (!isPresent(this[_values]._backCurve)) {
      const klass = require('./Element');
      this[_values]._backCurve = new klass();
    }
    return this[_values]._backCurve;
  }

  set _backCurve(value) {
    const klass = require('./Element');
    return this[_values]._backCurve = new klass(value);
  }

  get diameter() {
    return this[_values].diameter;
  }

  set diameter(value) {
    return this[_values].diameter = value;
  }

  get _diameter() {
    if (!isPresent(this[_values]._diameter)) {
      const klass = require('./Element');
      this[_values]._diameter = new klass();
    }
    return this[_values]._diameter;
  }

  set _diameter(value) {
    const klass = require('./Element');
    return this[_values]._diameter = new klass(value);
  }

  get duration() {
    if (!isPresent(this[_values].duration)) {
      const klass = require('./Quantity');
      this[_values].duration = new klass();
    }
    return this[_values].duration;
  }

  set duration(value) {
    const klass = require('./Quantity');
    return this[_values].duration = new klass(value);
  }

  get color() {
    return this[_values].color;
  }

  set color(value) {
    return this[_values].color = value;
  }

  get _color() {
    if (!isPresent(this[_values]._color)) {
      const klass = require('./Element');
      this[_values]._color = new klass();
    }
    return this[_values]._color;
  }

  set _color(value) {
    const klass = require('./Element');
    return this[_values]._color = new klass(value);
  }

  get brand() {
    return this[_values].brand;
  }

  set brand(value) {
    return this[_values].brand = value;
  }

  get _brand() {
    if (!isPresent(this[_values]._brand)) {
      const klass = require('./Element');
      this[_values]._brand = new klass();
    }
    return this[_values]._brand;
  }

  set _brand(value) {
    const klass = require('./Element');
    return this[_values]._brand = new klass(value);
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

module.exports = VisionPrescriptionDispense;

