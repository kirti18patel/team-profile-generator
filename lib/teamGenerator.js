const inquirer = require('inquirer');

function TeamGenerator (){

}
TeamGenerator.prototype.initializeGenaration = function(){
    console.log("Please build your team : ");
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the team manager\'s name? ( Required )',
            validate: name => {
              if (name && isNaN(name)) {
                return true;
              } else {
                console.log('Please enter valid office number!');
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
            type: ' ',
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
        ]).then(data => {
        console.log(data);
    })
}
module.exports = TeamGenerator;