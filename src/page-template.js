const manager = require("../lib/Manager");
const employee = require("../lib/Employee");
const intern = require("../lib/Intern");
const engineer = require("../lib/Engineer");

const start = `<!DOCTYPE html>
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
const end = `\n</main>
        </body>
        </html>`;

const createTeamPage =  team=> {

const teamManagerCard = teamManager =>{
    return `<div class="info-card">
        <div class="card-title">
            <h3>${teamManager.getName()}</h3>
            <h3><i class="fas fa-mug-hot"></i> ${teamManager.getRole()}</h3>
        </div>
            <div class="info">
                <ul>
                    <li>ID: ${teamManager.getId()}</li>
                    <li>Email: <a href="mailto:${teamManager.getEmail()}">${teamManager.getEmail()}</a></li>
                    <li>Office number: ${teamManager.getOfficeNumber()}</li>
                </ul>
            </div>
    </div>`;
}

const teamEngineerCard = teamEngineer =>{
    return `<div class="info-card">
            <div class="card-title">
                <h3>${teamEngineer.getName()}</h3>
                <h3><i class="fas fa-glasses"></i> ${teamEngineer.getRole()}</h3>
            </div>
                <div class="info">
                    <ul>
                        <li>ID: ${teamEngineer.getId()}</li>
                        <li>Email: <a href="mailto:${teamEngineer.getEmail()}">${teamEngineer.getEmail()}</a></li>
                        <li>Github username: <a href ="https://github.com/${teamEngineer.getGithub()}" target= "_blank">${teamEngineer.getGithub()}</a></li>
                    </ul>
                </div>
        </div>`;
}

const teamInternCard = teamIntern =>{
    return `<div class="info-card">
            <div class="card-title">
                <h3>${teamIntern.getName()}</h3>
                <h3><i class="fas fa-user-graduate"></i> ${teamIntern.getRole()}</h3>
            </div>
                <div class="info">
                    <ul>
                        <li>ID: ${teamIntern.getId()}</li>
                        <li>Email: <a href="mailto:${teamIntern.getEmail()}">${teamIntern.getEmail()}</a></li>
                        <li>School: ${teamIntern.getSchool()}</li>
                    </ul>
                </div>
        </div>`; 
}

const html =[];

html.push(team
    .filter(employee => employee.getRole()==="Manager")
    .map(manager => teamManagerCard(manager))
);

html.push(team
    .filter(employee => employee.getRole()==="Engineer")
    .map(engineer => teamEngineerCard(engineer))
    .join("")
);

html.push(team
    .filter(employee => employee.getRole()==="Intern")
    .map(intern => teamInternCard(intern))
    .join("")
);
return html.join("");
}

const pageTemplate = team => {
    return `${start} 
    ${createTeamPage(team)}
    ${end}`;
}

module.exports = pageTemplate;