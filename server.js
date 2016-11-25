var multer = require("multer");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.render('index');
});

app.post('/', multer({ dest: './uploads/'}).single('upl'), function(request, response) {
	
	var obj = {'File size':  request.file.size};
	
	response.json(obj);
	 
	response.status(204).end();
});


app.listen('8080', function() {
    console.log('Listening on port 8080');
});