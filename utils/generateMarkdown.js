
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //paramater defining a function and is a placeholder
  return `# ${data.title}
  http://github.com/${data.gitHub}/${data.title}
  #Description
  ${data.description}
  #Table of Contents 
  *[installation](#installation)
  *[usage](#usage)
  *[licence](#licence)
  *[contributing](#contributing)
  *[test](#test)
  *[questions](#questions)
  ${data.contents}
  
  #Installation 
  ${data.installation}
  #Usage 
  ${data.usage}
  #GitHub 
  ${data.gitHub}
  #GitHub 
  ${data.gitHub}
  `;
}

module.exports = generateMarkdown;
