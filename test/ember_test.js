'use strict';

var grunt = require('grunt');

exports['ember'] = {

  all:function (test) {
    test.expect(1);

    var expected = grunt.file.read("test/expected/output.js");
    var actual = grunt.file.read('tmp/output.js');

    test.equal(expected, actual, 'should compile handlebar templates');
    test.done();
  }
};