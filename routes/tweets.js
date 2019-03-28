const express = require('express')
const router = express.Router()

const TweetService = require('../services/tweet-service')


router.get('/all', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.send(tweets)
})

router.get('/:id', async (req, res) => {
    const tweet = await TweetService.find(req.params.id)
    res.send(tweet)
})

router.post('/', async (req, res) => {
    const tweet = await TweetService.add(req.body)
    res.send(tweet)
}) 

router.delete('/:id', async (req, res) => {
    const tweets = await TweetService.del(req.params.id)
    res.send(tweets)
})
  
router.post('/:id/addLike', async (req, res) => {
    const tweet = await TweetService.addLike(req.params.id, req.body.likeId)
    res.send(tweet)
})

router.post('/:id/delLike', async (req, res) => {
    const tweet = await TweetService.delLike(req.params.id, req.body.likeId)
    res.send(tweet)
})

module.exports = router