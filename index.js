// TODO: Include packages needed for this application
const inquirer = require("inquirer"); //this gives us access to inquirer
const fs = require("fs"); //file system
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown") //The variable is equal to the function
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your README?"
    },
    {
        type: "input",
        name: "description",
        message: "what is the description of your README?"
    },

    {
        type: "input",
        name: "contents",
        message: "Table of Contents"
    },
  
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project??"
    }, 
    {
        type: "input",
        name: "usage",
        message: "What are the directions to use this app?"
    },

    {
        type: "input",
        name: "license",
        message: "What lisence is being used (e.g. MIT)? "
    },

    {
        type: "input",
        name: "contributors",
        message: "What are the names of the contributors for this app?"
    },

    {
        type: "input",
        name: "test",
        message: "What commands are needed to test this app?"
    },

    {
        type: "input",
        name: "questions",
        message: "What is the contact info for inqueries?"
    },

  

    {
        type: "input",
        name: "gitHub",
        message: "What is you GitHub username?"
    },
   
   


    {
        type: "input",
        name: "gitHubProfileLink",
        message: "What is you GitHub Profile Link?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 

    fs.writeFile(fileName, data, function (err) {
        //console.log(fileName)
        //console.log(data)
        if (err) throw err;
        console.log('All done, Thank you!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
          //console.log(answers.title) ;
          //console.log(answers.description); 
          let readmeData = generateMarkdown(answers)
          console.log(readmeData);
          
          writeToFile("README.md" , readmeData );

        })
}

// Function call to initialize app
init();
