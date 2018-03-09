import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name : String,
  email : String,
  skills : Array,
  experience: String
})

var User = mongoose.model('User', userSchema);

module.exports = User
