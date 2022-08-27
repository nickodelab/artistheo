import artisTHEO from '../vendor/artistheo-api'

/**
 * Abstraction of business logic.
 */
const logic = {
    __userApiToken__: null,
    __isAdmin__: null,

    /**
    * Get Artist By Name
    * 
    * @param {string} artistType 
    */
    getArtistByType(artistType) {
        if (typeof artistType !== 'string') throw TypeError(artistType + ' is not a string')
        if (!artistType.trim().length) throw Error('artistType cannot be empty')

        return artisTHEO.getArtistByType(artistType)
            .then((artists) => artists)
    },
}

export default logic