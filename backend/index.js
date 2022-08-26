require('dotenv').config()
require('isomorphic-fetch')

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const { getArtistsByType } = require('./routes')

const { env: { DB_URL, PORT }, argv: [, , port = PORT || 8080] } = process

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express()
        
        app.use(cors())

        app.get('/api/artists/:artistType', getArtistsByType)

        app.listen(port, () => console.log(`server running on port ${port}`))
    })
    .catch(console.error)