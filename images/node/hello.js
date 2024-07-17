// Load HTTP module
var http = require("http");

// Get port from environment variable or defaults to 8000
var port = process.env.PORT || 8888;

// Create HTTP server and listen on provided port for requests
http.createServer(function(request, response) {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(port);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:' + port + '/');