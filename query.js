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
    database: "spaceB",
  });

  // Function to View each Department

function viewAllDepartment (express) {
    express.query(`SELECT First AS First_Name, Last AS Last_Name, Manager_Name, Title FROM Employee LEFT JOIN Manager ON  Manager.id=Employee.Manager_ID
    LEFT JOIN Role ON Role.id=Employee.Role_ID;`, (error, results) => {
        console.table(results);
    });
  };
  
  function viewAllRole (connection) {
    connection.query(`SELECT Title AS Position, Salary, Name AS Department FROM Role RIGHT JOIN Department ON Role.Department_ID = Department.id;`, (error, results) => {
        console.table(results);
    });
  };
  const viewAllEmployee = () => {
    connection.query(`SELECT Employee.id AS Employee_ID, First AS First_Name, Last AS Last_Name, Manager_Name, Title FROM Employee LEFT JOIN Manager ON Manager.id=Employee.Manager_ID LEFT JOIN Role ON Role.id=Employee.Role_ID;`, (error, results) => {
        console.table(results);
    });
  };

module.exports = viewAllDepartment,viewAllRole,viewAllEmployee;
