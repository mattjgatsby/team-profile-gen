const Employee = require("../lib/Employee");

test("Initiate employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object")
}) 

test("get name via constructor", () => {
    const name = "Matt"
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
}) 

test("get id via constructor", () => {
    const value = 1;
    const employee = new Employee("Matt", value);
    expect(employee.id).toBe(value)
}) 

test("get email via constructor", () => {
    const value = "matt@email.com";
    const employee = new Employee("Matt", 1, value);
    expect(employee.email).toBe(value)
}) 

test("get name via getName()", () => {
    const value = "Matt"
    const employee = new Employee(value);
    expect(employee.getName()).toBe(value)
}) 

test("get id via getId()", () => {
    const value = 1;
    const employee = new Employee("Matt", value);
    expect(employee.getId()).toBe(value)
}) 

test("get email via getEmail()", () => {
    const value = "matt@email.com";
    const employee = new Employee("Matt", 1, value);
    expect(employee.getEmail()).toBe(value)
}) 

test("get role via getRole()", () => {
    const value = "Employee";
    const employee = new Employee("Matt", 1, "matt@email.com");
    expect(employee.getRole()).toBe(value)
}) 