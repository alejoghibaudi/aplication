const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UsserSchema = new mongoose.Schema({
	name: { type: String, required: true },
    secondname: { type: String, required: true },
    ussername:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    img:{type:String,required:true}
});

const NewUsser = mongoose.model('createusser', UsserSchema);

UsserSchema.plugin(uniqueValidator);
module.exports = NewUsser;
