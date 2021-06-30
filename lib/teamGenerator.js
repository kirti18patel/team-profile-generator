const inquirer = require('inquirer');
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const Employee = require("./Employee");
const pageTemplate = require('../src/page-template');
const fs = require("fs");

const teamMembers = [];
const idArr = [];
function TeamGenerator (){
}

TeamGenerator.prototype.createTeam = function(){
  inquirer.prompt([
    {
    type: 'list',
    name: 'type',
    message: 'Which type of team member you would like to add?',
    choices : ["Engineer", "Intern" , "I don\'t want to add more team members"]
  }
]).then(teamMember => {
  switch(teamMember.type){
    case "Engineer":
      this.addEngineer();
      break;
    case "Intern":
      this.addIntern();
      break;
  default:
      this.writeInFile();
  }
});
}

TeamGenerator.prototype.initializeGeneration = function(){
  console.log("Please build your team : ");
    inquirer.prompt([
        {
            type: 'input',
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
            type: 'input',
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
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
            validate: email => {
              if (email && isNaN(email)) {
                return true;
              } else {
                console.log('Please enter valid email id!');
                return false;
              }
            }
          },
          {
            type: 'input',
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
          }
        ]).then(teamManagerData => {
        const manager = new Manager(teamManagerData.name, teamManagerData.id, teamManagerData.email, teamManagerData.number);
        teamMembers.push(manager);
        idArr.push(teamManagerData.id);
        this.createTeam();
    });
}

TeamGenerator.prototype.addEngineer = function(){
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Engineer\'s name?',
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
        type: 'input',
        name: 'id',
        message: 'What is your Engineer\'s id?',
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
        type: 'input',
        name: 'email',
        message: 'What is your Engineer\'s email?',
        validate: email => {
          if (email && isNaN(email)) {
            return true;
          } else {
            console.log('Please enter valid email id!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Engineer\'s Github username ?',
        validate: github => {
          if (github && isNaN(github)) {
            return true;
          } else {
            console.log('Please enter valid github username!');
            return false;
          }
        }
    }
]).then(data =>{
  const engineer = new Engineer(data.name, data.id, data.email, data.github);
  teamMembers.push(engineer);
  idArr.push(data.id);
  this.createTeam();
});
}

TeamGenerator.prototype.addIntern = function(){
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Intern\'s name?',
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
        type: 'input',
        name: 'id',
        message: 'What is your Intern\'s id?',
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
        type: 'input',
        name: 'email',
        message: 'What is your Intern\'s email?',
        validate: email => {
          if (email && isNaN(email)) {
            return true;
          } else {
            console.log('Please enter valid email id!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your Intern\'s school name ?',
        validate: school => {
          if (school && isNaN(school)) {
            return true;
          } else {
            console.log('Please enter valid school name!');
            return false;
          }
        }
    }
]).then(data =>{
  const intern = new Intern(data.name, data.id, data.email, data.school);
  teamMembers.push(intern);
  idArr.push(data.id);
  this.createTeam();
});
}

TeamGenerator.prototype.writeInFile = function(){
  // copy css file
  fs.copyFile("./lib/css/style.css", "./dist/style.css", err => {
    if (err) throw err;
  });
  // generate index.html file
  fs.writeFile("./dist/index.html", pageTemplate(teamMembers) , err => {
    if (err) throw err;
    console.log("Team Profile HTML file created succesfully");
  });
}

module.exports = TeamGenerator;