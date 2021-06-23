const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
      super(teamManger);
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
      return this.officeNumber;
    }
    getRole() {
        return "Manager";
      }
  }
  
module.exports = Manager;