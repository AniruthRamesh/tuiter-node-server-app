import mongoose from "mongoose"

const schema =  mongoose.Schema({
    avatar: String,
    userName: String,
    handle: String,
    isTweetImage: Boolean,
    tweetImage: String,
    timings: String,
    comments: Number,
    retweets: Number,
    likes: Number,
    tuits: String,
    isContentBelowPost: Boolean,
    verified: Boolean,
    gold: Boolean,
    retweet: Boolean,
    retweetBy: String,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean

}, {collection: 'tuits',writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }});
export default schema;