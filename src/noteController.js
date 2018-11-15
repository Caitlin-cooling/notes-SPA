(function(exports) {
  function NoteController(noteText, noteList, noteListView) {
    this.note = new Note(noteText);
    var noteList = new NoteList;
    noteList.addNote(this.note.getText());
    this.noteListView = new NoteListView(noteList.entries);
  };

  NoteController.prototype.updateText = function () {
    document.getElementById('app').innerHTML = this.noteListView.returnList();
  };

  NoteController.prototype.renderNote = function () {
    console.log("1")
    document.getElementById('app').addEventListener("click", getNote);
  };

  function getNote() {
    console.log("2")
    getID();
    console.log("4")
    document.getElementById('app').innerHTML = "Your note!"
  };

  function getID () {
    console.log("3")
    return window.location.hash;
  };

  NoteController.prototype.submitEvent = function () {
    document.getElementById('submit').addEventListener("click", function(event) {
      event.preventDefault();
    });
  };

  function doSomething() {
    console.log("hi")
  }

  exports.NoteController = NoteController;
})(this);
