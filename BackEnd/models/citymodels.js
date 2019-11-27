const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const citySchema = new mongoose.Schema({
	ciudad: { type: String, required: true, unique: true },
	pais: { type: String, required: true },
	img: {type:String, required:true},
});

const City = mongoose.model('city', citySchema);

citySchema.plugin(uniqueValidator);
module.exports = City;
