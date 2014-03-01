var express = require("express");
var log4js = require("log4js");
var log = log4js.getLogger("server");

var listenPort = 3000;


var app = express();

app.use('/', express.static(__dirname + '/static'));

log.info("Starting listening on port ", listenPort);
app.listen(listenPort);
log.info("Server started!");