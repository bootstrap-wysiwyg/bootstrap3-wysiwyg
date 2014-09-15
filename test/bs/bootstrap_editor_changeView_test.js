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

asyncTest('change view with mouse', function(){
  expect(2);

  var that = this;

  var onLoad = function() {
     //find changeview button
    var changeViewButton = that.container.find('[data-wysihtml5-action="change_view"]');
    ok(changeViewButton.hasClass('btn'), 'Found button change view.');

    changeViewButton.happen('click');
  };

  var onChangeView = function(event) {
    ok(true, 'change_view event was fired');
    start();
  };

  var editor = this.editableArea.wysihtml5({
    toolbar: {
      'html': true
    },
    events: {
      'load': onLoad,
      'change_view': onChangeView
    }
  });

});

}
