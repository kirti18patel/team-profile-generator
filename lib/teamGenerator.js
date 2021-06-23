const inquirer = require('inquirer');
const PageTemplate = require("../src/page-template");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const Employee = require("./Employee");
const PageTemplate = require('../src/page-template');


function TeamGenerator (){
  this.start = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    </head>
    <body>
        <header><h2>My Team</h2></header>
        <main>`;
  this.end = `\n</main>
        </body>
        </html>`;
        
  this.employeeInfo =[];

  console.log("Please build your team : ");
}

TeamGenerator.prototype.initializeGenaration = function(){
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the team manager\'s name? ( Required )',
            validate: name => {
              if (name && isNaN(name)) {
                return true;
              } else {
                console.log('Please enter valid name!');
                return false;
              }
            }
          },
          {
            type: 'text',
            name: 'id',
            message: 'What is the team manager\'s id?',
            validate: id => {
              if (!isNaN(id) && id>0) {
                return true;
              } else {
                console.log('Please enter valid id!');
                return false;
              }
            }
          },
          {
            type: 'text',
            name: 'email',
            message: 'What is the team manager\'s email?'
          },
          {
            type: 'text',
            name: 'number',
            message: 'What is the team manager\'s office number?',
            validate: number => {
                if (!isNaN(number)) {
                  return true;
                } else {
                  console.log('Please enter valid office number!');
                  return false;
                }
              }
          },
          {
            type: 'list',
            name: 'type',
            message: 'Which type of team member you would like to add?',
            choices : ["Engineer", "Intern" , "I don\'t want to add more team members"]
          }
        ]).then(teamManager => {
        const Employee = new Employee(teamManager);
        
        const TeamManager = new TeamManager(teamManager);
        if(teamManager.type=== "Engineer" || teamManager.type === "Intern"){
          this.askMoreQue(teamManager.type , teamManager);
        }
        else{
          const PageTemplate= new PageTemplate(this.start, this.end, this.employeeInfo)
          PageTemplate.generatePage(teamManager);
        }
    })
}

TeamGenerator.prototype.askMoreQue = function(type, teamManager){
  var que="";
  if(type==="Engineer"){
      que = "Github username";
  }
  else{
      que = "School";
  }
  inquirer.prompt([
      {
          type: 'text',
          name: 'name',
          message: 'What is your ' + type + '\'s name?',
          validate: name => {
            if (name && isNaN(name)) {
              return true;
            } else {
              console.log('Please enter valid name!');
              return false;
            }
          }
      },
      {
          type: 'text',
          name: 'id',
          message: 'What is your ' + type + '\'s id?',
          validate: id => {
            if (!isNaN(id) && id>0) {
              return true;
            } else {
              console.log('Please enter valid id!');
              return false;
            }
          }
      },
      {
          type: 'text',
          name: 'email',
          message: 'What is your ' + type + '\'s email?'
      },
      {
          type: 'text',
          name: 'que',
          message: 'What is your ' + type + '\'s ' + que + '?'
      },
      {
          type: 'list',
          name: 'type',
          message: 'Which type of team member you would like to add?',
          choices : ["Engineer", "Intern" , "I don\'t want to add more team members"]
      }
  ]).then(data =>{
      if(data.type!=="I don\'t want to add more team members"){
          var nextType = data.type;
          data.type = type;
      }
      
      this.employeeInfo.push(data);
      if(data.type=== "Engineer" || data.type === "Intern"){
          this.askMoreQue(nextType, teamManager);
      }
      else{
          data.type = type;
          const PageTemplate= new PageTemplate(this.start, this.end, this.employeeInfo)
          PageTemplate.generatePage(teamManager);
      }  
  })
}
module.exports = TeamGenerator;