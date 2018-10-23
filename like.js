module.exports = class Like {
    constructor(user, tweet) {
        this.user = user
        this.tweet = tweet
    }
    like(user, tweet) {
        tweet.likes.push(user)
    }
    dislike(user, tweet) {
        const index = tweet.likes.indexOf(user)
        if (index !== -1) {
            tweet.likes.splice(index, 1)
        }
    }
}