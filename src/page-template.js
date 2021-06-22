const TeamGenerator = require("../lib/teamGenerator");
const inquirer = require('inquirer'); 

function PageTemplate(start, end){
    this.start = start;
    this.end = end;
}

PageTemplate.prototype.askMoreQue = function(type){
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
            message: 'What is your' + type + '\'s id?',
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
            name: 'id',
            message: 'What is your' + type + '\'s email?'
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is your' + type + '\'s github username?'
        },
        {
            type: 'list',
            name: 'type',
            message: 'Which type of team member you would like to add?',
            choices : ["Engineer", "Intern" , "I don\'t want to add more team members"]
        }
    ]).then(data =>{
        console.log(data);
    })
}
module.exports = PageTemplate;