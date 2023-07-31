//Tests for jest
const { Circle, Triangle, Square } = require('../Lib/shapes');

describe("Shape tests", () => {

    test('Circle shape renders correctly', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });

    test('Triangle shape renders correctly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,40 250,160 50,160" fill="blue" />');
    });

    test('Square shape renders correctly', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
    });
});