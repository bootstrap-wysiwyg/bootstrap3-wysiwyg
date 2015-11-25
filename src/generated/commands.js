(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('bootstrap.wysihtml5.commands', ['wysihtml5'], factory);
  } else if(typeof exports == 'object') {
    var wysihtml5 = require('wysihtml5x');
    factory(wysihtml5);
  } else {
    // Browser globals
    factory(wysihtml5); // jshint ignore:line
  }
}(function(wysihtml5) {
  wysihtml5.commands.small = {
    exec: function(composer, command) {
      return wysihtml5.commands.formatInline.exec(composer, command, "small");
    },

    state: function(composer, command) {
      return wysihtml5.commands.formatInline.state(composer, command, "small");
    }
  };
}))();