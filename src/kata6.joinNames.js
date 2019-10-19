const joinNames = namesObj => {
  const namesArray = namesObj.map(e => e.name);
  if (namesArray.length === 1) {
    return namesArray[0];
  }
  const finalName = namesArray.pop();
  if (namesArray.length >= 2) {
    const joinedNames = namesArray.join(", ");
    return `${joinedNames} & ${finalName}`;
  }
    return `${namesArray[0]} & ${finalName}`;
  };

module.exports = joinNames;

/* Ensure not to do an & if there's only one person. 
Split the array into all the elements apart from the last one, and the last one
Use pop to remove last name
only use the join with commas if the array that doesn't include final name has 2 or more elements
e.g [Bart,Lisa,Maggie] becomes [Bart,Lisa] and "Maggie"
join the shortened array then add '& final element' at the end

*/
