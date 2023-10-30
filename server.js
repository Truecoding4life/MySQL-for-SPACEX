// Import requires modules
const inquirer = require('inquirer');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3001;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "11223344",
  database: 'spaceX'
});


// view all departments, view all roles, 
// view all employees, add a department, add a role,
// add an employee, and update an employee role

const question = [
  {
    name: 'Main',
    message: 'Select an option to continue ',
    type: 'list',
    choices: ['VIEW ALL DEPARTMENTS', 
    'VIEW ALL ROLES','VIEW ALL EMPLOYEE',
    'ADD NEW DEPARTMENT','ADD NEW ROLE',
    'ADD EMPLOYEE',"UPDATE EMPLOYEE'S ROLE",
    'EXIT',
  ]}, {
    name: 'greeting',
    message: 'What would you like to say?',
    type: 'input'
   }

]

inquirer
  .prompt([
    question[0],
    question[1]
  ])
  .then(function (answers) {
    switch (answers.Main) {
      case "VIEW ALL DEPARTMENTS":
        console.log("case 1");
        break;
      case "VIEW ALL ROLES":
        console.log("case 2");
        break;
      case "VIEW ALL EMPLOYEE":
        console.log("case 3");
        break;
      case "ADD NEW DEPARTMENT":
          console.log("case 3");
          break;
      case "ADD NEW ROLE":
        console.log("case 3");
        break;
      case "ADD EMPLOYEE":
        console.log("case 3");
        break;
      case "UPDATE EMPLOYEE'S ROLE":
          console.log("case 3");
          break;
      case "EXIT":
            console.log(" USER EXITED ");
            return;
    }
  });
    

