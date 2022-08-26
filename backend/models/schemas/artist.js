const { Schema } = require('mongoose')

const Artist = new Schema({
    name: {
        type: String,
        required: true,
    },

    bio: {
        type: String,
        required: true,
    },

    nacionality: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    type: {
        type: String,
        enum: ['musico', 'escritor', 'pintor', 'actor'],
        required: true
    }
})

module.exports = Artist