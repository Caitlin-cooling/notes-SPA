describe('Note Controller', function() {
  it('can be instantiated', function() {
    var noteController = new NoteController()
    expect(noteController).isInstanceOf(NoteController)
  });

  it('can return HTML', function() {
    var noteController = new NoteController("favourite drink: seltzer", new NoteList, new NoteListView)
    var element = document.createElement('div')
    element.id = 'app'
    document.body.appendChild(element)
    noteController.updateText();
    expect(element.innerHTML).toEqual('<ul><li><div id="0"><a href="#0">favourite drink: sel...</a></div></li></ul>')
  });

  describe("showSingleNote", function() {
    it("loads the information for a single note after click", function() {

      var noteController = new NoteController("favourite drink: seltzer", new NoteList, new NoteListView)
      var document;
        NoteController.prototype.renderNote = function() {
          document = {
            getElementById: function(id) {
              return {
                innerHTML: "<div>Favourite drink: seltzer</div>"
              };
            }
          };
        };

        var window = {
          location: {
            hash: "#0"
          }
        };

      noteController.renderNote();

      expect(window.location.hash).toEqual("#0");
      expect(document.getElementById('app').innerHTML).toEqual("<div>Favourite drink: seltzer</div>");
    });
  });
});
