describe("single note view", function(){
  it("has a note", function () {
    var note = new Note("A note")
    var singleNoteView = new SingleNoteView(note)
    expect(singleNoteView.note).toEqual(note)
  });

  describe("render note", function() {
    it("outputs the content of a note", function() {
      var note = new Note("A note")
      var singleNoteView = new SingleNoteView(note)
      expect(singleNoteView.renderNote()).toEqual("<div>A note</div>")
    })
  })
});
