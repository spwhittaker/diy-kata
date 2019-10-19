const getEmployerRole = (employeeName, employees) => {
  let employeeObject = employees.find(e => e.name === employeeName);
  if (!employeeObject) {
    return "That person doesn't work here.";
  }
  return employeeObject.role;
};
module.exports = getEmployerRole;
