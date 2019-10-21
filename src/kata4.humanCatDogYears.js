const humanCatDogYears = number => {
  let humanAge;
  if (number <= 0) {
    humanAge = "not born yet";
  }
  if (number < 1 && number > 0) {
    humanAge = "just a wee un";
  }
  if (number >= 1) {
    humanAge = number;
  }

  let catAge;
  if (number <= 0) {
    catAge = "not born yet";
  }
  if (number < 1 && number > 0) {
    catAge = "just a wee un";
  }
  if (number === 1) {
    catAge = 15;
  }
  if (number > 1 && number < 2) {
    catAge = 15 + (number - 1) * 9;
  }
  if (number === 2) {
    catAge = 24;
  }
  if (number > 2) {
    catAge = 24 + 4 * (number - 2);
  }

  let dogAge;
  if (number <= 0) {
    dogAge = "not born yet";
  }
  if (number < 1 && number > 0) {
    dogAge = "just a wee un";
  }
  if (number === 1) {
    dogAge = 15;
  }
  if (number > 1 && number < 2) {
    dogAge = 15 + (number - 1) * 9;
  }
  if (number === 2) {
    dogAge = 24;
  }
  if (number > 2) {
    dogAge = 24 + 5 * (number - 2);
  }
  return [humanAge, catAge, dogAge];
};
module.exports = humanCatDogYears;
