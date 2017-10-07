var http = require('http');

var serverA = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h3>You Suck</h3>');
});

var serverB = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h3>You Rock</h3>');
});

serverA.listen(7000, function () {
  console.log('We are listening to port 7000');
});

serverB.listen(7500, function () {
  console.log('We are listening to port 7500');
});
