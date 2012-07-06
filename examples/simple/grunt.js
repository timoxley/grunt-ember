module.exports = function(grunt) {

  grunt.initConfig({
    ember: {
      all: {
        src: 'templates/*.handlebars',
        dest: 'output.js'
      }
    }
  });

  grunt.loadTasks("../../tasks");
  grunt.registerTask('default', 'ember');

};
