// Importing classes from the shapes.js file
const { Triangle, Square, Circle } = require("./shapes.js");

// Testing for a triangle
describe("Triangle test", () => {
  test("test for a triangle with a yellow background", () => {
    // Create a new triangle
    const shape = new Triangle();

    // Set the color to yellow
    shape.setColor("yellow");

    // Expect the rendered SVG to have a yellow fill
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'
    );
  });
});
// testing for a square
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = new Square();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="orange" />'
    );
  });
});

//  testing for a circle 
describe("Circle test", () => {
  test("test for a circle with a #ffa500 background", () => {
    const shape = new Circle();
    shape.setColor("#ffa500");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ffa500" />'
    );
  });
});