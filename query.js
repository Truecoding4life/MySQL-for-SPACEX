// let allDepartment = [];
// let allManager =[];
// let allRole = [];
// updateDepartment(); // This function will update the department array
// updateRole(); // This function will update the role array
// updateManager(); // This function will update manager array

// // This function will prompt questions to add new employee
// function addEmployee(){
//   inquirer.prompt([question[5],question[6],{
//     name: "Thisrole",
//     message: "CHOSE A ROLE FOR THIS EMPLOYEE", // ID is Special since the User doesn't know exactly which id to input we will use a list
//     type: "list",
//     choices: allRole,
//   }, {
//     name: "manager",
//     message: "CHOSE A MANAGER FOR THIS EMPLOYEE, REMEMBER THAT EVERYBODY FALL UNDER CEO ELON MUSK",
//     type: "list",
//     choices: allManager,
//   },])
//   .then((respond) => { 
//     const roleID = allRole.indexOf(respond.Thisrole);
//     const ManagerID = allManager.indexOf(respond.manager);
//     connection.query(`INSERT INTO Employee(First, Last, Role_ID,Manager_ID) VALUES ("${respond.first}", "${respond.last}", ${(roleID+1)}, ${(ManagerID+1)});`);
//     Ask();
//   })
// };
