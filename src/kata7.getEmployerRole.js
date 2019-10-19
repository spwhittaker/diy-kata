const getEmployerRole = (employeeName, employees) => {
  let employeeObject = employees.find(e => e.name === employeeName); //find the object in the array that has that name value
  if (!employeeObject) {
    return "That person doesn't work here."; //give a message if there is no object with that name value
  }
  return employeeObject.role; //return the role value of the object
};
module.exports = getEmployerRole;


