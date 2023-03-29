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

}, {collection: 'tuits'});
export default schema;