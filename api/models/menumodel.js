var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
	itemName: {type: String},
	description: {type: String},
	price: {type: Number}
});

module.exports = mongoose.model("Menu", MenuSchema);
