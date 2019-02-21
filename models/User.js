var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://127.0.0.1:27017/mob402', { useNewUrlParser: true });
let userSchema = new mongoose.Schema({
    name: String,
    password: Number,
    role: Number,
    avatar: String,
});

userSchema.methods.hashPassword = (pwd) => {
    return bcrypt.hashSync(pwd, 10);
}

userSchema.methods.verifyPassword = (pwd, hasPwd) => {
    return bcrypt.compareSync(pwd, hasPwd)
}
var User = mongoose.model('users', userSchema );
module.exports = User;

