const Intern = require("../lib/Intern");

test('create an intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test('set name of intern', () => {
    const intern = new Intern("kirti");
    expect(intern.name).toBe("kirti");
});

test('set id of intern', () => {
    const intern = new Intern("kirti", 1);
    expect(intern.id).toBe(1);
});

test('set email of intern', () => {
    const intern = new Intern("kirti", 1, "kirti18patel@yahoo.com");
    expect(intern.email).toBe("kirti18patel@yahoo.com");
});

test('set school of intern', () => {
    const intern = new Intern("kirti", 1, "kirti18patel@yahoo.com", "U of T");
    expect(intern.school).toBe("U of T");
});

test('return name of intern', () => {
    const intern = new Intern("kirti");
    expect(intern.getName()).toBe("kirti");
});

test('return id of intern', () => {
    const intern = new Intern("kirti", 1);
    expect(intern.getId()).toBe(1);
});

test('return email of intern', () => {
    const intern = new Intern("kirti", 1, "kirti18patel@yahoo.com");
    expect(intern.getEmail()).toBe("kirti18patel@yahoo.com");
});

test('return github of intern', () => {
    const intern = new Intern("kirti", 1,"kirti18patel@yahoo.com", "U of T");
    expect(intern.getSchool()).toBe("U of T");
});

test('return role of intern', () => {
    const intern = new Intern("kirti", 1, "kirti18patel@yahoo.com", "U of T");
    expect(intern.getRole()).toBe("Intern");
});