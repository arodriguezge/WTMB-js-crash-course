const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    tweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
})

module.exports = mongoose.model('User', UserSchema)