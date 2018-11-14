describe("note list view", function(){
  it("returns string of HTML with one list item", function(){
    var noteListModel = ['My favourite language is JavaScript']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual("<ul><li>My favourite language is JavaScript</li></ul>")
  });

  it("can take an empty list model", function(){
    var noteListModel = ['']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual('<ul><li></li></ul>')
  });

  it("returns string of HTML with multiple list items", function(){
    var noteListModel = ['My favourite language is JavaScript', 'Item 2']
    var noteListView = new NoteListView(noteListModel);
    expect(noteListView.returnList()).toEqual("<ul><li>My favourite language is JavaScript</li><li>Item 2</li></ul>")
  });

});
