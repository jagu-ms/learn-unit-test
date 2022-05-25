const say = require("./say");

// Testing function
test("Say test message", () => {
  expect(say()).toBe("Hello testing");
})