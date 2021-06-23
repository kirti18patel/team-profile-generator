// const Potion = require('./Potion');
// const Character = require('./Character');

class Employee{
    constructor(teamManger) {
      this.name = teamManager.name;
      this.id = teamManager.id;
      this.email = teamManager.email;
      //   this.start = start;
    //   this.end = new end;
    }
  
    getName() {
      return this.name;
    }
    getId() {
        return this.id;
      }
    getEmail() {
        return this.email;
    }
    getName() {
        return "Employee";
    }
  }
  
module.exports = Employee;