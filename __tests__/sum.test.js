const sum = require("../sum");

// test(name, function, timeout)

it("Return 0 if no number was inputed", () => {
  expect(sum()).toBe(0);
})

it("Return the argument number", () => {
  expect(sum(1)).toBe(1);
})

it("Return the two arguments sum number", () => {
  expect(sum(10, 4)).toBe(14);
})

it("Return the two arguments sum number", () => {
  expect(sum(10, 4, 6)).toBe(20);
})