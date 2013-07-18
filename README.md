#Collate Ember templates into a single file

![https://travis-ci.org/timoxley/grunt-ember.png](https://travis-ci.org/timoxley/grunt-ember.png)

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
Extracted from Thomas Boyt's Charcoal tool. http://github.com/thomasboyt/Charcoal
