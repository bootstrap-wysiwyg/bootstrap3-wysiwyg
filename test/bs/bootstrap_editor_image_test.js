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

}
