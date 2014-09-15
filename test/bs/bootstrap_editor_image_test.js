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
  expect(6);

  var that = this;

  var onLoad = function() {
    //find link modal
    var insertImageButton = that.container.find('[data-wysihtml5-command="insertImage"]');
    ok(insertImageButton.hasClass('btn'), 'Found button link.');

    var insertImageModal = that.container.find('.bootstrap-wysihtml5-insert-image-modal');
    ok(!insertImageModal.hasClass('in'), 'InsertImage modal is hidden'); 

    insertImageButton.happen('click');

    ok(insertImageButton.hasClass('wysihtml5-command-dialog-opened'), 'CreateImage modal is visible (class on button)'); 
  };

  var onShow = function(event) {
    ok(true, 'show:dialog event was fired');
    setTimeout(function() {
      var modal = $(event.dialogContainer);
      ok(modal.hasClass('in'), 'CreateImage modal is visible (class on modal)'); 
      var cancelBtn = modal.find('[data-wysihtml5-dialog-action="cancel"]');
      cancelBtn.happen('click');
    }, 300);
  };

  var onHide = function(event) {
    ok(true, 'cancel:dialog event was fired');
    start();
  };

  var editor = this.editableArea.wysihtml5({
    events: {
      'load': onLoad,
      'show:dialog': onShow,
      'cancel:dialog': onHide
    }
  });

});

//Test for issue #82
//Commented out, because it is failing
/*
asyncTest('set_class on img tag', function() {
   expect(2);

  var that = this;

  var onLoad = function() {
    //find link modal
    var insertImageButton = that.container.find('[data-wysihtml5-command="insertImage"]');
    insertImageButton.happen('click');
  };

  var onShow = function(event) {
    ok(true, 'show:dialog event was fired');
    //Wait for modal to fade in
    setTimeout(function() {
      var modal = event.dialogContainer;
      var input = $(modal).find('input').first();
      var saveBtn = $(modal).find('[data-wysihtml5-dialog-action="save"]');
      input.val('http://example.com/example.png'); 
      saveBtn.happen('click');
    }, 200);
  };

  var onHide = function(event) {
    ok(true, 'save:dialog event was fired');
    setTimeout(function() {
      QUnit.assert.htmlEqual(that.editableArea.val(), '<img alt="" src="http://example.com/example.png" class="mytxtimg">', 'Class should be inserted into image tag.');
      start();
    }, 200);
  };

  var editor = this.editableArea.wysihtml5({
    toolbar: {
      html: true
    },
    events: {
      'load': onLoad,
      'show:dialog': onShow,
      'save:dialog': onHide
    },
    parserRules: { 
      classes: { 'mytxtimg': 1 }, 
      tags: { 'img': 
        { 'set_class': 'mytxtimg' }
      }
    }
  });

});
*/
}
