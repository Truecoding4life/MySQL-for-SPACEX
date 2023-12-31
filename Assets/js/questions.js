// This file contains all of our questions
const  addRole = require('../../server');
const allRole = ["Human Resources", "Design", "Test", "Finance", "Education"];
const question = [
  { // First
    name: "Main",
    message: "Select an option to continue ",
    type: "list",
    choices: [
      "VIEW ALL DEPARTMENTS",
      "VIEW ALL ROLES",
      "VIEW ALL EMPLOYEES",
      "ADD NEW DEPARTMENT",
      "ADD NEW ROLE",
      "ADD EMPLOYEE",
      "UPDATE EMPLOYEE'S ROLE",
      "EXIT",
    ],
  },
  { // Question for add department
    name: "department",
    message: "ENTER NEW DEPARTMENT NAME",
    type: "input",
  },
  { // Questions for add role
    name: "Rolename",
    message: "ENTER THIS ROLE NAME",
    type: "input",
  },
  {
    name: "salary",
    message: "ENTER THIS ROLE SALARY",
    type: "input",
    validate: (input)=>{
        if(isNaN(input)!== false){
            console.info ("!!!!!! PLEASE ENTER A NUMBER TO CONTINUE !!!!!!!!");
            addRole();
        } else return true;
    }
  },
  {
    name: "id",
    message: "CHOSE A DEPARTMENT FOR THIS ROLE", // ID is Special since the User doesn't know exactly which id to input we will use a list
    type: "list",
    choices: allRole,
  },
  // Question for add employee
  { 
    name: "first",
    message: "ENTER THIS EMPLOYEE FIRST NAME",
    type: "input",
  },{ 
    name: "last",
    message: "ENTER THIS EMPLOYEE LAST NAME",
    type: "input",
  },
  // Question for update employee role
  {
    name: "employeeRole",
    message: "Select an option to continue ",
    type: "list",
    choices: []
  }
];

module.exports = question;
