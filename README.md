# Assignment 2

This assignment is divided into three separate parts.

If you want to run the tests locally:
1. Install dependencies: `npm install`
2. Run the tests
    * To run all tests: `npm test`
    * To run tests for specific part: `npm test part01`

## Part 1

This part is about higher-order functions.

### Tasks

1. `squareAndDouble`: Manually [compose](https://en.wikipedia.org/wiki/Function_composition_(computer_science)) the square and double methods
2. `compose`: Create a compose functions that takes one or multiple functions as parameter and returns a function that takes the initial argument and applies the composed functions.  
E.g. `compose(double, square)` should produces the same functions as `squareAndDouble` that you have written in step 1.

## Part 2

This part is about partial application and currying.

### Tasks

1. `googleURI`: bind the domain part to 'google.com'
2. `safeGoogleURI`: now also bind the scheme to 'https'
3. `curriedBuildURI`: convert the `buildURI` function into the curried form
4. `fileURI`: bind the first parameter of the curried form to 'file'

## Part 3

During the lecture we have seen the `Maybe` monad. This monad is useful to chain operations, when something can go wrong. However as soon as something goes wrong we get a `Nothing` and lose the information about *why* something went wrong.

In this part you will create the `Either` monad. This monad is also used to chain operations and can handle errors. However instead of losing the error information it will be stored inside the monad.

The `Either` consists of two parts the `Left` part that is used to store `Error` information and the `Right` part that stores the value. 

### Tasks

1. Implement the `Left` part, so the error part
    * Make sure that `map` and `flatMap` is not applied to the `Error`
2. Implement the `Right` part, so the value part
    * Make sure that `map` and `flatMap` is applied to the value
3. Implement the factory method `of` on `Either` that takes a parameter `x`
    * If x is an Error, create a `Left`
    * Otherwise create a `Right`
