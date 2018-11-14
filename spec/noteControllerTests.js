describe('Note Controller', function() {
  it('can be instantiated', function() {
    var noteController = new NoteController()
    expect(noteController).isInstanceOf(NoteController)
  })
  it('can return HTML', function() {
    var noteController = new NoteController("favourite drink: seltzer", new NoteList, new NoteListView)
    var element = document.createElement('div')
    element.id = 'app'
    document.body.appendChild(element)
    noteController.updateText();
    expect(element.innerHTML).toEqual('<ul><li>favourite drink: seltzer</li></ul>')
  })
})
