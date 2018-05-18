const Element = require('./lib/generated/resources/Element');
const BackboneElement = require('./lib/generated/resources/BackboneElement');
const ArrayProxy = require('./lib/ArrayProxy');
// const Element = require('./Element');
// const BackboneElement = require('./BackboneElement');
const Patient = require('./lib/generated/resources/Patient');
const { isPresent } = require('./lib/helpers');
const fs = require('fs');
const path = require('path');

const element = new Element();
const belement = new BackboneElement();

// element.id = '123';
// belement.id = 'belement';
// belement.extension = [element];
// belement.toObject();
const patientJSON = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/cerner-patient.json`, 'utf8')));
const patient = new Patient(patientJSON);

debugger;
