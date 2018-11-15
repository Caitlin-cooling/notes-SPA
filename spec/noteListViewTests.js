describe("note list view", function(){
  it("returns string of HTML with one list item", function(){
    var noteListModel = ['My favourite language']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual("<ul><li><div id=0><a href='#0'>My favourite languag...</a></div></li></ul>")
  });

  it("can take an empty list model", function(){
    var noteListModel = ['']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual("<ul><li><div id=0><a href='#0'></a></div></li></ul>")
  });

  it("returns string of HTML with multiple list items", function(){
    var noteListModel = ['My favourite language is JavaScript', 'Item 2']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual("<ul><li><div id=0><a href='#0'>My favourite languag...</a></div></li><li><div id=1><a href='#1'>Item 2</a></div></li></ul>")
  });

  describe("format note", function() {
    it("limits the note to 20 characters", function() {
      var noteListModel = ['My first note is really long']
      var noteListView = new NoteListView(noteListModel);
      expect(noteListView.returnList()).toEqual("<ul><li><div id=0><a href='#0'>My first note is rea...</a></div></li></ul>")
    });

    it("returns a note less than 20 characters", function() {
      var noteListModel = ['My first note']
      var noteListView = new NoteListView(noteListModel);
      expect(noteListView.returnList()).toEqual("<ul><li><div id=0><a href='#0'>My first note</a></div></li></ul>")
    });
  });

});
