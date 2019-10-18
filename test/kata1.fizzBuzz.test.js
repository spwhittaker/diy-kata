const {
  fizzBuzz
} = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {});
  expect(fizzBuzz(69)).toBe("Fizz");
  test("returns Buzz when passed a multiple of 5", () => {});
  expect(fizzBuzz(5000000)).toBe("Buzz");
  test("returns FizzBuzz when passed a multiple 3 and 5", () => {});
  expect(fizzBuzz(45)).toBe("FizzBuzz");
  test("returns the number when it isn't a multiple of 3 or 5", () => {});
  expect(fizzBuzz(67)).toEqual(67);
});