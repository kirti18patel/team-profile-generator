const Engineer = require("../lib/Engineer");

test('create an engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test('set name of engineer', () => {
    const engineer = new Engineer("kirti");
    expect(engineer.name).toBe("kirti");
});

test('set id of engineer', () => {
    const engineer = new Engineer("kirti", 1);
    expect(engineer.id).toBe(1);
});

test('set email of engineer', () => {
    const engineer = new Engineer("kirti", 1, "kirti18patel@yahoo.com");
    expect(engineer.email).toBe("kirti18patel@yahoo.com");
});

test('set github of engineer', () => {
    const engineer = new Engineer("kirti", 1, "kirti18patel@yahoo.com", "kirti18patel");
    expect(engineer.github).toBe("kirti18patel");
});

test('return name of engineer', () => {
    const engineer = new Engineer("kirti");
    expect(engineer.getName()).toBe("kirti");
});

test('return id of engineer', () => {
    const engineer = new Engineer("kirti", 1);
    expect(engineer.getId()).toBe(1);
});

test('return email of engineer', () => {
    const engineer = new Engineer("kirti", 1, "kirti18patel@yahoo.com");
    expect(engineer.getEmail()).toBe("kirti18patel@yahoo.com");
});

test('return github of engineer', () => {
    const engineer = new Engineer("kirti", 1,"kirti18patel@yahoo.com", "kirti18patel");
    expect(engineer.getGithub()).toBe("kirti18patel");
});

test('return role of engineer', () => {
    const engineer = new Engineer("kirti", 1, "kirti18patel@yahoo.com", "kirti18patel");
    expect(engineer.getRole()).toBe("Engineer");
});