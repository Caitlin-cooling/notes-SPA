(function(exports) {
  function NoteController(noteListView) {
    this.noteListView = noteListView;
  };

  NoteController.prototype.updateText = function () {
    console.log(3)
    document.getElementById('app').innerHTML = this.noteListView.returnList();
  };

  function getNote() {
    getID();
    document.getElementById('app').innerHTML = "Your note!"
  };

  function getID () {
    return window.location.hash;
  };

  NoteController.prototype.getSubmitValue = function(){
    console.log(2)
    var noteText = document.getElementById('note_text').value
    var note = new Note(noteText);
    var notelist = new NoteList;
    notelist.addNote(note.text);
    var noteListView = new NoteListView(noteList.entries);
    var controller = new NoteController(noteListView);
  };

  NoteController.prototype.renderNote = function () {
    console.log(1)
    var button = document.getElementById('submit')
    button.addEventListener('click',function(e) {
      e.preventDefault();
    }, false);
    this.getSubmitValue();
    this.updateText();
  };

  exports.NoteController = NoteController;
})(this);
