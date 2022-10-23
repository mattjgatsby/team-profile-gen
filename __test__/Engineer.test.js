const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("get github username via constructor", () => {
    const value = "mattjgatsby";
    const employee = new Engineer("matt", 1, "mattjgatsby@gmail.com", value);
    expect(employee.github).toBe(value)
})

test("get github username via getGithub()", () => {
    const value = "mattjgatsby";
    const employee = new Engineer("matt", 1, "mattjgatsby@gmail.com", value);
    expect(employee.getGithub()).toBe(value)
})

test("get role via getRole()", () => {
    const value = "Engineer";
    const employee = new Engineer("matt", 1, "mattjgatsby@gmail.com", "mattjgatsby");
    expect(employee.getRole()).toBe(value);
})