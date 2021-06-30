const Employee = require("../lib/Employee");

test('create an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('set name of employee', () => {
    const employee = new Employee("kirti");
    expect(employee.name).toBe("kirti");
});

test('set id of employee', () => {
    const employee = new Employee("kirti", 1);
    expect(employee.id).toBe(1);
});

test('set email of employee', () => {
    const employee = new Employee("kirti", 1, "kirti18patel@yahoo.com");
    expect(employee.email).toBe("kirti18patel@yahoo.com");
});

test('return name of employee', () => {
    const employee = new Employee("kirti");
    expect(employee.getName()).toBe("kirti");
});

test('return id of employee', () => {
    const employee = new Employee("kirti", 1);
    expect(employee.getId()).toBe(1);
});

test('return email of employee', () => {
    const employee = new Employee("kirti", 1, "kirti18patel@yahoo.com");
    expect(employee.getEmail()).toBe("kirti18patel@yahoo.com");
});

test('return role of employee', () => {
    const employee = new Employee("kirti", 1, "kirti18patel@yahoo.com");
    expect(employee.getRole()).toBe("Employee");
});