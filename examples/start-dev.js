define([
  'require',
  'domReady',
  'jquery',
  'bootstrap.wysihtml5.en-US'
], function(require, domReady, $) {
  'use strict';

  domReady(function() {
    $('.textarea').wysihtml5({
    }); 
  });
});
