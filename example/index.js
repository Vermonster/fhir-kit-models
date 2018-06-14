/* eslint-disable no-debugger, no-unused-vars */

// enter `c` in the debugging utility to reach the breakpoint
const fs = require('fs');
const { Patient } = require('../');

const patientJSON = JSON.parse(fs.readFileSync(`${__dirname}/patient.json`, 'utf8'));
const patient = new Patient(patientJSON);

// enter 'repl' to interact with patient object
debugger;
