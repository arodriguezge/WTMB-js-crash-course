const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }]
}) 

module.exports = mongoose.model('Tweet', TweetSchema)