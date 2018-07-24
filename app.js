var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ======= Get JSON obj =======
var routes = require("./routes/routes.js");
app.get('/', routes.getData);

// ======= START SERVER =======
http.createServer(app).listen(port, function() {
    console.log('Magic happening on port ' + port);
});