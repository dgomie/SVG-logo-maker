const shapes = require("./shapes.js");

describe("Shapes", () => {
  describe("triangle render", () => {
    it("should return complete svg html with triangle and text attributes.", () => {
      const triInputs = {
        text: "triangleRender",
        textColor: "white",
        shapeColor: "blue",
      };
      const { text, textColor, shapeColor } = triInputs;
      const triangle = new shapes.Triangle(text, textColor, shapeColor);
      expect(triangle.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150,10 285,180 0,180" fill="blue"/><text x="145" y="125" font-size="50" text-anchor="middle" fill="white">triangleRender</text></svg>`
      );
    });
  });

  describe("circle render", () => {
    it("should return complete svg html with circle and text attributes.", () => {
      const cirInputs = {
        text: "circleRender",
        textColor: "red",
        shapeColor: "yellow",
      };
      const { text, textColor, shapeColor } = cirInputs;
      const circle = new shapes.Circle(text, textColor, shapeColor);
      expect(circle.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="145" cy="110" r="90" fill="yellow" /><text x="145" y="125" font-size="50" text-anchor="middle" fill="red">circleRender</text></svg>`
      );
    });
  });

  describe("square render", () => {
    it("should return complete svg html with square and text attributes.", () => {
      const sqInputs = {
        text: "squareRender",
        textColor: "white",
        shapeColor: "red",
      };
      const { text, textColor, shapeColor } = sqInputs;
      const square = new shapes.Square(text, textColor, shapeColor);
      expect(square.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="55" y="20" width="180" height="180" fill="red"/><text x="145" y="125" font-size="50" text-anchor="middle" fill="white">squareRender</text></svg>`
      );
    });
  });
});
