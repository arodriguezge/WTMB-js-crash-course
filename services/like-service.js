const LikeModel = require('../models/Like')

async function findAll() {
    return LikeModel.find()
}

async function add(like) {
    return LikeModel.create(like)
}

async function del(_id) {
    return LikeModel.remove({ _id })
}

async function find(_id) {
    return LikeModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}