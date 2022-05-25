const sum = require("../sum");

// Describe is for code organisation
describe("Check the args sum", () => {
  // the Skip method skips the test method when testing
  // Skip on describe method
  describe.skip("If there is just one argument", () => {
      // it(name, function, timeout)
    it("Return 0 if no number was inputed", () => {
      expect(sum()).toBe(0);
    })

    it("Return the argument number", () => {
      expect(sum(1)).toBe(1);
    })
  })
  describe("If there are more than one argument", () => {
    it("Return the two arguments sum number", () => {
      expect(sum(10, 4)).toBe(14);
    })
  
    it("Return the three arguments sum number", () => {
      expect(sum(10, 4, 6)).toBe(20);
    })
    // Skip on it method
    it.skip("Return the four arguments sum number", () => {
      expect(sum(10, 4, 6, 2)).toBe(22);
    })
  })
})