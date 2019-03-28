const express = require('express')
const router = express.Router()

const LikeService = require('../services/like-service')


router.get('/all', async (req, res) => {
    const likes = await LikeService.findAll()
    res.send(likes)
})

router.get('/:id', async (req, res) => {
    const like = await LikeService.find(req.params.id)
    res.send(like)
})

router.post('/', async (req, res) => {
    const like = await LikeService.add(req.body)
    res.send(like)
}) 

router.delete('/:id', async (req, res) => {
    const likes = await LikeService.del(req.params.id)
    res.send(likes)
})


module.exports = router