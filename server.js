const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "11223344",
  database: 'spaceX'
});
inquirer
.prompt ([
      {
        name: 'greeting',
        message: 'What would you like to say?',
        type: 'input'
       }, 
       {
        name: 'greeting',
        message: 'What would you like to say?',
        type: 'input'
       }
    ])
      .then(function(answer){
        console.log(answer);
      });