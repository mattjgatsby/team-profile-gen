const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("get school name via constructor", () => {
    const value = "VCU";
    const employee = new Intern("Matt", 1, "matt@gmail.com", value);
    expect(employee.school).toBe(value)
})

test("get school via getSchool()", () => {
    const value = "VCU";
    const employee = new Intern("Matt", 1, "matt@gmail.com", value);
    expect(employee.getSchool()).toBe(value)
})

test("get role via getRole()", () => {
    const value = "Intern";
    const employee = new Intern("Matt", 1, "matt@gmail.com", "VCU");
    expect(employee.getRole()).toBe(value)
})