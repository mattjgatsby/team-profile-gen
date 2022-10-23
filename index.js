const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is your teams manager name?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the team managers id?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the managers office number?'
    },
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I do not want to add anymore team members']
    }
]

function init() {
    inquirer.prompt(questions).then((answers) => {
        
    })
}

function genHTML() {

}

init();