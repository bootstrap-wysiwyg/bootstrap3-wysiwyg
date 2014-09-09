if (wysihtml5.browser.supported()) {

module('bootstrap3-wysihtml5-bower.toolbar.image', {

  setup: function() {
    this.container = testhelper.prepareFixtureWithTextarea();
    this.editableArea = testhelper.getEditableArea();
  },
  
  teardown: function() {
    QUnit.reset();
  }
});


asyncTest('open image modal with mouse', function(){
  expect(5);

  var that = this;

  var onLoad = function() {
    //find link modal
    var insertImageButton = that.container.find('[data-wysihtml5-command="insertImage"]');
    ok(insertImageButton.hasClass('btn'), 'Found button link.');

    var insertImageModal = that.container.find('.bootstrap-wysihtml5-insert-image-modal');
    ok(!insertImageModal.hasClass('in'), 'InsertImage modal is hidden'); 

    insertImageButton.happen('click');

    // 150 is the length of the fade transition
    setTimeout(function () {
      ok(insertImageModal.hasClass('in'), 'InsertImage modal is visible'); 
      ok(insertImageButton.hasClass('wysihtml5-command-dialog-opened'), 'CreateImage modal is visible (class on button)'); 
      start();
    }, 150);
  };

  var onShow = function(event) {
    ok(true, 'show:dialog event was fired');
  };

  var editor = this.editableArea.wysihtml5({
    events: {
      'load': onLoad,
      'show:dialog': onShow
    }
  });

});

//Test for issue #82
asyncTest('set_class on img tag', function() {
   expect(5);

  var that = this;

  var onLoad = function() {
    //find link modal
    var insertImageButton = that.container.find('[data-wysihtml5-command="insertImage"]');
    insertImageButton.happen('click');
  };

  var onShow = function(event) {
    var modal = event.dialogContainer;
    var input = $(modal).find('input').first();
    var saveBtn = $(modal).find('[data-wysihtml5-dialog-action="save"]');
    input.val('http://example.com/example.png'); 
    setTimeout(function() {

      saveBtn.happen('click');
      setTimeout(function() {
          console.log(editor);
      });
    }, 200);
  };

  var editor = this.editableArea.wysihtml5({
    events: {
      'load': onLoad,
      'show:dialog': onShow
    }
  });

});

}
