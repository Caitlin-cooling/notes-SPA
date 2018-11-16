(function(exports) {
  function NoteController(noteListView) {
    this.noteListView = noteListView;
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
  
  var button = document.getElementById('submit')
  button.addEventListener('click',function(e) {
    console.log(e);
    e.preventDefault();
    console.log(document.getElementById('note_text').value)
  }, false);


  exports.NoteController = NoteController;
})(this);
