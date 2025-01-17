// Function to build a URI to a resource
const buildURI  = (scheme, domain, path) => `${scheme}://${domain}/${path}`;

// We can use the function to e.g. search on google
//console.log(buildURI('https', 'google.com', 'search?q=partial%20application'));

// Bind the domain to: 'google.com'
const googleURI = (scheme, path) => buildURI(scheme, 'google.com', path);
// Use to test, should produce: http://google.com/
console.log(googleURI('http', ''));

// Now also bind the scheme to: 'https'
const safeGoogleURI = (path) => googleURI('https', path);
// Use to test, should produce: https://google.com/test
console.log(safeGoogleURI('test'));

// Refactor the buildURI to the curried form
const curriedBuildURI = scheme => domain => path => buildURI(scheme, domain, path);
// Use to test, should produce: https://google.com/search?q=partial%20application
console.log(curriedBuildURI('https')('google.com')('search?q=partial%20application'));

// Use the curried form of build URI and bind the scheme to 'file'
const fileURI = curriedBuildURI('file');
// Use to test, should produce: file://localhost/test.txt
console.log(fileURI('localhost')('test.txt'));

module.exports = {
    googleURI,
    safeGoogleURI,
    curriedBuildURI,
    fileURI
}