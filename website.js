var express = require("express");
var app = express();
var path = require('path');

console.log("__dirname" + __dirname);

app.use(express.static('vendor'));
app.use(express.static('static'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/product", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/product.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.listen(3000, function() {
  console.log("Listening on port 3000 ...");
});


//
// var express = require('express');
// var app = express();
// var path = require('path');
//
// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/views/test.html'));
// });
//
// app.listen(8080);
