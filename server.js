const connect = require('connect');

// json content
var fs = require('fs');
var content = fs.readFileSync('content.json','utf8');


// instantiate app-server
const app = connect();

// custom middleware
function helloWorld(req, res, next) {
    res.setHeader('Content-Type','text/plain');
    res.end('Hello, World!');
}

// custom middleware
function helloHTML(req, res, next) {
    res.setHeader('Content-Type','text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
}

// custom middleware
function helloJSON(req, res, next) {
    res.setHeader('Content-Type','application/json');
    res.end(content);
}

// add middleware to connect application
app.use('/json', helloJSON);
app.use('/html', helloHTML);
app.use('/', helloWorld);

// run app
app.listen(3000);

// server logger
console.log("Server running at http://localhost:3000");