const logic = require('../logic')

module.exports = (req, res) => {

    const { params: { artistType } } = req
    console.log('artistType', artistType)
    
    try {
        logic.getArtistsByType(artistType)
            .then(artists => res.json({ artists }))
            .catch(error => console.error(error))
    } catch (error) {
        console.error(error)
    }
}