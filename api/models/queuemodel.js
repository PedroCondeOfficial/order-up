var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QueueSchema = new Schema({
	orderName: {type: String},
	items: {type: Array},
	totalPrice: {type: Number}
});

module.exports = mongoose.model("Queue", QueueSchema);
