if (wysihtml5.browser.supported()) {
  module("wysihtml5.Editor.commands", {
    setup: function() {
        
      this.editableArea        = document.createElement("div");
      this.editableArea.id     = "wysihtml5-test-editable";
      this.editableArea.className = "wysihtml5-test-class";
      this.editableArea.title  = "Please enter your foo";
      this.editableArea.innerHTML  = "hey tiff, what's up?";
      
      document.body.appendChild(this.editableArea);
      
    },

    teardown: function() {
      var leftover;
      while (leftover = document.querySelector("div.wysihtml5-sandbox")) {
        leftover.parentNode.removeChild(leftover);
      }
      document.body.className = this.originalBodyClassName;
    }
  });
  
  
  asyncTest("Bootstrapwrapper formating tests", function() {
    
    //@ignore should be 4
    expect(2);
    var that = this,
        text = "once upon a time there was an unformated text.",
        parserRules = {
          tags: {
            small: 1
          }
        },
        editor = new wysihtml5.Editor(this.editableArea, {
          parserRules: parserRules
        });
        
    editor.on("load", function() {
      var editableElement   = that.editableArea;
      editor.setValue(text, true);
      
      // basic 
      editor.composer.selection.selectNode(editor.editableElement);
      editor.composer.commands.exec('small');
      equal(editableElement.innerHTML.toLowerCase(), "<small>" + text + "</small>", "Command small sets text as small correctly");
      
      editor.composer.selection.getSelection().collapseToStart();
      ok(editor.composer.selection.getSelection().isCollapsed, "Text caret is collapsed");
      editor.composer.commands.exec('small');
      
      //@ignore
      //equal(editableElement.innerHTML.toLowerCase(), text, "Small is correctly removed when text caret is inside small");
      //ok(editor.composer.selection.getSelection().isCollapsed, "Text caret did remain collapsed");
      
      start();
    });
  });
  
}
