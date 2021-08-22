var jwt = require('jsonwebtoken');

exports.authenticate = function(req, res){
	const secretKey = "employee123";
	const userKey = "emp";

	if(req.body.password == secretKey){
		const token = jwt.sign({userKey}, secretKey, {expiresIn: "2h"});
		res.json(token);
	}
	else{
		res.status(400).send("Invalid");
	}
};

exports.verify = function(req, res){
	var token = req.headers['x-access-token'];

	jwt.verify(token, 'employee123', function(err, decoded){
		if(err)
			res.send(err);
		res.status(200).send(decoded);
	});
};
