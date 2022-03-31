const assignment = require('../part02.js');

describe("Google URI should work", () => {
    test('Google URI should still take scheme and path', () => {
        const result = assignment.googleURI('http', 'test');
        expect(result).toBe('http://google.com/test');
    });

    test('Safe Google URI should only take path', () => {
        const result = assignment.safeGoogleURI('test')
        expect(result).toBe('https://google.com/test');
    });
});

describe("Curried versions should work", () => {
    test('curriedBuildURI should be three functions', () => {
        const result = assignment.curriedBuildURI('https')('google.com')('test');
        expect(result).toBe('https://google.com/test');
    });

    test('fileURI should be two functions', () => {
        const result = assignment.fileURI('google.com')('test');
        expect(result).toBe('file://google.com/test');
    });
});