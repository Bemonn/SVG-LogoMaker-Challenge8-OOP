const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Lib/shapes');

const svgTemplate = (shape, text, textColour) => `
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${textColour}">${text}</text>
    </svg>
`;

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 characters:',
      validate: function(value) {
        if (value.length >= 1 && value.length <= 3) {
          return true;
        }
        return 'Please enter 1 to 3 characters.';
      }
    },
    {
      type: 'input',
      name: 'colour',
      message: 'Enter a colour keyword or hexadecimal number:',
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'Enter a text colour keyword or hexadecimal number:',
      },
    {
        type: "list",
        name: "shape",
        message: "Select which shape image you would like:",
        choices: [
          "Circle",
          "Triangle",
          "Square",
        ],
      },
    ];
    
    inquirer.prompt(questions).then(answers => {
        const { text, colour, shape, textColour } = answers;
    
        let shapeObj;
        switch (shape) {
            case 'Circle':
                shapeObj = new Circle(colour);
                break;
            case 'Triangle':
                shapeObj = new Triangle(colour);
                break;
            case 'Square':
                shapeObj = new Square(colour);
                break;
        }
    
        const svgString = svgTemplate(shapeObj, text, textColour);
        fs.writeFileSync('logo.svg', svgString);
    });
