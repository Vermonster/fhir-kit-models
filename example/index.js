const fs = require('fs');

const patientJSON = JSON.parse(fs.readFileSync(`${__dirname}/cerner-patient.json`, 'utf8'));

const { Patient } = require('../');

const patient = new Patient(patientJSON);

console.log(patient.toObject); // eslint-disable-line no-console
