const mongoose = require ('mongoose');
const { Schema, model } = mongoose;

const postSchema = Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imagePath: { type: String, required: true },
});

const Post = model('Post', postSchema);
module.exports = Post;