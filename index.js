const inquirer = require("inquirer");

const questions = [
  ["input", "text", "What is the logo text? (Up to 3 characters max):"],
  ["input", "textColor", "What color would you like the text to be?:"],
  [
    "list",
    "shape",
    "What shape would you like?:",
    ["Triangle", "Circle", "Square"],
  ],
  ["input", "shapeColor", "What color would you like the shape to be?:"],
];

inquirer
  .prompt(
    questions.map((question, index) => {
      let obj = {
        type: question[0],
        message: question[2],
        name: question[1],
      };
      
      if (question[0] === "list") {
        obj.choices = question[3];
      }
      if (question[1] === "text") {
        obj.validate = function (input) {
          if (input.length > 3) {
            return "Logo text must be 3 characters or less.";
          }
          return true;
        };
      }
      if (question[1] === "textColor" || question[1] === "shapeColor") {
    obj.validate = function (input) {
      // Check if input is a valid hexadecimal color code
      if (/^#([0-9a-f]{3}){1,2}$/i.test(input)) {
        return true;
      }
      // Check if input is a valid color name 
      if (/^[a-z]+$/i.test(input)) {
        return true;
      }
      return "Please enter a valid color name or hexadecimal color code.";
    };
  }
      return obj;
    })
  )
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      return console.log("Something went wrong");
      // Something else went wrong
    }
  });
