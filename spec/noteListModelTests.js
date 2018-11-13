
var noteList = new NoteList();
new Expect(noteList.entries.length).toEqual(1)
new Expect(noteList.entries[0]).toEqual('My favourite language is JavaScript')


var noteList = new NoteList();
noteList.addNote('Hello');
new Expect(noteList.text).toEqual('Hello')
new Expect(noteList.getNotes().slice(-1)[0]).toEqual('Hello')
