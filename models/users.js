import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username : String,
  email : String,
  skills : Array,
  experience: String,
  bio: String,
  profileUpload: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
