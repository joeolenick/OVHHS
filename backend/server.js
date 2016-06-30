//Bringing in express 
var express = require('express');
var apps = express();
var path = require('path');

//Bringing in bodyParser for JSON
var bodyParser = require('body-parser');

// //Bringing in Router files
// var recipes = require('./router.js');

///////////////
// Middleware
///////////////
apps.set('views', path.join(__dirname + '/../', 'views'));
apps.use(express.static(path.join(__dirname + '/../', 'assets')));
apps.engine('html', require('ejs').renderFile);
apps.set('view engine', 'ejs');


//Add some output for testing. 
apps.use(function(req, res, next) {
  console.log(req.method, req.path, res.statusCode);
  next();
});


apps.get('/', function(req, res, next) {
  return res.render('index.html');
});

apps.get('/template/:templateName', function(req, res, next) {
  return res.render(req.params.templateName + '/' + req.params.templateName + '.tpl.html');
});

// //Linking router variables to url path used

//Port the apps will run on - This sets the port to be the environment port for heroku or a port number for local machine. 

apps.listen(process.env.PORT, process.env.IP);

//apps.listen(5000)