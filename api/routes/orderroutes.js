module.exports = function(app){
	var queue = require('../controllers/queuecontroller');
	var menu = require('../controllers/menucontroller');
	var auth = require('../controllers/authcontroller');

	app.route('/api/orders')
		.get(queue.getAll)
		.post(queue.addToQueue);

	app.route('/api/orders/:orderId')
		.get(queue.getById)
		.delete(queue.deleteById);

	app.route('/api/menu')
		.get(menu.getAll)
		.post(menu.addItem);

	app.route('/api/menu/:menuId')
		.get(menu.getById)
		.delete(menu.deleteById);

	app.route('/api/auth')
		.post(auth.authenticate)
		.get(auth.verify);
}
