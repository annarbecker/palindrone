describe("palindrone", function() {
  it("will return true if the word is palindrone", function () {
    expect(palindrone('mom')).to.equal(true);
  });

  it("will return false if the word is not a palindrone", function (){
    expect(palindrone('boy')).to.equal(false);
  });
});
