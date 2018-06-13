/* eslint-disable func-names, no-unused-expressions, global-require */
const { copyFilesSync, initializeDirectory, generateEntryPont } = require('../src/generate');

describe('Generate', function () {
  describe('#copyFilesSync', function () {
    it('copies files into destination path', function () {
      initializeDirectory('tmp');

      expect(fs.existsSync('tmp/helpers.js')).to.equal(false);
      expect(fs.existsSync('tmp/ArrayProxy.js')).to.equal(false);

      copyFilesSync(['helpers.js', 'ArrayProxy.js'], 'tmp');

      expect(fs.existsSync('tmp/helpers.js')).to.equal(true);
      expect(fs.existsSync('tmp/ArrayProxy.js')).to.equal(true);
    });
  });

  describe('#generateEntryPont', function () {
    before(function () {
      initializeDirectory('tmp');
      fs.writeFileSync('tmp/TestResource.js');
    });

    it('creates index.js from dist directory', function () {
      generateEntryPont('tmp');

      const expectedContents = "module.exports = {  TestResource: require('./TestResource'),};";
      expect(fs.readFileSync('tmp/index.js', 'utf8').replace(/\n/g, '')).to.equal(expectedContents);
    });
  });
});
