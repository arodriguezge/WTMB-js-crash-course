const UserModel = require('../models/User')
const TweetModel = require('../models/Tweet')

async function findAll() {
    return UserModel.find()
}

async function add(user) {
    return UserModel.create(user)
}

async function del(_id) {
    return UserModel.remove({ _id })
}

async function find(_id) {
    return UserModel.findOne({ _id })
}

async function addTweet(userId, tweetId) {
    const user = await UserModel.findOne({ _id: userId })
    const tweet = await TweetModel.findOne({ _id: tweetId })
    
    user.tweets.push(tweet)

    await user.save()

    return user
}

async function delTweet(userId, tweetId) {
    const tweetToRemove = await TweetModel.findOne({ _id: tweetId })
    let user = await UserModel.findOne({ _id: userId })

    user.tweets = user.tweets.filter(tweet => {
        tweet._id !== tweetToRemove
    })

    await user.save()

    return user
}

module.exports = {
    findAll,
    find,
    add,
    del,
    addTweet,
    delTweet
}