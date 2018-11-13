describe('notes', function() {
  it('can store notes', function() {
    var notes = new Notes();
    new Expect(notes.text).toEqual('My favourite language is JavaScript');
  });
});
