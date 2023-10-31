// This file contains all of our questions
const allRole = ["Human Resources", "Design", "Test", "Finance", "Education"];
const question = [

  { // First question
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
  { // Question for add department
    name: "department",
    message: "Enter",
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
  },
 
];

module.exports = question;
