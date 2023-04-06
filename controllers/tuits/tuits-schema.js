import mongoose from "mongoose";

const schema = mongoose.Schema({
    topic: String,
    userName: String,
    title: String,
    time: String,
    image: String,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    likes: Number,
    handle: String,
    dislikes: Number,
    disliked: Boolean,
    tuit: String
}, {collection: 'tuits'});

export default schema;