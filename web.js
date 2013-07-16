var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  buf=fs.readFileSync('index.html');
  text=buf.toString()
  response.send('Hello World 2');
  response.send(text);   
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
