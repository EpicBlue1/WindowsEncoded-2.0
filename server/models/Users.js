const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    AccStatus: {
        type: String,
        required: true
    },
    Profile: {
        type: String,
        required: true
    },
    Score: {
        type: Number,
        required: true
    },
    Admin: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Users', UserSchema);