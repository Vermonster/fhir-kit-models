const Element = require('./lib/Element');
const BackboneElement = require('./lib/BackboneElement');
// const Element = require('./Element');
// const BackboneElement = require('./BackboneElement');
const Patient = require('./lib/Patient');
const { isPresent } = require('./helpers');
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
