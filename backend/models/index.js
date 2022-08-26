const mongoose = require('mongoose')
const { Artist } = require('./schemas')

module.exports = {
    Artist: mongoose.model('Artist', Artist)
}