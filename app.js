var http = require('http');
var fs = require('fs');
var https = require('https');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var privateKey  = fs.readFileSync('/etc/letsencrypt/live/ionutmocanu.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/ionutmocanu.com/cert.pem', 'utf8');
var chain = fs.readFileSync('/etc/letsencrypt/live/ionutmocanu.com/chain.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate, ca: [chain]};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ======= Get JSON obj =======
var routes = require("./routes/routes.js");
app.get('/', routes.getData);

// ======= START SERVER HHTP=======
http.createServer(app).listen(3004, function() {
    console.log('HTTP listening on port' + 3004);
});

// ======= START SERVER HHTPS=======
https.createServer(credentials, app).listen(3005, function() {
    console.log('HTTPS listening on port' + 3005);
});
