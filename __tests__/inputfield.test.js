const inputField = require("../inputfield");

describe("Check the inputField function", () => {
  it("If no argument was inputed", () => {
    expect(inputField()).toBe("Unknown")
  })
  it("Check if the name is without spaces", () => {
    expect(inputField(" Hadjer ")).toBe("Hadjer")
  })
  it("If no argument was inputed", () => {
    expect(inputField("mohamedseddiki_jagu")).toBe("mohamedsed")
  })
})