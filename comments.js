// Create web server
// Run server with node comments.js

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  switch (path) {
    case '/':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("Hello World");
      response.end();
      break;
    case '/comments':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      var comments = fs.createReadStream('comments.txt');
      comments.pipe(response);
      break;
    default:
      response.writeHead(404);
      response.write("404 - Page not found");
      response.end();
      break;
  }
});

// Listen on port 8000, IP defaults to