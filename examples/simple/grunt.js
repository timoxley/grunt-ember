module.exports = function(grunt) {

  grunt.initConfig({
    ember: {
      all: {
        src: 'templates/*.handlebars',
        dest: 'output.js'
      }
    },
    watch: {
      all: {
        files: ['templates/*.handlebars'],
        tasks: 'ember'
      }
    }
  });


  grunt.loadTasks("../../tasks");
  grunt.registerTask('default', 'ember');

};
