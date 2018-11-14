(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.MAXIMUM_LENGTH = 20;
  };

  NoteListView.prototype.returnList = function () {
    var htmlString = '<ul>'
    for(var i = 0; i < this.noteList.length; i++) {
      htmlString += `<li><div id=${i}>${this._formatNote(this.noteList[i])}</div></li>`;
    };
    htmlString += '</ul>'
    return htmlString
  };

  NoteListView.prototype._formatNote = function (string) {
    if(string.length > this.MAXIMUM_LENGTH) {
      return `${string.slice(0, this.MAXIMUM_LENGTH)}...`;
    } else {
      return string;
    }
  };

  exports.NoteListView = NoteListView;
})(this);
