var request = require('request');
var http = require('http');
var fs = require('fs');

//try a get request
request.get('https://damp-cove-43225.herokuapp.com/', function(err, data){
  if (err) {
    console.log(err);
  } else {
    console.log(data.body);
  }
})


//try a post request
//this api allows a json object with a name and message property

request({
  url: 'https://damp-cove-43225.herokuapp.com/addMessage',
  method: 'POST',
  json: {
    name: 'Max Sturges',
    message: 'I hope we have a snow day tomorrow!!!'
  }
}, function(error, response, body){
  if(error) {
    console.log(error);
  } else {
    console.log(response.statusCode);
  }
});

//After adding the html and created the server code , run your .js file with the
//server code in the terminal with node and then go to localhost:3000 to see if the html got served correctly

fs.readFile('index.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(3000);
});
