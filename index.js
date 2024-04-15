const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");
const fs = require("fs");
const cssColor = require("./lib/colors.js");
const cssColorLowercase = cssColor.map(color => color.toLowerCase());

// Question bank for user prompts
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

function init() {
  inquirer
    .prompt(
      questions.map((question, index) => {
        let obj = {
          type: question[0],
          message: question[2],
          name: question[1],
        };
        // Checks if question is list to display list choices
        if (question[0] === "list") {
          obj.choices = question[3];
        }
        // Validates if the user input for logo text is between 1-3 characters
        if (question[1] === "text") {
          obj.validate = function (input) {
            if (input.length > 3 || input.length === 0) {
              return "Logo text must be between 1-3 characters.";
            }
            return true;
          };
        }
        // Validates if the user input for color is a hexadecimal color code or within the color list
        if (question[1] === "textColor" || question[1] === "shapeColor") {
          obj.validate = function (input) {
            if (/^#([0-9a-f]{3}){1,2}$/i.test(input)) {
              return true;
            }
            // strInput formats the input to remove user spacing to be able to compare with colors in list
            const strInput = input.replace(/\s+/g, '').trim();
            if (cssColorLowercase.includes(strInput.toLowerCase())) {
              return true;
            }
            return "Please enter a valid color name or hexadecimal color code.";
          };
        }
        return obj;
      })
    )
    .then((answers) => {
      let svgContent = "";
      console.log(answers);
      // user input is destructured and rendered based on shape input
      const { text, textColor, shape, shapeColor } = answers;
      switch (shape) {
        case "Triangle":
          const triangle = new shapes.Triangle(text, textColor, shapeColor);
          svgContent = triangle.render();
          break;

        case "Circle":
          const circle = new shapes.Circle(text, textColor, shapeColor);
          svgContent = circle.render();
          break;

        default:
          const square = new shapes.Square(text, textColor, shapeColor);
          svgContent = square.render();
          break;
      }
      // rendered svg content is written in a new file named after the logo text input
      fs.writeFile(`./examples/${text}-logo.svg`, svgContent, (err) =>
        err ? console.error(err) : console.log(`Generated ${text}-logo.svg`)
      );
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
        return console.log("Something went wrong");
      }
    });
}

init();
