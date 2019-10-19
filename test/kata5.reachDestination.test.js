const {
  reachDestination
} = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {});
  expect(reachDestination(100, 20)).toBe("I should be there in 5 hours.");
  expect(reachDestination(10, 10)).toBe("I should be there in 1 hour.");
  expect(reachDestination(100, 33)).toBe("I should be there in 3 hours.");
  expect(reachDestination(1, 5)).toBe("I should be there in less than half an hour");
  expect(reachDestination(10, -10)).toBe("No negative units, please.");
  expect(reachDestination(5, 0.73)).toBe("I should be there in 7 hours.");
});