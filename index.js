const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// 1. Come up with README.md file for default file structure
// 2. Decide what questions you want to ask, and the format
// 3. Handle the user input
// 4. Generate the README.md content based on user input
// 5. Write to README.md file
// want to write new file in a sub folder so repo readme is not overwritten, research is suggesting using fs.writeFile(), continue to look into this.

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    `# Title
    
    ## Description    
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation

    ## Usage

    ## License

    ## Contributing

    ## Tests

    ## Questions
    `
}

// function to initialize program
function init() {
    inquirer 
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },
            {
                type: "input",
                name: "title",
                message: "What is your projects name?"
            },
            {
                type: "input",
                name: "description",
                message: "Please give a short description of your project"
            },
            {
                type: "input",
                name: "licence",
                message: "What type of licence should your project have?"
            },
            {
                type: "input",
                name: "dependencies",
                message: "What command should be run to install dependencies?"
            },
            {
                type: "input",
                name: "tests",
                message: "What command should be run to run tests?"
            },
            {
                type: "input",
                name: "usage",
                message: "What does the user need about using the repo"
            },
            {
                type: "input",
                name: "contributing",
                message: "What does the user need about contributing to the repo"
            },
        ])
        .then((answers) => {
            const readMeContent = generateMarkdown(answers);
            //write to file
        })
}

// function call to initialize program
init();
