/**
 * Create an Either monad
 * 
 * It has either a value on the right side OR an error on the left side.
 * There can never be a right side and a left side at the same time.
 */

 const Left = x => ({
    flatMap: undefined,
    emit: undefined,
    map: undefined,
    isLeft: undefined,
    isRight: undefined,
    inspect: () => `Left(${x})`
});

 const Right = x => ({
    flatMap: undefined,
    emit: undefined,
    map: undefined,
    isLeft: undefined,
    isRight: undefined,
    inspect: () => `Right(${x})`
});

const Either = {
    of: undefined
};

// Simulate saving to the database and return the result
// If val is a string the operation is successful and a Right is returned
// If val is not of type string the operation fails and a Left is returned
// const saveToDataBase = (val) => {
//     if(typeof val === 'string'){
//         return Right(val);
//     }
//     return Left(new Error('Failed to save to database, incorrect type'));
// }

// Simulate map/flatMap that goes right
// const success = Either.of('test')
//     .map(x => x.toUpperCase())
//     .flatMap(saveToDataBase)
//     .map(x => x + ' saved')
//     .emit();
// Should log: 'TEST saved'
// console.log(success);

// Simulate map/flatMap that goes wrong
// const failure = Either.of(10)
//     .map(x => x * 2)
//     .flatMap(saveToDataBase)
//     .map(x => x + ' saved')
//     .emit()
// Should log true
// console.log(failure instanceof Error);

module.exports = {
    Left,
    Right,
    Either
}