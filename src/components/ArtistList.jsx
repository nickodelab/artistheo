import React from 'react'
import { Box, Typography, withStyles } from '@material-ui/core'

import ArtistItem from './ArtistItem'

const artistListStyles = theme => ({
  artistList: {
    marginTop: theme.spacing(3)
  },
  helperText: {
    paddingLeft: theme.spacing(1)
  }
})

const ArtistList = ({ classes, artists }) => (
  <Box className={classes.artistList}>
    {(artists.length === 0) && <Typography className={classes.helperText}>
      No hay artistas de este tipo
      </Typography>}
    <Box role="list" data-testid="artistList">
      {artists.map(artist => <ArtistItem artist={artist} key={artist._id} />)}
    </Box>
  </Box>
)

export default withStyles(artistListStyles)(ArtistList)