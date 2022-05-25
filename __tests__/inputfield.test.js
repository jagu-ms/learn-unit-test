const inputField = require("../inputfield");

// The "only" method tests only this method
// The "only" method on describe
describe.only("Check the inputField function", () => {
  it("If no argument was inputed", () => {
    expect(inputField()).toBe("Unknown")
  })
  it("Check if the name is without spaces", () => {
    expect(inputField(" Hadjer ")).toBe("Hadjer")
  })
  // The "only" method on the "it" method
  it.only("If no argument was inputed", () => {
    expect(inputField("mohamedseddiki_jagu")).toBe("mohamedsed")
  })
})

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