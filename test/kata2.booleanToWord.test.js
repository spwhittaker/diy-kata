const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("When boolean is passed true, it should return 'Yes'.", () => {});
  expect(booleanToWord(true)).toBe('Yes');
  test("When boolean is passed false, it should return 'No'.", () => {});
  expect(booleanToWord(false)).toBe('No');
  // how do we create specs again???
});

//function(true) will be Yes
//function(false) will be No