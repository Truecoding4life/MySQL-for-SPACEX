// Import requires modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "11223344",
  database: "spaceX",
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

let DoNext = 0;
inquirer.prompt(question[0]).then(function (answers) {
  switch (answers.Main) {
    case "VIEW ALL DEPARTMENTS":
      DoNext = 0;
      console.log("USER VIEWED ALL DEPARTMENTS ");
      break;
    case "VIEW ALL ROLES":
      DoNext = 1;
      console.log("USER VIEWED ALL ROLES");
      break;
    case "VIEW ALL EMPLOYEE":
      DoNext = 2;
      console.log("USER VIEWED ALL EMPLOYEE");
      break;
    case "ADD NEW DEPARTMENT":
      DoNext = 3;
      console.log("USER ADDED NEW DEPARTMENT");
      break;
    case "ADD NEW ROLE":
      DoNext = 4;
      console.log("USER ADDED NEW ROLE");
      break;
    case "ADD EMPLOYEE":
      DoNext = 5;
      console.log("USER ADDED EMPLOYEE");
      break;
    case "UPDATE EMPLOYEE'S ROLE":
      DoNext = 6;
      console.log("USER UPDATED EMPLOYEE'S ROLE");
      break;
    case "EXIT":
      DoNext = 7;
      console.log(" USER EXITED ");
      return;
  }
  inquirer.prompt(NextQuestion[DoNext]).then(function (answers1) {
    console.log("Your name is:", answers1.name);
  });
});

// function().then()
