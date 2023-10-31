// Import requires modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let newArray = [];
// Connect to Database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "11223344",
  database: "spaceB",
});

// view all departments, view all roles,
// view all employees, add a department, add a role,
// add an employee, and update an employee role

const question = [
  {
    name: "Main",
    message: "Select an option to continue ",
    type: "list",
    choices: [
      "VIEW ALL DEPARTMENTS",
      "VIEW ALL ROLES",
      "VIEW ALL EMPLOYEE",
      "ADD NEW DEPARTMENT",
      "ADD NEW ROLE",
      "ADD EMPLOYEE",
      "UPDATE EMPLOYEE'S ROLE",
      "EXIT",
    ],
  },
  {
    name: "department",
    message: "Enter",
    type: "input",
  },
];

Ask();
let DoNext = 0;
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
      case "VIEW ALL EMPLOYEE":
        viewAllEmployee();
        console.log("NOW VIEWING ALL EMPLOYEE INFORMATION");
        break;
      case "ADD NEW DEPARTMENT":
        addDepartment();
        console.log("CREATE NEW DEPARTMENT");
        break;
      case "ADD NEW ROLE":
        addRole();
        console.log("INPUT REQUIRED");
        break;
      case "ADD EMPLOYEE":
        count();
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

// Function to View each tables

function viewAllDepartment() {
  connection.query(`SELECT * FROM Department`, (error, results) => {
    console.table(results);
    Ask();
  });
}

function viewAllRole() {
  connection.query(
    `SELECT Title AS Position, Salary, Name AS Department FROM Role LEFT JOIN Department ON Role.Department_ID = Department.id;`,
    (error, results) => {
      console.table(results);
      Ask();
    }
  );
}
const viewAllEmployee = () => {
  connection.query(
    ` SELECT Employee.id AS Employee_ID, Title AS Position, First AS First_Name, Last AS Last_Name, Manager_Name FROM Employee LEFT JOIN Manager ON  Manager.id=Employee.Manager_ID
  LEFT JOIN Role ON Role.id=Employee.Role_ID;`,
    (error, results) => {
      console.table(results);
      Ask();
    }
  );
};

// Add new department to the database using this
function addDepartment() {
  inquirer.prompt(question[1]).then((respond) => {
      connection.query(`INSERT INTO Department(name) VALUES ("${respond.department}");`
      );}).then(() => {
      console.log("NEW DEPARTMENT ADDED");
      Ask();
    });
}
const allRole = ['Human Resources', 'Design', 'Test', 'Finance','Education'];
// Add new role to database using this
function addRole() {
  inquirer
    .prompt([
      {
        name: "Rolename",
        message: "ENTER THIS ROLE NAME",
        type: "input",
      },
      {
        name: "salary",
        message: "ENTER THIS ROLE SALARY",
        type: "input",
      },
      {
        name: "id",
        message: "CHOSE A DEPARTMENT FOR THIS ROLE", // ID is Special since the User doesn't know exactly which id to input we will use a list
        type: "list",
        choices: allRole,
      },
    ])
    .then((respond) => {
      const IdConvert = allRole.indexOf(respond.id);
      connection.query(
        `INSERT INTO Role(Title, Salary, Department_ID) VALUES ("${respond.Rolename}", "${respond.salary}", ${IdConvert} );`
      );
    })
    .then(() => {
      console.log("NEW ROLE");
      Ask();
    });
}
function count() {
  connection.query("SELECT Name FROM Department ", (error, results) => {
    let newArray = [];
    for (i = 0; i < results.length; i++) {
      newArray.push(results[i].Name);
    }
  });
  return newArray;
};
