var User = class {
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
}

var Tweet = class {
    constructor(text) {
        this.text = text
        this.likes = []
    }
}

var Like = class {
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

var andrea = new User('Andrea')
var anna = new User('Anna')
var tom = new User('Tom')
var tweetOne = new Tweet('Hello world')
var tweetTwo = new Tweet('Second one')
var likeOne = new Like(andrea, tweetOne)
var likeTwo = new Like(anna, tweetTwo)
var likeThree = new Like(tom, tweetOne)

andrea.create(tweetOne)
likeOne.like(andrea, tweetOne)
andrea.create(tweetTwo)
likeTwo.like(anna, tweetTwo)
likeThree.like(tom, tweetOne)

console.log(andrea)
//console.log(likeOne)
console.log(tweetOne)
console.log(tweetTwo)

likeTwo.dislike(anna, tweetTwo)

console.log(tweetTwo)

andrea.delete(tweetTwo)

console.log(andrea)