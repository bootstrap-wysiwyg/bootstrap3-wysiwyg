if (wysihtml5.browser.supported()) {
  module("wysihtml5.Editor.commands", {
    setup: function() {
      this.container = testhelper.prepareFixtureWithTextarea();
      this.editableArea = testhelper.getEditableArea();
    },

    teardown: function() {
      QUnit.reset();
    }
  });


  asyncTest("Bootstrapwrapper formating tests", function() {

    //@ignore should be 4
    expect(2);
    var text = "once upon a time there was an unformated text.";

    var onLoad = function(event) {
      this.setValue(text, true);

      // basic 
      this.composer.selection.selectNode(this.currentView.element);
      this.composer.commands.exec('small');
      equal(this.getValue().toLowerCase(), "<small>" + text + "</small>", "Command small sets text as small correctly");

      this.composer.selection.getSelection().collapseToStart();
      ok(this.composer.selection.getSelection().isCollapsed, "Text caret is collapsed");
      this.composer.commands.exec('small');

      //@ignore
      //equal(this.getValue().toLowerCase(), text, "Small is correctly removed when text caret is inside small");
      //ok(this.composer.selection.getSelection().isCollapsed, "Text caret did remain collapsed");

      start();
    };

    var editor = this.editableArea.wysihtml5({
      toolbar: {
        'html': true
      },
      events: {
        'load': onLoad,
      },
      parserRules: {
        tags: {
          small: 1
        }
      }
    });
  });

}
