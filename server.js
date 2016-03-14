/* -------- DEPENDENCIES -------- */
var express = require('express');
var server = express();

var bodyParser = require('body-parser');
var path = require('path');


server.use(bodyParser.urlencoded( {extended: true }));
server.use(bodyParser.json() );

/* -------- ROUTES -------- */
server.use(express.static(__dirname + '/main'));
server.use(function(req, res) {
    res.sendFile(__dirname + '/main/index.html');
});

server.listen(process.env.PORT || 8080, function () {
    console.log("Magic happens at ", process.env.PORT || 8080);
});

