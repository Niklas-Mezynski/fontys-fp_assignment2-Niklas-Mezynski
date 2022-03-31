const assignment = require('../part01.js');

describe("squareAndDouble should square first and double after", () => {
    test('Positive number should work', () => {
        const result = assignment.squareAndDouble(4);
        expect(result).toBe(32);
    });

    test('Negative number should work', () => {
        const result = assignment.squareAndDouble(-1);
        expect(result).toBe(2);
    });
});

const double = x => x * 2;
const square = x => x * x;
const cube = x => x ** 3;

const add = (x, y) => x + y;

describe("Compose should compose functions", () => {
    test('Composition is done from right to left', () => {
        const composition = assignment.compose(double, square, cube);
        const result = composition(-3);
        expect(result).toBe(1458);
    });
});