var mongoose = require('mongoose'),
	Queue = mongoose.model('Queue');

exports.getAll = function(req, res){
	Queue.find({}, function(err, order){
		if(err)
			res.send(err);
		res.json(order);
	});
};

exports.addToQueue = function(req, res){
	var newOrder = new Queue(req.body);
	newOrder.save(function(err, order){
		if(err)
			res.send(err);
		res.json(order);
	});
};

exports.getById = function(req, res){
	Queue.findById(req.params.orderId, function(err, order){
		if(err)
			res.send(err);
		res.json(order);
	});
};

exports.deleteById = function(req, res){
	Queue.remove({_id: req.params.orderId}, function(err, order){
		if(err)
			res.send(err);
		res.json(order);
	});
};
