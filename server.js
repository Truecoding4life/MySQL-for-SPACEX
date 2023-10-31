// Import requires modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const question = require('./Assets/js/questions');

// Connect to Database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "11223344",
  database: "spaceB",
});
let allDepartment = [];
let allManager =[];
let allRole = [];
updateDepartment(); // This function will update the department array
updateRole(); // This function will update the role array
// updateManager(); // This function will update manager array
// This function will prompt main questions
function Ask() {
  inquirer.prompt(question[0]).then(function (answers) {
    switch (answers.Main) {
      case "VIEW ALL DEPARTMENTS":
        viewAllDepartment();
        console.log("NOW VIEWING ALL DEPARTMENTS ");
        break;
      case "VIEW ALL ROLES":
        viewAllRole();
        console.log("NOW VIEWING ALL ROLES, SALARY AND DEPARTMENTS");
        break;
      case "VIEW ALL EMPLOYEES":
        viewAllEmployee();
        console.log("NOW VIEWING ALL EMPLOYEE INFORMATION");
        break;
      case "ADD NEW DEPARTMENT":
        addDepartment();
        break;
      case "ADD NEW ROLE":
        addRole();
        break;
      case "ADD EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE EMPLOYEE'S ROLE":
        console.log("USER UPDATED EMPLOYEE'S ROLE");
        break;
      case "EXIT":
        console.log(" USER EXITED ");
        return;
    }
  });
}

// This function will render all Departments within the database
function viewAllDepartment() {
  connection.query(`SELECT * FROM Department`, (error, results) => {
    console.table(results);
    Ask(); // Ask the first question again after user selected a choice
  }
  );
};

// This function will render all role within the database
function viewAllRole() {
  connection.query(
    `SELECT Title AS Position, Salary, Name AS Department FROM Role LEFT JOIN Department ON Role.Department_ID = Department.id;`,
    (error, results) => {
      (error)=>{ console.log("View All Role ERROR 404")}
      console.table(results);
      Ask(); // Ask the first question again after user selected a choice
    }
  );
};
// This function will render all employee within the database
function viewAllEmployee(){
  connection.query(`SELECT Employee.id AS Employee_ID, Title AS Position, First AS First_Name, Last AS Last_Name, Manager_Name FROM Employee LEFT JOIN Manager ON  Manager.id=Employee.Manager_ID
  LEFT JOIN Role ON Role.id=Employee.Role_ID;`,
(error, results) => {
      console.table(results);
      Ask(); // Ask the first question again after user selected a choice
    }
  );
};

// Add new department to the database using this function
function addDepartment() {
  inquirer.prompt(question[1]).then((respond) => {
      allDepartment.push(respond.department);
      connection.query(`INSERT INTO Department(name) VALUES ("${respond.department}");`
      );}).then(() => {
      console.log("NEW DEPARTMENT ADDED")
      
      Ask(); // Ask the first question again after user selected a choice
    });
}

// Add new role to database using this
function addRole() {
  inquirer
    .prompt([question[2],question[3], {
      name: "id",
      message: "CHOSE A DEPARTMENT FOR THIS ROLE", // ID is Special since the User doesn't know exactly which id to input we will use a list
      type: "list",
      choices: allDepartment,
    },])
    .then((respond) => {
      const IdConvert = allDepartment.indexOf(respond.id);
      connection.query(
        `INSERT INTO Role(Title, Salary, Department_ID) VALUES ("${respond.Rolename}", "${respond.salary}", ${IdConvert} );`
      );
    })
    .then(() => {
      console.log("NEW ROLE");
      Ask();
    });
}
function updateDepartment() {
  connection.query("SELECT Name FROM Department ", (error, results) => {
    for (i = 0; i < results.length; i++) {
      allDepartment.push(results[i].Name);
    }
  });
  return allDepartment;
};


// This function will add new employee
// This function will prompt questions to add new employee
function addEmployee(){
  inquirer.prompt([question[5],question[6],{
    name: "role",
    message: "CHOSE A ROLE FOR THIS EMPLOYEE", // ID is Special since the User doesn't know exactly which id to input we will use a list
    type: "list",
    choices: allRole,
  }, {
    name: "manager",
    message: "CHOSE A MANAGER FOR THIS EMPLOYEE, REMEMBER THAT EVERYBODY FALL UNDER CEO ELON MUSK",
    type: "list",
    choices: allManager,
  },])
  .then((respond) => { 
    const roleID = allRole.indexOf(respond.role);
    const ManagerID = allManager.indexOf(respond.manager);
    connection.query(`INSERT INTO Employee(First, Last, Role_ID,Manager_ID) VALUES ("${respond.first}", "${respond.last}", ${(roleID+1)}, ${(ManagerID+1)});`);
    Ask();
  })
};

function updateRole(){
  connection.query("SELECT Title FROM Role ", (error, results) => {
    for (i = 0; i < results.length; i++) {
      allRole.push(results[i].Title);
    }
  });
  return allRole;
};
// function updateRole(){
//   connection.query("SELECT Title FROM Department ", (error, results) => {
//     for (i = 0; i < results.length; i++) {
//       allRole.push(results[i].Title);
//     }
//   });
//   return allRole;
// };
// This function will prompt first question
Ask();

module.exports=addRole;