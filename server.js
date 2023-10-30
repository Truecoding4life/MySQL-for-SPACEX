const inquirer = require('inquirer');
const mysql = require('mysql2');

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