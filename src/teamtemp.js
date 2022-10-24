//creating team function that holds the individual functions for each lib
//creating cards for each lib
const generateTeamHtml = team => {
//create manager card
    const generateManager = manager => {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h4 class="card-title">${manager.getName()}</h4>
                        <h5 class="card-title">Role</h5>
                    </div>
                    <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: </li>
                      <li class="list-group-item">Email: <a href="test@gmail.com">test@gmail.com</a></li>
                      <li class="list-group-item">Office Number: </li>
                    </ul>
                    </div> 
                  </div>`
    }
//create engineer card

//create intern card
}
