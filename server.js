var multer = require("multer");
var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.use(multer({dest:'./uploads/'}).single('upload'));

app.get('/', function(request, response) {
    response.render('index');
});

app.post('/', function(request, response){
	console.log(request.body);
	console.log(request.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	response.status(204).end();
});

app.listen('8080', function() {
    console.log('Listening on port 8080');
});