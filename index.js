const { Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');
const SVG = require('./lib/svg');
const { writeFile } = require('fs/promises');

// Function to initialize and perform interaction with the user
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Please enter 1 or 3 characters',
            validate: function (input) {
                if (input.length > 3) {
                    return "Please do not enter more than 3 characters";
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color name or hexadecimal?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Enter a shape for the logo?',
            choices: ["Circle", "Square", "Triangle"],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter your desired color for the shape',
        },
    ]).then(({ characters, textColor, shape, shapeColor }) => {
        let shapeType;
        switch (shape.toLowerCase()) {
            case 'circle':
                shapeType = new Circle();
                break;
            case 'square':
                shapeType = new Square();
                break;
            case 'triangle':
            default:
                shapeType = new Triangle();
                break;
        }
        shapeType.setColor(shapeColor);
        const svg = new SVG();
        svg.setTextColor(textColor, characters);
        svg.setShape(shapeType);
        return writeFile('examples/logo.svg', svg.render());
    }).then(() => {
        console.log('Generated logo.svg');
    }).catch((error) => {
        console.error(error);
    });
}

// Call the init function to start the interaction
init();


module.exports = {};
