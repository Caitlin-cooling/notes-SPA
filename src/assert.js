// var assert = {
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//     }
//   }
// };
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
