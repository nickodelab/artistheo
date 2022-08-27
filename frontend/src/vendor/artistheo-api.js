require("dotenv").config()

const skylabApi = {
    url: "https://artistheo-backend.herokuapp.com/api",

    getArtistByType(artistType) {
        if (typeof artistType !== 'string') throw TypeError(artistType + ' is not a string')
        if (!artistType.trim().length) throw Error('artistType cannot be empty')

        return fetch(`${this.url}/artists/${artistType}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                const { artists, error } = response
                if (error) throw Error(error)

                return artists
            })
    },

}

export default skylabApi