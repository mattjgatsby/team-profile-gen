//creating team function that holds the individual functions for each lib
//creating cards for each lib
const generateTeamHtml = team => {
//create manager card
    const generateManager = manager => {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h4 class="card-title">${manager.getName()}</h4>
                        <h5 class="card-title">${manager.getRole()}</h5>
                    </div>
                    <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${manager.getId()}: </li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                    </div> 
                  </div>`
    }
//create engineer card
const generateEngineer = engineer => {
    return `<div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h4 class="card-title">${engineer.getName()}</h4>
                    <h5 class="card-title">${engineer.getRole()}</h5>
                </div>
                <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${engineer.getId()}: </li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${engineer.getOfficeNumber()}</li>
                </ul>
                </div> 
              </div>`
}
//create intern card
const generateIntern = intern => {
    return `<div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h4 class="card-title">${intern.getName()}</h4>
                    <h5 class="card-title">${intern.getRole()}</h5>
                </div>
                <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${intern.getId()}: </li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${intern.getOfficeNumber()}</li>
                </ul>
                </div> 
              </div>`
}
}
