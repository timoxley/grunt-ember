#Collate Ember templates into a single file

###Usage

```js
module.exports = function(grunt) {

  grunt.initConfig({
    ember: {
      all: {
        src: 'templates/*.handlebars',
        dest: 'output.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-handlebars');
  grunt.registerTask('default', 'ember');

};
```

###Installation
`grunt-ember` is available on npm

```
npm install --save grunt-ember
```

#### Credit & Thanks
Extracted verbatim from Thomas Boyt's Charcoal tool. http://github.com/thomasboyt/Charcoal

Thomas you are welcome to take control of this module.
