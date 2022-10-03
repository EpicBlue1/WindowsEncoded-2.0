const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    questionImage: {
        type: String,
        required: true
    },
    questionTitle: {
        type: String,
        required: true
    },
    questionDescription: {
        type: String,
        required: true
    },
    codeSnippet: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    upvotes: {
        type: Number,
        required: true
    },
    downvotes: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    Answers: {
        userId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        Answer: {
            type: String,
            required: true
        },
        upvotes: {
            type: Number,
            required: true
        },
        downvotes: {
            type: Number,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
    }
})