module.exports = class User {
    constructor(name) {
        this.name = name
        this.tweets = []
    }
    create(tweet) {
        this.tweets.push(tweet)
    }
    delete(tweet) {
        const index = this.tweets.indexOf(tweet)
        if (index !== -1) {
            this.tweets.splice(index, 1)
        }
    }
    static create({name, tweets}) {
        return new User(name, tweets)
    }
}