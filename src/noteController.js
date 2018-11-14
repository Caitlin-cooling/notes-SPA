(function(exports) {
  function NoteController(noteText, noteList, noteListView) {
    var note = new Note(noteText);
    var noteList = new NoteList;
    noteList.addNote(note.getText());
    var noteListView = new NoteListView(noteList.entries);
    document.getElementById('app').innerHTML = noteListView.returnList()
  };
  exports.NoteController = NoteController;
})(this);

new NoteController("Favourite drink: seltzer", NoteList, NoteListView)
