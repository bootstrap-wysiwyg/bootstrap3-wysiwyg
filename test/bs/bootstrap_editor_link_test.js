if (wysihtml5.browser.supported()) {

module('bootstrap3-wysihtml5-bower.toolbar.link', {

  setup: function() {
    this.container = testhelper.prepareFixtureWithTextarea();
    this.editableArea = testhelper.getEditableArea();
  },
  
  teardown: function() {
    QUnit.reset();
  }
});

asyncTest('open link modal with mouse', function(){
  expect(6);

  var that = this;

  var onLoad = function() {
     //find link modal
    var createLinkButton = that.container.find('[data-wysihtml5-command="createLink"]');
    ok(createLinkButton.hasClass('btn'), 'Found button link.');

    var createLinkModal = that.container.find('[data-wysihtml5-dialog="createLink"]');
    ok(!createLinkModal.hasClass('in'), 'CreateLink modal is hidden'); 

    createLinkButton.happen('click');

    ok(createLinkButton.hasClass('wysihtml5-command-dialog-opened'), 'CreateLink modal is visible (class on button)'); 
  };

  var onShow = function(event) {
    ok(true, 'show:dialog event was fired');
    // 150 is the length of the fade transition
    setTimeout(function() {
      var modal = $(event.dialogContainer);
      ok(modal.hasClass('in'), 'CreateLink modal is visible (class on modal)'); 
      var cancelBtn = modal.find('[data-wysihtml5-dialog-action="cancel"]');
      cancelBtn.happen('click');
    }, 200);
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

asyncTest('open link modal with keyboard', function(){
  expect(6);

  var that = this;

  var onLoad = function() {
     //find link modal
    var createLinkButton = that.container.find('[data-wysihtml5-command="createLink"]');
    ok(createLinkButton.hasClass('btn'), 'Found button link.');

    var createLinkModal = that.container.find('[data-wysihtml5-dialog="createLink"]');
    ok(!createLinkModal.hasClass('in'), 'CreateLink modal is hidden'); 

    //trigger key Ctrl+k
    $(this.composer.editableArea.contentDocument.body).happen({ type: 'keydown', keyCode: 75, ctrlKey: true });

    ok(createLinkButton.hasClass('wysihtml5-command-dialog-opened'), 'CreateLink modal is visible (class on button)'); 
  };

  var onShow = function(event) {
    ok(true, 'show:dialog event was fired');
    setTimeout(function() {
      var modal = $(event.dialogContainer);
      ok(modal.hasClass('in'), 'CreateLink modal is visible (class on modal)'); 
      modal.happen({ type: 'keydown', keyCode: 27, ctrlKey: false });
    }, 200);
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
    },
    shortcuts: {
      '75': 'createLink' //k
    }
  });

});
}
