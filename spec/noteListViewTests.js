describe("note list view", function(){
  it("returns string of HTML with one list item", function(){
    var noteListModel = ['My favourite language']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual("<ul><li>My favourite languag...</li></ul>")
  });

  it("can take an empty list model", function(){
    var noteListModel = ['']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual('<ul><li></li></ul>')
  });

  it("returns string of HTML with multiple list items", function(){
    var noteListModel = ['My favourite language is JavaScript', 'Item 2']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual("<ul><li>My favourite languag...</li><li>Item 2</li></ul>")
  });

  describe("format note", function() {
    it("limits the note to 20 characters", function() {
      var noteListModel = ['My first note is really long']
      var noteListView = new NoteListView(noteListModel);
      expect(noteListView.returnList()).toEqual("<ul><li>My first note is rea...</li></ul>")
    });

    it("returns a note less than 20 characters", function() {
      var noteListModel = ['My first note']
      var noteListView = new NoteListView(noteListModel);
      expect(noteListView.returnList()).toEqual("<ul><li>My first note</li></ul>")
    });
  });

});
