(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnList = function () {
    for(var i = 0; i < this.noteList.length; i++) {
      return `<ul><li>${this.noteList[i]}</li></ul>`;
    }
  };

  exports.NoteListView = NoteListView;
})(this);
