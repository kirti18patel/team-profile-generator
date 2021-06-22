const inquirer = require('inquirer');
const fs = require("fs");

function PageTemplate(start, end){
    this.start = start;
    this.end = end;
    this.employeeInfo =[];
    this.employeeInfoHtml='';
}

PageTemplate.prototype.teamManagerCard = function(teamManager){
    console.log(teamManager);
    return `<div class="info-card">
    <div class="card-title">
        <h3>${teamManager.name}</h3>
        <h3><i class="fas fa-mug-hot"></i> Manager</h3>
    </div>
        <div class="info">
            <ul>
                <li>ID: ${teamManager.id}</li>
                <li>Email: <a href="mailto:${teamManager.email}">${teamManager.email}</a></li>
                <li>Office number: ${teamManager.number}</li>
            </ul>
        </div>
</div>`;
}

PageTemplate.prototype.employeeInfoCard = function(){
    for(var i=0; i<this.employeeInfo.length; i++){
        if(this.employeeInfo[i].type==="Engineer"){
            var faIcon = "fas fa-glasses";
        }
        else{
            var faIcon = "fas fa-user-graduate";
        }
        this.employeeInfoHtml+=`<div class="info-card">
        <div class="card-title">
            <h3>${this.employeeInfo[i].name}</h3>
            <h3><i class="${faIcon}"></i> ${this.employeeInfo[i].type}</h3>
        </div>
            <div class="info">
                <ul>
                    <li>ID: ${this.employeeInfo[i].id}</li>
                    <li>Email: <a href="mailto:${this.employeeInfo[i].email}">${this.employeeInfo[i].email}</a></li>
                    <li>Office number: 1</li>
                </ul>
            </div>
    </div>`
    }
    return this.employeeInfoHtml;
}

PageTemplate.prototype.htmlContent = function(teamManager){
    return `${this.start}
    ${this.teamManagerCard(teamManager)}
    ${this.employeeInfoCard()}
    ${this.end}`;
}

PageTemplate.prototype.generatePage = function(teamManager){
    fs.copyFile("./lib/css/style.css", "./dist/style.css", err => {
        if (err) throw err;
    });

    fs.writeFile("./dist/index.html", this.htmlContent(teamManager) , err => {
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
            name: 'email',
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
            this.employeeInfo.push(data);
            console.log(this.employeeInfo);
            this.askMoreQue(data.type, teamManager);
        }
        else{
            this.generatePage(teamManager);
        }
    })
}

module.exports = PageTemplate;