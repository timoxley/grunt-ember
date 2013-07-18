/*

Outputs a templates file that is used for loading Ember templates

*/

module.exports = function(grunt) {
  var path = require("path");
  var file = grunt.file;

  grunt.registerMultiTask("ember", "Collate Ember templates into a single file.", function() {
    var template_files = file.expand(this.data.src);

    var output = "";
    template_files.forEach(function(template_file) {
      var template_name = path.basename(template_file, ".handlebars");

      // to concat in the template, need to drop the newlines.
      var template = file.read(template_file);
      var escaped_template = template.replace(/[\n\r]/ig, '').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");

      var output_string = "Ember.TEMPLATES['" + template_name + "'] = Ember.Handlebars.compile('" + escaped_template + "');";
      output += output_string + "\n";

      console.log("Compiled \"" + template_file + "\"")
    });

    file.write(this.data.dest, output);
  });
};
