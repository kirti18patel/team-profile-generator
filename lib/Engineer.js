const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
      super(teamManger);
      this.github = github;
    }

    getGithub() {
      return this.github;
    }
    getRole() {
        return "Engineer";
      }
  }
  
module.exports = Engineer;