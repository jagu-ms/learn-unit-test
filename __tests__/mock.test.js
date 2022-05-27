const mocker = require("../mock");

it("Mocker testing", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("mohamed")).toBe("Hello mohamed");
  expect(mocker("Hadjer")).toBe("Hello Hadjer");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(2);
  expect(mocker).toHaveBeenCalledWith("Hadjer");
  expect(mocker).toHaveBeenLastCalledWith("Hadjer");
})