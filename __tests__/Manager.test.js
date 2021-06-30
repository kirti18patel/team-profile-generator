const Manager = require("../lib/Manager");

test('create an manager object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test('set name of manager', () => {
    const manager = new Manager("kirti");
    expect(manager.name).toBe("kirti");
});

test('set id of manager', () => {
    const manager = new Manager("kirti", 1);
    expect(manager.id).toBe(1);
});

test('set email of manager', () => {
    const manager = new Manager("kirti", 1, "kirti18patel@yahoo.com");
    expect(manager.email).toBe("kirti18patel@yahoo.com");
});

test('set officeNumber of manager', () => {
    const manager = new Manager("kirti", 1, "kirti18patel@yahoo.com", 123456789);
    expect(manager.officeNumber).toBe(123456789);
});

test('return name of manager', () => {
    const manager = new Manager("kirti");
    expect(manager.getName()).toBe("kirti");
});

test('return id of manager', () => {
    const manager = new Manager("kirti", 1);
    expect(manager.getId()).toBe(1);
});

test('return email of manager', () => {
    const manager = new Manager("kirti", 1, "kirti18patel@yahoo.com");
    expect(manager.getEmail()).toBe("kirti18patel@yahoo.com");
});

test('return officeNumber of manager', () => {
    const manager = new Manager("kirti", 1,"kirti18patel@yahoo.com", 123456789);
    expect(manager.getOfficeNumber()).toBe(123456789);
});

test('return role of manager', () => {
    const manager = new Manager("kirti", 1, "kirti18patel@yahoo.com", 123456789);
    expect(manager.getRole()).toBe("Manager");
});