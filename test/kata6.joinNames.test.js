const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, separated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart"
        },
        {
          name: "Lisa"
        },
        {
          name: "Maggie"
        }
      ])
    ).toEqual("Bart, Lisa & Maggie");
    expect(
      joinNames([
        {
          name: "Sam"
        },
        {
          name: "Diane"
        }
      ])
    ).toEqual("Sam & Diane");
    expect(
      joinNames([
        {
          name: "Abed"
        },
        {
          name: "Annie"
        },
        {
          name: "Britta"
        },
        {
          name: "Jeff"
        },
        {
          name: "Pierce"
        },
        {
          name: "Troy"
        }
      ])
    ).toEqual("Abed, Annie, Britta, Jeff, Pierce & Troy");
    expect(
      joinNames([
        {
          name: "Loner"
        }
      ])
    ).toEqual("Loner");
  });
});
