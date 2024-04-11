class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape; 
    this.shapeColor = shapeColor;
  }

  setColor() {

  }

}

class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  render() {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <polygon xmlns="http://www.w3.org/2000/svg" points="100,10 190,190 10,190" fill="${this.shapeColor}"/>
  
    <text x="100" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;

  return svgContent;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)
  }
  render() {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
  
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`

  return svgContent;
  }
}

class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)
  }

  render() {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <rect width="150" height="150" fill="${this.shapeColor}"/>
  
    <text x="75" y="90" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`
  return svgContent;
  }
}

module.exports = {
  Triangle : Triangle,
  Square : Square,
  Circle : Circle,
}
