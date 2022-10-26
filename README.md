# Team-Profile-Generator

## Description
This node based program allows you to enter in information about employees, then generates an HTML webpage that displays the summaries for each person.

[Watch the demo!](https://watch.screencastify.com/v/9Gs7SHHN4StPLLOW6nh5)

## Technology Used
* Node.js
* Inquirer
* Jest
* Bootstrap
* JavaScript
* CSS

## Code Snippet
This code snippet shows a part of a switchcase that takes in the result of 
a user input and applies that to the corresponding case. 

``` Javascript
.then((answers) => {
      switch (answers.employeePicker) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "No more employees":
          makeADaPizza(answers);

```

## Code Snippet

In this code, I create a const variable that returns a card in HTML with the user inputs inserted in place.
``` Javascript
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
```
## Author Links
[Github](https://github.com/mattjgatsby)
[LinkedIn](https://www.linkedin.com/in/matthew-gatsby-1a1521250/)