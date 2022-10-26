//creating team function that holds the individual functions for each lib

const Employee = require("../lib/Employee");

//creating cards for each lib
const generateTeamHtml = (team) => {
  //create manager card
  const generateManager = (manager) => {
    return `<div class="card border border-primary" style="width: 18rem;">
                    <div class="card-header">
                        <h4 class="card-title">${manager.getName()}</h4>
                        <h5 class="card-title">${manager.getRole()}</h5>
                    </div>
                    <div class="card-body ">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${manager.getId()}: </li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                    </div> 
                  </div>`;
  };
  //create engineer card
  const generateEngineer = (engineer) => {
    return `<div class="card border border-primary" style="width: 18rem;">
                <div class="card-header">
                    <h4 class="card-title">${engineer.getName()}</h4>
                    <h5 class="card-title">${engineer.getRole()}</h5>
                </div>
                <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${engineer.getId()}: </li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
                </div> 
              </div>`;
  };
  //create intern card
  const generateIntern = (intern) => {
    return `<div class="card border border-primary" style="width: 18rem;">
                <div class="card-header">
                    <h4 class="card-title">${intern.getName()}</h4>
                    <h5 class="card-title">${intern.getRole()}</h5>
                </div>
                <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${intern.getId()}: </li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
                </div> 
              </div>`;
  };
  const teamArr = [];
  teamArr.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  teamArr.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  teamArr.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return teamArr.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron custom-jumbo">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="containter">
        <div class="row">
            <div class="col-12 d-flex justify-content-center custom-card">
            ${generateTeamHtml(team)}
            </div>
        </div>
    </div>
    
</body>
</html>
    `;
};

// function generateAllHtml() {
  
// }