const sum = require("../sum");

// Describe is for code organisation
describe("Check the args sum", () => {
  describe("If there is just one argument", () => {
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
  
    it("Return the two arguments sum number", () => {
      expect(sum(10, 4, 6)).toBe(20);
    })
  })
})