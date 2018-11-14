describe('notelist', function() {
  it('is empty at the start', function() {
    var noteList = new NoteList();
    expect(noteList.entries.length).toEqual(0)
  });

  it('can add new notes', function() {
    var noteList = new NoteList();
    noteList.addNote('Hello');
    expect(noteList.entries[0]).toEqual('Hello')
  });
});
