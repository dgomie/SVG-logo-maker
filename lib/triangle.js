const Shape = require('./shapes')

class Triangle extends Shape{
    constructor() {
      }

    renderTriangle() {
        const triangleSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250">
        <polygon points="50,5 95,95 5,95" fill="${color}" />
        </svg>`
    }
}
    

