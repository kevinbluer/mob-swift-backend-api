var restify = require('restify');
var mongoose = require('mongoose');

var User = require('./models/user.js');

var server = restify.createServer({
  // certificate: ...,  
  // key: ...,
  name: 'MyApp'
});

var port = process.env.PORT || 3002;
server.listen(port);

// mongodb://localhost/bluer-api/
mongoose.connect('mongodb://admin:adm1n@kahana.mongohq.com:10057/mob-swift-backend-api');

function authUser(req, res, next) {
	// Checkin.find({}).exec(function(err, checkins) {
	// 	res.send(checkins);
	// });
}

function createUser(req, res, next) {
	
	var user = new User()
	
	user.firstname = req.headers.firstname;
	user.lastname = req.headers.lastname;
	user.username = req.headers.username;
	user.email = req.headers.email;
	user.password = req.headers.password;

	user.save(function(err, newUser) {
		if (err) {
			res.send({'status': 'failure'});
		}

		res.send({'status': 'success'});
	});
}

//send a random test string

server.get('/hello', function create(req, res, next) {
	res.send(201, Math.random().toString(36).substr(3, 8));
	return next();
});

server.post('/user/auth', authUser);
server.post('/user/create', createUser);

server.get(/.*/, restify.serveStatic({
  directory: './public',
  default: "index.html"
}));

