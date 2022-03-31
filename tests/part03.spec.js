const assignment = require('../part03.js');

const failableOperation = (x, shouldFail) => (shouldFail) ? assignment.Left(new Error('failed')) : assignment.Right(x);

describe("Creating an Either", () => {
    
    test('Creating an Either from an Error should be a Left', () => {
        const result = assignment.Either.of(new Error('test')).isLeft;
        expect(result).toBe(true);
    });

    test('Creating an Either from an non Error should be a Right', () => {
        const result = assignment.Either.of('test').isRight;
        expect(result).toBe(true);
    });
});

describe("Left functions", () => {
    test('emit returns the error', () => {
        const error = new Error('test');
        const left = assignment.Left(error);
        expect(left.emit()).toBe(error);
    });
    test('flatMap does not change the error', () => {
        const error = new Error('test');
        const left = assignment.Left(error).flatMap(x => assignment.Left(new Error('test2')));
        expect(left.emit()).toBe(error);
    });
    test('map does not change the error', () => {
        const error = new Error('test');
        const left = assignment.Left(error).flatMap(x => new Error('test2'));
        expect(left.emit()).toBe(error);
    });

    test('isLeft is true', () => {
        const error = new Error('test');
        const left = assignment.Left(error);
        expect(left.isLeft).toBe(true);
    });

    test('isRight is false', () => {
        const error = new Error('test');
        const left = assignment.Left(error);
        expect(left.isRight).toBe(false);
    });
});

describe("Right functions", () => {
    test('emit returns the value', () => {
        const right = assignment.Right(10);
        expect(right.emit()).toBe(10);
    });
    test('flatMap is applied to the value', () => {
        const right = assignment.Right(10).flatMap(x => assignment.Right(x + 2));
        expect(right.emit()).toBe(12);
    });
    test('map is applied to the value', () => {
        const right = assignment.Right(10).map(x => x + 2);
        expect(right.emit()).toBe(12);
    });

    test('isRight is true', () => {
        const right = assignment.Right(10);
        expect(right.isRight).toBe(true);
    });

    test('isLeft is false', () => {
        const right = assignment.Right(10);
        expect(right.isLeft).toBe(false);
    });
});

describe("Chaining operations on an Either", () => {
    test('Chaining map and flatMap on a Right without errors', () => {
        const result = assignment.Either.of(10)
            .map(x => x + 2)
            .flatMap(x => failableOperation(x, false))
            .map(x => x + 3)
            .flatMap(x => failableOperation(x, false))
            .emit();
        expect(result).toBe(15);
    });

    test('Chaining map and flatMap on a Right with error should produce a left 1', () => {
        const result = assignment.Either.of(10)
            .map(x => x + 2)
            .flatMap(x => failableOperation(x, true))
            .map(x => x + 3)
            .flatMap(x => failableOperation(x, false))
            .emit();
        expect(result).toBeInstanceOf(Error);
    });

    test('Chaining map and flatMap on a Right with error should produce a left 2', () => {
        const result = assignment.Either.of(10)
            .map(x => x + 2)
            .flatMap(x => failableOperation(x, false))
            .map(x => x + 3)
            .flatMap(x => failableOperation(x, true))
            .emit();
        expect(result).toBeInstanceOf(Error);
    });

    test('Map/flatMap on a left should not change the content', () => {
        const result = assignment.Left(new Error('test'))
            .map(x => x + 2)
            .flatMap(x => assignment.Left(x + 2))
            .map(x => x + 3)
            .flatMap(x => assignment.Left(x + 3))
            .emit();
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe('test');
    });
});