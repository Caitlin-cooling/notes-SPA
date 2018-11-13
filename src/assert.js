(function(exports) {
  function Expect(subject) {
    this.subject = subject;
  };

  Expect.prototype.toEqual = function(expectation) {
    if (this.subject !== expectation) {
      throw new Error("FAIL")
    };
  };
  exports.Expect = Expect;
})(this);

(function(exports) {
  function describe(description, funk) {
    console.log(description);
    funk();
  };
  exports.describe = describe;
})(this);

(function(exports) {
  function it(message, funk) {
    describe(' ' + message, funk)
  };
  exports.it = it;
})(this);
