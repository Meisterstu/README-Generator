const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// 1. Come up with README.md file default file structure
// 2. Decide what questions you want to ask, and the question format
// 3. Generate the README.md content based on user input
// 4. Write to README.md file
// want to write new file in a sub folder so repo readme is not overwritten, research is suggesting using fs.writeFile(), continue to look into this.

// array of questions for user
const questions = [
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
        type: "list",   //set to dropdown list offer MIT, Apache 2.0, GPL 3.0, BSD 3, none
        name: "license",
        message: "What type of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
    },
    {
        type: "default",  //set as type default to npm i
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "default",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
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
];

// function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(fileName, data)
}

// function to initialize program
// need to change the type for some entries
function init() {
    inquirer 
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            const readMeContent = generateMarkdown(answers);
            //write to file
            writeToFile('./output/README.md', readMeContent)
        })
}

// function call to initialize program
init();

