const { humanCatDogYears } = require("../src");

describe("humanCatDogYears" , () => {
   test("When humanCatDogYears is passed a number (representing human years), it should return an array of three numbers. The first number human years, cat years and dog years respectively", () => {});
   expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
  expect(humanCatDogYears(-4)).toEqual(["not born yet","not born yet","not born yet"]);
});
