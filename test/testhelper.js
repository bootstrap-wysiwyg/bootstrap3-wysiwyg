testhelper = {
  //Fixture
  fixtureID: 'qunit-fixture',
  getFixtureSelector: function() {
    return '#' + this.fixtureID;
  },
  fixtureExists: function() {
    return this.getFixture().length > 0;
  },
  prepareFixture: function() {
    var qunitFixture;
    if(!this.fixtureExists()) {
      qunitFixture = $('<div></div>');
      qunitFixture.attr('id', this.fixtureID);
      $('body').append(qunitFixture);
    }
    this.resetFixture();
    return this.getFixture();
  },
  getFixture: function() {
    return $(this.getFixtureSelector());
  },
  resetFixture: function() {
    this.getFixture().empty();
  },
  //Container
  editableAreaID: 'wysihtml5-test-editable',
  getEditableAreaSelector: function() {
    return '#' + this.editableAreaID;
  },
  editableAreaClass: 'wysihtml5-test-class',
  containerID: 'container',
  getContainerSelector: function() {
    return '#' + this.containerID;
  },
  createContainer: function() {
    var div = $('<div></div>');
    div.attr('id', this.containerID);
    return div;
  },
  setEditableAreaClassAndID: function(el) {
    el.attr('id', this.editableAreaID);
    el.addClass(this.editableAreaClass);
    return el;
  },
  createEditableAreaDiv: function() {
    var editableArea = $('<div></div>');
    return this.setEditableAreaClassAndID(editableArea);
  },
  createEditableAreaTextarea: function() {
    var editableArea = $('<textarea></textarea>');
    return this.setEditableAreaClassAndID(editableArea);
  },
  prepareDiv: function() {
    var div = this.createContainer();
    div.append(this.createEditableAreaDiv());
    return div;
  },
  prepareTextarea: function() {
    var div = this.createContainer();
    div.append(this.createEditableAreaTextarea());
    return div;
  },
  getEditableArea: function() {
    return $(this.getEditableAreaSelector());
  },
  //put all together
  //returns container
  prepareFixtureWithDiv: function() {
    var fixture = this.prepareFixture(),
        container = this.prepareDiv();
    fixture.append(container);
    return container;
  },
  prepareFixtureWithTextarea: function() {
    var fixture = this.prepareFixture(),
        container = this.prepareTextarea();
    fixture.append(container);
    return container;
  }
};
