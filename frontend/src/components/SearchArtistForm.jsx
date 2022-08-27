import React, { useRef } from 'react'
import { IconButton, InputBase, Paper, withStyles } from '@material-ui/core'
import { Send as SendIcon } from '@material-ui/icons/'

import SearchButtons from './SearchButtons';

const searchArtistFormStyles = theme => ({
  searchArtistFormStyles: theme.mixins.flexy(undefined, 'space-between'),
  inputWrapper: {
    paddingLeft: theme.spacing(3),
    backgroundColor: theme.palette.background.input,
    flexGrow: 1,
    '&:hover': {
      backgroundColor: theme.mixins.convertToRGB(theme.palette.background.input, 0.8)
    }
  },
  inputCreateItem: {
    height: '100%'
  }
})

const SearchArtistForm = ({ classes, loadArtists }) => {
  const inputElement = useRef(null);

  return <>
    <Paper
      className={classes.searchArtistFormStyles}
      variant="outlined"
    >
      <InputBase
        classes={{ input: classes.inputCreateItem }}
        className={classes.inputWrapper}
        inputProps={{
          'aria-label': 'Search artist by Name',
          autoFocus: true,
          spellCheck: false,
        }}
        placeholder="Search artist by Name"
        inputRef={inputElement}
      />

      <IconButton
        color="primary"
        aria-label="Search artist by Name"
      >
        <SendIcon />
      </IconButton>
    </Paper>
    <SearchButtons onGetArtistsList={artists => loadArtists(artists)} />
  </>
}

export default withStyles(searchArtistFormStyles)(SearchArtistForm)