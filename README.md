#Collate Ember templates into a single file

###Usage

```js
    ember: {
      app: {
        src: ["./app/ember/templates/*.handlebars"],
        dest: 'public/assets/javascripts/templates.js'
      }
    }
```

#### Credit
Extracted verbatim from Thomas Boyt's Charcoal tool. http://github.com/thomasboyt/Charcoal
