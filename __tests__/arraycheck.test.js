const myArray = require("../arraycheck");
// const myArray = [1, 2, 3, 4, 5, 6];

it("Check if myArray length is 6", () => {
  expect(myArray.length).toBe(6);
})

// Jest matchers
// toHaveLength
it("Check if myArray length is 6", () => {
  expect(myArray).toHaveLength(6);
})
// toContain 
it("Check if myArray a 4 number in it", () => {
  expect(myArray).toContain(4);
})
// not is to reverse the expectation
it("Check if myArray doesn't have a 10 number in it", () => {
  expect(myArray).not.toContain(10);
})

it("Check if myArray doesn't have a 22 num in it", () => {
  for(let i = 0; i < myArray.length; i++) {
    expect(myArray[i]).not.toBe(22)
  }
})

it("Check if myArray has only numbers 1", () => {
  for(let i = 0; i < myArray.length; i++) {
    expect(isNaN(myArray[i])).not.toBe(true)
  }
})

it("Check if myArray has only numbers 2", () => {
  for(let i = 0; i < myArray.length; i++) {
    expect(isNaN(myArray[i])).not.toBeTruthy();
  }
})

it("Check if myArray has only numbers 3", () => {
  for(let i = 0; i < myArray.length; i++) {
    expect(isNaN(myArray[i])).toBeFalsy();
  }
})

it("Check the second element of myArray is greater than 1", () => {
    expect(myArray[1]).toBeGreaterThan(1);
})

it("Check the first element of myArray is greater than 1", () => {
    expect(myArray[0]).toBeGreaterThanOrEqual(1);
})

it("Check the second element of myArray is less than 2", () => {
    expect(myArray[1]).toBeLessThanOrEqual(2);
})

it("Cheeck for Undefined", () => {
  let x;
  expect(x).toBeUndefined();
})

it("Check for substing inside of string", () => {
  let string = "eating hardwork enjoying pain"
  expect(string).toMatch(/pain/);
})

it("Check for substing inside of string", () => {
  let string = "eating hardwork enjoying pain"
  expect(string).toMatch(/pain/);
})

it("Check for property inside Object", () => {
  let myObject = {
    name: "mohamed",
    age: "23"
  };
  expect(myObject).toHaveProperty("name", "mohamed")
})