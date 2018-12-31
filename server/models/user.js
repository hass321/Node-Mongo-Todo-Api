const mongoose = require('mongoose');

const User = mongoose.model('Users', {
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    }
});

module.exports = { User };