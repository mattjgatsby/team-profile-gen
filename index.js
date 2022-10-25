const inquirer = require('require');
const fs = require('fs');
//bring in all libs
//path

const path_dir = path.resolve(__dirname, "dist");
const pathFile = path.join(path_dir, "team.html");

import sourceTemp from "./src/teamtemp";

const teamHTML = [];
function init() {
  function addManager() {
    inquirer.prompt([
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
      .then(answers)
      const manager = new Manager(answers.manager, )
      teamHTML.push(manager)
      // functionname() switch case to menu;
  }
  //need to make create team
  function addEnginer() {
    inquirer.prompt([
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
    ]);
  }

  function addIntern() {
    inquirer.prompt([
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
  }
}

function makeADaPizza() {
    fs.writeFile(pathFile, sourceTemp[teamHTML], (err) =>
      err ? console.error(err) : console.log(answers)
    );
  };
init()
makeADaPizza()