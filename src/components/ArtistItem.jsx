import React from 'react'
import { Paper, Typography, Grow, Chip, Divider, Button, withStyles } from '@material-ui/core'

const artistItemStyles = theme => ({
  artistItem: {
    padding: theme.spacing(2, 1, 2, 3),
    marginTop: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows[1]
    }
  },
  divider: {
    margin: theme.spacing(3, 0)
  },
  chip: {
    margin: theme.spacing(0, 1)
  }
})

const ArtistItem = ({ classes, artist: { _id, name, bio, age, nacionality, type }}) => (
  <Grow in>
    <Paper
      className={classes.artistItem}
      variant="outlined"
      role="listitem"
    >
      <Typography variant="h4">{name}</Typography>
      <Divider className={classes.divider} />
      <Typography>{bio}</Typography>
      <Divider className={classes.divider} />
      <Chip className={classes.chip} label={nacionality} color="primary" variant="outlined" />
      <Chip className={classes.chip} label={`${age} años`} color="primary" variant="outlined" />
      <Chip className={classes.chip} label={type} color="primary" variant="outlined" />
      <Divider className={classes.divider} />
      <Button color="primary" variant="outlined" >Ver artista</Button>
    </Paper>
  </Grow>
)

export default withStyles(artistItemStyles)(ArtistItem)