const reachDestination = (distance, speed) => {
    const time = distance / speed;
  const roundedTime = Math.round(time * 2) / 2;

    if (roundedTime < 0) {
        return "No negative units, please.";
    }
    if (roundedTime === 0) {
        return "I should be there in less than half an hour";
    }
    if (roundedTime === 1) {
        return "I should be there in 1 hour.";
    } else {
        return `I should be there in ${roundedTime} hours.`;
    }
};

module.exports = reachDestination;



/* get exact time as distance in miles divided by mph */
/* 100 miles at 20mph should be 100 / 20 = 5 */
/*To get to the nearest half mile, get the number e.g. 4.4, double it to 8.8, round that number to 9, then divide that result by 2 */

// add something so that if it's one hour, it says "I'll be there in 1 hour", rather than hours
//if it rounds down to less than half an hour (0), "I'll be there in less than half an hour