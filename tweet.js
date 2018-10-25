const User = require('./user')
module.exports = class Tweet {
    constructor(user, text) {
        this.user = user
        this.text = text
        this.likes = []
    }
    static create({user, text, likes}) {
        const tweet = new Tweet(user, text, likes)
        tweet.likes = likes.map(User.create)
        return tweet
    }
}