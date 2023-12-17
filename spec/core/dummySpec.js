
describe("a simple suite", function() {
    it("that fails", function() {
        console.log("inside jasmine test ! ");
        expect( 10 ).toBeGreaterThan(100);
    });
});
