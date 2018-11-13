(function(exports) {
  function NoteList() {
    this.entries = ['My favourite language is JavaScript'];
    this.text = 'Favourite drink: seltzer';
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.getNotes = function() {
  return this.entries;
};

NoteList.prototype.addNote = function(note) {
  this.text = note;
  this.entries.push(note);
};
