const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: {type: String, unique: true, required: true, },
    thoughts: {},
    friends: {}
})

const User = mongoose.model('User',userSchema);

module.exports = User;