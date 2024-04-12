class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setColor() {
    console.log("Use child class setColor method to set shape color");
    return;
  }

  setText() {
    return `<text x="145" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }

  render() {
    const shapeContent = this.setColor();
    const textContent = this.setText();
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shapeContent}${textContent}</svg>`;
  }
}
//Triangle Class
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  setColor() {
    return `<polygon points="150,10 285,180 0,180" fill="${this.shapeColor}"/>`;
  }
}
//Circle Class
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  setColor() {
    return `<circle cx="145" cy="110" r="90" fill="${this.shapeColor}" />`;
  }
}
// Square Class
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  setColor() {
    return `<rect x="55" y="20" width="180" height="180" fill="${this.shapeColor}"/>`;
  }
}

module.exports = {
  Shape: Shape,
  Triangle: Triangle,
  Square: Square,
  Circle: Circle,
};
