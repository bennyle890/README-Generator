// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('.utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        //validate property to checkt hat the user provided a value
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
    {
        type: 'input',
        name: 'commands',
        message: 'What command should be run to run tests?',
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: (value)=>{ if(value){return true} else {return 'Must input value to continue'}},
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Readme Generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            //do stuff with the answers
            console.log(answers);

            //after all answers are collected, write to file!
            //TODO - build a string that uses our answers to generate some markdown, and write that to our file as the 'data' parameter. (replace the test values below)
            writeToFile('README.md', 'here is some data');

            const template = `${projectName}

            # ${data.projectName}
            https://github.com/${data.github}/${data.projectName}
            # Description
            ${data.Description}
            #Table of Contents
            * [Installation](#installation)
            * [Usage](#usage)
            * [License](#license)
            * [Contributing](#contributing)
            # Installation
            The following necessary dependencies must be installed to run the application
            # Usage
            In order to use this app, ${data.usage}
            # License
            This project is licensed under the ${data.license} license.
            ![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
            # Contributing
            Contributors: ${data.contributing}`
    
        })
}

// Function call to initialize app
init();
