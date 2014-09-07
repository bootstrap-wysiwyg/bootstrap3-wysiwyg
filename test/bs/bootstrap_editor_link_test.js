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
  expect(5);

  var that = this;

  var onLoad = function() {
     //find link modal
    var createLinkButton = that.container.find('[data-wysihtml5-command="createLink"]');
    ok(createLinkButton.hasClass('btn'), 'Found button link.');

    var createLinkModal = that.container.find('[data-wysihtml5-dialog="createLink"]');
    ok(!createLinkModal.hasClass('in'), 'CreateLink modal is hidden'); 

    createLinkButton.happen('click');

    // 150 is the length of the fade transition
    setTimeout(function() {
      ok(createLinkModal.hasClass('in'), 'CreateLink modal is visible (class on modal)'); 
      ok(createLinkButton.hasClass('wysihtml5-command-dialog-opened'), 'CreateLink modal is visible (class on button)'); 
      start();
    }, 250);
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

asyncTest('open link modal with keyboard', function(){
  expect(5);

  var that = this;

  var onLoad = function() {
     //find link modal
    var createLinkButton = that.container.find('[data-wysihtml5-command="createLink"]');
    ok(createLinkButton.hasClass('btn'), 'Found button link.');

    var createLinkModal = that.container.find('[data-wysihtml5-dialog="createLink"]');
    ok(!createLinkModal.hasClass('in'), 'CreateLink modal is hidden'); 

    //trigger key Ctrl+k
    $(this.composer.editableArea.contentDocument.body).happen({ type: 'keydown', keyCode: 75, ctrlKey: true });

    // 150 is the length of the fade transition
    setTimeout(function() {
      ok(createLinkModal.hasClass('in'), 'CreateLink modal is visible (class on modal)'); 
      ok(createLinkButton.hasClass('wysihtml5-command-dialog-opened'), 'CreateLink modal is visible (class on button)'); 

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
    },
    shortcuts: {
      '75': 'createLink' //k
    }
  });

});
}
