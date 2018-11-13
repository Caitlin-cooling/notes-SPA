(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnList = function () {
    var htmlString = '<ul>'
    for(var i = 0; i < this.noteList.length; i++) {
      htmlString += `<li>${this.noteList[i]}</li>`;
    };
    htmlString += '</ul>'
    return htmlString
  };

  exports.NoteListView = NoteListView;
})(this);
