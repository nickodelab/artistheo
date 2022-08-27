import React from 'react'
import { Button, Box, withStyles } from "@material-ui/core"

import logic from '../logic'

const searchButtonsStyles = theme => ({
  searchButtons: {
    marginTop: theme.spacing(5),
    '& button': {
      margin: theme.spacing(1)
    }
  }
})


const SearchButtons = ({ classes, onGetArtistsList }) => {

  const getArtistByType = async type => {
    const artists = await logic.getArtistByType(type)
    onGetArtistsList(artists)
  }
  
  return <Box className={classes.searchButtons}>
        <Button onClick={() => getArtistByType('musico')} color="primary" variant="contained">
          Músicos
        </Button>
        <Button onClick={() => getArtistByType('pintor')} color="primary" variant="contained">
          Pintores
        </Button>
        <Button onClick={() => getArtistByType('escritor')} color="primary" variant="contained">
          Escritores
        </Button>
        <Button onClick={() => getArtistByType('actor')} color="primary" variant="contained">
          Actores
        </Button>
  </Box>
}

export default withStyles(searchButtonsStyles)(SearchButtons)