const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(
      getEmployerRole("Satti", [
        {
          name: "Satti",

          role: "Developer"
        },
        {
          name: "Jenny",

          role: "Sales Associate"
        },
        {
          name: "Javid",

          role: "Human Recommended Reading Assistant"
        }
      ])
    ).toEqual("Developer");

    expect(
      getEmployerRole("Steven", [
        {
          name: "Stephen",
          role: "Cool Guy"
        },
        {
          name: "Stefan",
          role: "Cyclist"
        }
      ])
    ).toEqual("That person doesn't work here.");
    expect(
      getEmployerRole("sam", [
        { name: "Sam", role: "Junior Developer" },
        { name: "SAM", role: "shouter" }
      ])
    ).toEqual("That person doesn't work here.");
  });
});
