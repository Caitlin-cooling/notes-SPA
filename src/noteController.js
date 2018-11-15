(function(exports) {
  function NoteController(noteText, noteList, noteListView) {
    var note = new Note(noteText);
    var noteList = new NoteList;
    noteList.addNote(note.getText());
    this.noteListView = new NoteListView(noteList.entries);
  };

  NoteController.prototype.updateText = function () {
    document.getElementById('app').innerHTML = this.noteListView.returnList();
  };
  exports.NoteController = NoteController;
})(this);
