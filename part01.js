const double = x => x * 2;
const square = x => x * x;

// Compose the two fuctions, such that it becomes a new function
// that first squares and then doubles
const squareAndDouble = x => undefined;

// Use to test, answer should be: 50
//console.log(squareAndDouble(5));

// Create a higher order function that does the composition for you
// Assume we only need to pass one argument to the first function
// HINT: use reduceRight on fns
const compose = (...fns) => args => undefined;

// Use to compose function to compose square and double
const composedsquareAndDouble = undefined;
// Use following method to test, should be: 50
// console.log(composedsquareAndDouble(5));

module.exports = {
    squareAndDouble,
    compose
};