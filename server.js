// Import requires modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
    name: "greeting",
    message: "What would you like to say?",
    type: "input",
  },
];

const NextQuestion = [
  {
    name: "name",
    message: "What is your name?",
    type: "input",
  },
  {
    name: "age",
    message: "What is your age?",
    type: "input",
  },
];
Ask();
let DoNext = 0;
function Ask () {
  inquirer.prompt(question[0]).then(function (answers) {
    switch (answers.Main) {
      case "VIEW ALL DEPARTMENTS":
        viewAllDepartment();
        console.log("NOW VIEWING ALL DEPARTMENTS ");
        break;
      case "VIEW ALL ROLES":
        viewAllRole();
        console.log("NOW VIEWING ALL ROLES");
        break;
      case "VIEW ALL EMPLOYEE":
        viewAllEmployee();
        console.log("NOW VIEWING ALL EMPLOYEE");
        break;
      case "ADD NEW DEPARTMENT":
        console.log("USER ADDED NEW DEPARTMENT");
        break;
      case "ADD NEW ROLE":
        console.log("USER ADDED NEW ROLE");
        break;
      case "ADD EMPLOYEE":
        console.log("USER ADDED EMPLOYEE");
        break;
      case "UPDATE EMPLOYEE'S ROLE":
        console.log("USER UPDATED EMPLOYEE'S ROLE");
        break;
      case "EXIT":
        console.log(" USER EXITED ");
        return;
    }
    // inquirer.prompt(NextQuestion[DoNext]).then(function (answers1) {
    //   console.log("Your name is:", answers1.name);
    // });
  });
}



// Function to View each Department

function viewAllDepartment () {
  connection.query(`SELECT First AS First_Name, Last AS Last_Name, Manager_Name, Title FROM Employee LEFT JOIN Manager ON  Manager.id=Employee.Manager_ID
  LEFT JOIN Role ON Role.id=Employee.Role_ID;`, (error, results) => {
      console.table(results);
      Ask();
  });
};

function viewAllRole () {
  connection.query(`SELECT Title AS Position, Salary, Name AS Department FROM Role RIGHT JOIN Department ON Role.Department_ID = Department.id;`, (error, results) => {
      console.table(results);
      Ask();
  });
};
const viewAllEmployee = () => {
  connection.query(`SELECT Employee.id AS Employee_ID, First AS First_Name, Last AS Last_Name, Manager_Name, Title FROM Employee LEFT JOIN Manager ON Manager.id=Employee.Manager_ID LEFT JOIN Role ON Role.id=Employee.Role_ID;`, (error, results) => {
      console.table(results);
      Ask();
  });
};
