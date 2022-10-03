const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    accStatus: {
        type: Boolean,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Users', UserSchema);