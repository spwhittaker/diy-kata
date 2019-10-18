const numberToReversedDigits = number => {
  const numString = number.toString();  
  const numStringArray = numString.split("");
  const newArray = numStringArray.reverse();
  const numArray = newArray.map(e => {
    return parseInt(e, 10); //parseInt(x, 10);
});
  return numArray;
};

/*split string to array, then call .reverse on that array and return it */

module.exports = numberToReversedDigits;