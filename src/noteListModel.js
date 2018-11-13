(function(exports) {
  function NoteList() {
    this.entries = [];
  };
  exports.NoteList = NoteList;
})(this);

NoteList.prototype.addNote = function(note) {
  this.entries.push(note);
};
