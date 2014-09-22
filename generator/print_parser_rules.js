/* global phantom  */
(function () {
  'use strict';

  var webPage = require('webpage'),
      fs = require('fs'),
      page = webPage.create(),
      pageAdvanced = webPage.create(),
      pageAdvancedUnwrap = webPage.create(),
      pageSimple = webPage.create();

  page.open('file:///' + fs.absolute('generator/generate.html'), function(){
    var parserRules = page.evaluate(function() {
      return window.wysihtml5ParserRules;
    });
    var parserRulesJSON = JSON.stringify(parserRules, null, ' ');
    fs.write('src/parser_rules/advanced_and_extended.json', parserRulesJSON, 'w');
    console.log('Wrote ', 'src/parser_rules/advanced_and_extended.json');

    var pasteRules = page.evaluate(function() {
      return window.wysihtml5ParserPasteRulesets;
    });
    var pasteRulesJSON = JSON.stringify(pasteRules, null, ' ');
    fs.write('src/parser_rules/advanced_and_extended_paste.json', pasteRulesJSON, 'w');
    console.log('Wrote ', 'src/parser_rules/advanced_and_extended_paste.json');
  });

  pageAdvanced.open('file:///' + fs.absolute('generator/generate_advanced.html'), function(){
    var parserRules = pageAdvanced.evaluate(function() {
      console.log(window.wysihtml5ParserRules);
      return window.wysihtml5ParserRules;
    });
    var parserRulesJSON = JSON.stringify(parserRules, null, ' ');
    fs.write('src/parser_rules/advanced.json', parserRulesJSON, 'w');
    console.log('Wrote ', 'src/parser_rules/advanced.json');
  });

  pageAdvancedUnwrap.open('file:///' + fs.absolute('generator/generate_advanced_unwrap.html'), function(){
    var parserRules = pageAdvancedUnwrap.evaluate(function() {
      console.log(window.wysihtml5ParserRules);
      return window.wysihtml5ParserRules;
    });
    var parserRulesJSON = JSON.stringify(parserRules, null, ' ');
    fs.write('src/parser_rules/advanced_unwrap.json', parserRulesJSON, 'w');
    console.log('Wrote ', 'src/parser_rules/advanced_unwrap.json');
  });

  pageSimple.open('file:///' + fs.absolute('generator/generate_simple.html'), function(){
    var parserRules = pageSimple.evaluate(function() {
      console.log(window.wysihtml5ParserRules);
      return window.wysihtml5ParserRules;
    });
    var parserRulesJSON = JSON.stringify(parserRules, null, ' ');
    fs.write('src/parser_rules/simple.json', parserRulesJSON, 'w');
    console.log('Wrote ', 'src/parser_rules/simple.json');
    phantom.exit();
  });

})();
