//Base Shape class
class Shape {
    constructor(colour = "black") {
        this.colour = colour;
    }

    //Method to update the colour of the shape
    setColor(colour) {
        this.colour = colour;
    }
}

//Circle, Triangle and Square classes that extends Shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,40 250,160 50,160" fill="${this.colour}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.colour}" />`;
    }
}
//Circle, Triangle and Square classes that extends Shape END

//Export classes
module.exports = { Circle, Triangle, Square };