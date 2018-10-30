const User = require('./user')
const Tweet = require('./tweet')
const Like = require('./like')
const Database = require('./database')

const main = async () => {
    const andrea = new User('Andrea')
    const anna = new User('Anna')
    const tom = new User('Tom')
    const tweetOne = new Tweet(andrea, 'Hello world')
    const tweetTwo = new Tweet(andrea, 'Second one')
    const tweetThree = new Tweet(tom, "First Tom's tweet")
    const likeOne = new Like(anna, tweetOne)
    const likeTwo = new Like(anna, tweetTwo)
    const likeThree = new Like(tom, tweetOne)
    const likeFour = new Like(andrea, tweetThree)
    const likeFive = new Like(anna, tweetThree)

    andrea.create(tweetOne)
    likeOne.like(anna, tweetOne)
    andrea.create(tweetTwo)
    likeTwo.like(anna, tweetTwo)
    likeThree.like(tom, tweetOne)
    likeTwo.dislike(anna, tweetTwo)
    tom.create(tweetThree)
    likeFour.like(andrea, tweetThree)
    likeFive.like(anna, tweetThree)

    await Database.save([tweetOne, tweetTwo, tweetThree])
    const loadedTweets = await Database.load('./data.json')
    const tweetInstances = loadedTweets.map(Tweet.create)
    console.log(tweetInstances)
}

(async () => {
    try {
        await main()
    } catch (e) {
        console.log(e)
    }
  })()



