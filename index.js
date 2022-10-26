const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
//bring in all libs
//path

// const path_dir = path.resolve(__dirname, "dist");
// const pathFile = path.join(path_dir, "team.html");

const sourceTemp = require("./src/teamtemp");

function employeeSelector() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeePicker",
        message: "Which Employee do you want next?",
        choices: ["Engineer", "Intern", "No more employees"],
      },
    ])
    .then((answers) => {
      switch (answers.employeePicker) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "No more employees":
          console.log(teamHTML)
          makeADaPizza(answers);
      }
    });
}

const teamHTML = [];
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "What is your teams manager name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team managers id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the managers email?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the managers office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.manager,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffice
      );
      teamHTML.push(manager);
      employeeSelector();
    });
}
//need to make create team

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "intern",
        message: "What is your teams intern name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the team intern id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the interns school name?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.intern,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamHTML.push(intern);
      employeeSelector();
    });
}

function addEngineer() {
  console.log("duck");
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineer",
        message: "What is your teams engineer name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the team engineer id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineers Github?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineer,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamHTML.push(engineer);
      employeeSelector();
    });
}

function makeADaPizza() {
  fs.writeFile("./dist/index.html", sourceTemp(teamHTML), (err) =>
    err ? console.error(err) : console.log("html generated succesfully!")
  );
}

addManager();
// makeADaPizza()
