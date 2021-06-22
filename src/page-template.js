const inquirer = require('inquirer');
function PageTemplate(start, end){
    this.start = start;
    this.end = end;
}

PageTemplate.prototype.teamManagerCard = function(data){
    return `<div class="info-card">
    <div class="card-title">
        <h3>${data.name}</h3>
        <h3><i class="fas fa-mug-hot"></i> Manager</h3>
    </div>
        <div class="info">
            <ul>
                <li>ID: ${data.id}</li>
                <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li>Office number: ${data.number}</li>
            </ul>
        </div>
</div>`;
}

PageTemplate.prototype.htmlContent = function(data){
    return `${this.start}
    ${this.teamManagerCard(data)}
    ${this.end}`;
}

const fs = require("fs");
PageTemplate.prototype.generatePage = function(data){
    fs.copyFile("./lib/css/style.css", "./dist/style.css", err => {
        if (err) throw err;
    });

    fs.writeFile("./dist/index.html", this.htmlContent(data) , err => {
        if (err) throw err;
        console.log("Team Profile HTML file created succesfully");
    });
}

PageTemplate.prototype.askMoreQue = function(type, teamManager){
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
            name: 'id',
            message: 'What is your ' + type + '\'s email?'
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is your ' + type + '\'s github username?'
        },
        {
            type: 'list',
            name: 'type',
            message: 'Which type of team member you would like to add?',
            choices : ["Engineer", "Intern" , "I don\'t want to add more team members"]
        }
    ]).then(data =>{
        if(data.type=== "Engineer" || data.type === "Intern"){
            teamManager[data.type] = data;
            console.log(teamManager);
            this.askMoreQue(data.type);
        }
        else{
            this.generatePage(teamManager);
        }
    })
}

module.exports = PageTemplate;