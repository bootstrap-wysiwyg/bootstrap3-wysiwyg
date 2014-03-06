define([
  'require',
  'domReady',
  'jquery',
  'bootstrap.wysihtml5.de-DE'
], function(require, domReady, $) {
  'use strict';

  domReady(function() {
    $('.textarea').wysihtml5({
      locale: 'de-DE'
    }); 
  });
});
