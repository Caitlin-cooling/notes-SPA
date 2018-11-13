describe("note list view", function(){
  it("returns string of HTML with list items", function(){
    var noteListModel = ['My favourite language is JavaScript']
    var noteListView = new NoteListView(noteListModel);
    new Expect(noteListView.returnList()).toEqual("<ul><li>My favourite language is JavaScript</li></ul>")
  })
})
