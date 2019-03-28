const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const tweetRouter = require('./routes/tweets')
const likeRouter = require('./routes/likes')

require('./mongo-connection')

const port = process.env.PORT || 5000

const app = express()

app.set('view engine', 'pug')
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/api/users', userRouter)
app.use('/api/tweets', tweetRouter)
app.use('/api/likes', likeRouter)


app.listen(port, () => console.log(`Server started on port ${port}`))