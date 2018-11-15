(function(exports) {
  function NoteController(noteText, noteList, noteListView) {
    var note = new Note(noteText);
    var noteList = new NoteList;
    noteList.addNote(note.getText());
    var noteListView = new NoteListView(noteList.entries);
    this.updateText = function() {
      document.getElementById('app').innerHTML = noteListView.returnList();
    }
  };
  exports.NoteController = NoteController;
})(this);
