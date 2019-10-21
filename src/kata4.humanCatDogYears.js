const humanCatDogYears = number => {
  let humanAge;
  switch (true) {
    case number <= 0:
      humanAge = "not born yet";
      break;
    case number < 1 && number > 0:
      humanAge = "just a wee un";
      break;
    default:
      humanAge = number;
      break;
  }
  let catAge;
  switch (true) {
    case number <= 0:
      catAge = "not born yet";
      break;
    case number < 1 && number > 0:
      catAge = "just a wee un";
      break;
    case number === 1:
      catAge = 15;
      break;
    case number > 1 && number < 2:
      catAge = 15 + (number - 1) * 9;
      break;
    case number === 2:
      catAge = 24;
      break;
    default:
      catAge = 24 + 4 * (number - 2);
  }
  let dogAge;
  switch (true) {
    case number <= 0:
      dogAge = "not born yet";
      break;
    case number < 1 && number > 0:
      dogAge = "just a wee un";
      break;
    case number === 1:
      dogAge = 15;
      break;
    case number > 1 && number < 2:
      dogAge = 15 + (number - 1) * 9;
      break;
    case number === 2:
      dogAge = 24;
      break;
    default:
      dogAge = 24 + 5 * (number - 2);
  }
  return [humanAge, catAge, dogAge];
};
module.exports = humanCatDogYears;
