const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema ({
    author: {
        type: String, 
        default: 'Anonymous'
    }, 
    rant: {
        type: Boolean,
        default: false
    },
    stars: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        default: ''
    }
})

const Comment = model('Comment', commentSchema)

module.exports = Comment;