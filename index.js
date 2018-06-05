const fs = require('fs');
const path = require('path');

const Patient = require('./src/resources/Patient');

const patientJSON = JSON.parse(fs.readFileSync(path.normalize(`${__dirname}/cerner-patient.json`, 'utf8')));
const patient = new Patient(patientJSON);

debugger;
