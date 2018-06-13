const { expect } = require('chai');
const mock = require('mock-require');
const fs = require('fs');
const path = require('path');
const { initializeDirectory, copyFilesSync } = require('../src/generate');

initializeDirectory('tmp');
copyFilesSync(['helpers.js', 'ArrayProxy.js'], 'tmp');

global.expect = expect;
global.mock = mock;
global.fs = fs;
global.path = path;
