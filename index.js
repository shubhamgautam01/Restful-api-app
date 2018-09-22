/*
*
* Primary file for API
*
*/

// Dependencies

var http = require('http');
var url = require('url');

// The server shoul drespond to all request with a string

var server = http.createServer(function(req, res){
  
  // Get the URL and parse it
  var parsedUrl = url.parse(req.url,true);

  // Get the path from URL
  var path = parsedUrl.pathname;
  var trimedpath = path.replace(/^\/+|\/+$/g,'');


  // Send The Response
  res.end('Hello World\n',);

  // Log the request path
  console.log('Request received on path: '+trimedpath);
  
  
});

// Start the Server and have it on port 3000

server.listen(3000,function(){
  console.log('Server Port is running at 3000');
});