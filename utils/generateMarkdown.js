
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, 
//return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    badge = ""
  }
 return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else {
    licenseLink = ""
  }
  return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //If a license has been selected, create License section with link to license information
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `license: ${license}`
  }
return licenseSection;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //paramater defining a function and is a placeholder
  return `# ${data.title}

 ## ${renderLicenseSection(data.license)} 
 ${renderLicenseBadge(data.license)} 
 ###  ${renderLicenseLink(data.license)} 
 
  ## Description

  ${data.description}

  ## Table of Contents 

  ### * [Installation](#installation)
  
  ### * [Usage](#usage)
  
  ### * [Licence](#licence)
  
  ### * [Contributing](#contributing)
  
  ### * [Test](#test)
  
  ### * [Questions](#questions)
  
  ## Installation 
  ### The following necessary dependencies must be installed to run the application:
  ### ${data.installation}
  

  ## Usage 
  ### In order to use this app: 
  ### ${data.usage}
  ### Watch this video: 
  ### [Demonstration video](https://watch.screencastify.com/v/Bjdqo4KnfmaNJ5wftfUh)
 
  ## License
  This project is licenced under the ${data.license} licence.
  
  
  ## Contributing
  ### Contributors: ${data.contributors}
  

  ## Tests
  ### The folloging commands are needed to run test for this app:
  ### ${data.test}
  

  ## Questions
  ### For any inqueries, you can contact me at either
  ### GitHub: https://github.com/${data.gitHub}
  ### or 
  ### by email: ${data.email}
 

  `;
}

module.exports = generateMarkdown;
