module.exports = class Tweet {
    constructor(user, text) {
        this.user = user
        this.text = text
        this.likes = []
    }
}