// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description    
  ${data.description}
    
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the Repo open an issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at [GitHub](${data.github}).
`;
}

module.exports = generateMarkdown;
