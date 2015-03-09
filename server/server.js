var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angulartodo');
//middleware
// serves static assets
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./controllers/api'));


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});