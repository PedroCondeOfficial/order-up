var mongoose = require('mongoose'),
	Menu = mongoose.model('Menu');

exports.getAll = function(req, res){
	Menu.find({}, function(err, menu){
		if(err)
			res.send(err);
		res.json(menu);
	});
};

exports.getById = function(req, res){
	Menu.findById(req.params.menuId, function(err, menu){
		if(err)
			res.send(err);
		res.json(menu);
	});
};

exports.addItem = function(req, res){
	var newItem = new Menu(req.body);
	newItem.save(req.params.orderId, function(err, menu){
		if(err)
			res.send(err);
		res.json(menu);
	});
};

exports.deleteById = function(req, res){
	Menu.remove({_id: req.params.menuId}, function(err, menu){
		if(err)
			res.send(err);
		res.json(menu);
	});
};
