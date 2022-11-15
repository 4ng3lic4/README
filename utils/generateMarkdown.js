
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
  
  #Installation 
 The following necessary dependencies must be installed to run the application:${data.installation}
  #Usage 
  In order to use this app, ${data.usage}
  #License
  This project is licenced under the ${data.license} licence.
  ![GitHub licence](http://img.shields.io/badge/licence-MIT-blue.svg)
  #Contributing
  Contributors: ${data.contributors}
  #Tests
  The folloging commands are needed to run test for this app:${data.test}
  # Questions
  The following contact information can be used in case of questions ${data.questions}
  #GitHub 
  The gitHub user name is${data.gitHub}
  #Profile
  The gitHub profile link is${data.gitHubProfileLink}
  #Email
  The email is${data.email}
  
  `;
}

module.exports = generateMarkdown;
