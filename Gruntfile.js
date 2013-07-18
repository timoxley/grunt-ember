'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
      ember:{
        all:{
          src:'test/fixtures/test.handlebars',
          dest:'tmp/output.js'
        }
      },
      clean:{
        tests:['tmp']
      },
      nodeunit:{
        tests:['test/*_test.js']
      }
    }
  );
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'ember','nodeunit']);
};
