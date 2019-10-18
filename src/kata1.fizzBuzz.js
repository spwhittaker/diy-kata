const fizzBuzz = number => {
  let result = ""; 
  if (number % 3 === 0) {
    result += "Fizz";
  } 
  if (number % 5 === 0) {
    result += 'Buzz';
  }
  if (!result) {
    return number;
  }
  return result;
};


module.exports = fizzBuzz;



/* 
have an empty string and call it summat but starts empty yo
Check it's a 3 multiple, and if so add Fizz to a string. 
Then if 5 multiple add Buzz. 
If the string is empty at the end, return the original thing */



