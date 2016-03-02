//logic for parsing header here

var express = require('express'); 

var app = new express(); 

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send("<h1>Who am I? </h1><br><h5>Providing the service of identity</h5><br><p><strong>navigate to /whoami to determine who you are</strong></p>"); 
}); 

app.get('/whoami', function(req, res) {
    res.json(
            {"ip-address": req.ip,
            "language": req.headers["accept-language"], 
            "os": req.headers["user-agent"]
            }
        ); 
}); 

app.get('/request', function(req, res) {
  console.log(req); 
  
}); 


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});