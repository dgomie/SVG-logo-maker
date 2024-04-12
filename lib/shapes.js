class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <polygon points="100,0 200,200 0,200" fill="${this.shapeColor}"/>
  
    <text x="100" y="145" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;

  return svgContent;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  render() {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <circle cx="150" cy="100" r="95" fill="${this.shapeColor}"/>
  
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`

  return svgContent;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }

  render() {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <rect x="50" y="10" width="180" height="180" fill="${this.shapeColor}"/>
  
    <text x="140" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`
  return svgContent;
  }
}

module.exports = {
  Triangle : Triangle,
  Square : Square,
  Circle : Circle,
}
