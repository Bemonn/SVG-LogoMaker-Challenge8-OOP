const inquirer = require('inquirer');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 characters:',
    },
    {
      type: 'input',
      name: 'colour',
      message: 'Enter a colour keyword or hexadecimal number:',
    },
    {
        type: "list",
        name: "Image",
        message: "Select which shape image you would like:",
        choices: [
          "Circle",
          "Triangle",
          "Square",
        ],
      },
    ];