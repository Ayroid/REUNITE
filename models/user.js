const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('user', userSchema);

module.exports = {
    USER: User
};