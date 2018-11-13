describe('notelist', function() {
  it('is empty at the start', function() {
    var noteList = new NoteList();
    new Expect(noteList.entries.length).toEqual(0)
  });

  it('can add new notes', function() {
    var noteList = new NoteList();
    noteList.addNote('Hello');
    new Expect(noteList.entries[0]).toEqual('Hello')
  });
});
