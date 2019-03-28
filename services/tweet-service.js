const TweetModel = require('../models/Tweet')
const LikeModel = require('../models/Like')

async function findAll() {
    return TweetModel.find()
}

async function add(tweet) {
    return TweetModel.create(tweet)
}

async function del(_id) {
    return TweetModel.remove({ _id })
}

async function find(_id) {
    return TweetModel.findOne({ _id })
}

async function addLike(tweetId, likeId) {
    const tweet = await TweetModel.findOne({ _id: tweetId })
    const like = await LikeModel.findOne({ _id: likeId })

    tweet.likes.push(like)
 
    await tweet.save()

    return tweet
}

async function delLike(tweetId, likeId) {
    const likeToRemove = await LikeModel.findOne({ _id: likeId })
    let tweet = await TweetModel.findOne({ _id: tweetId })

    tweet.likes = tweet.likes.filter(like => {
        like._id !== likeToRemove
    })

    await tweet.save()

    return tweet
}

module.exports = {
    findAll,
    find,
    add,
    del,
    addLike,
    delLike
}