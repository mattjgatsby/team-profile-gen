const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("get officenumber via constructor", () => {
    const value = 27;
    const employee = new Manager("Matt", 1, "matt@email.com", value);
    expect(employee.officenumber).toBe(value)
}) 

test("get officnumber via getOfficeNumber()", () => {
    const value = 28;
    const employee = new Manager("Matt", 1, "matt@email.com", value);
    expect(employee.getOfficeNumber()).toBe(value)
}) 

test("get manager via getRole()", () => {
    const value = "Manager";
    const employee = new Manager("Matt", 1, "matt@email.com", 27);
    expect(employee.getRole()).toBe(value)
}) 
