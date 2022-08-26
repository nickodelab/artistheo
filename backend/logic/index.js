'use strict'

const { Artist } = require('../models')

/**
 * Abstraction of business logic.
 */
const logic = {

    /**
    * Get Artists by Type
    * 
    * @param {string} artistType 
    *  
    */
    async getArtistsByType(artistType) {

        if (typeof artistType !== 'string') throw TypeError(artistType + ' is not a string')
        if (!artistType.trim().length) throw Error('artistType cannot be empty')

        const artists = await Artist.find({ type: artistType })
        return [...artists]
    },


}

module.exports = logic