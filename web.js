var express = require('express');

fs = require('fs')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  fs.readFileSync('index.html', function (err, buf) {
    if (err) {
        throw err;
    }
    inbuff = buf;
  });     
  text=buf.toString();
  response.send('Hello World 2');
  response.send(text);   
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
