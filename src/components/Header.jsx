import React from 'react'
import { Box, Typography, withStyles } from "@material-ui/core"

const headerStyles = theme => ({
  header: {
    marginTop: theme.spacing(5)
  }
})

const Header = ({ classes }) => {
  return <Box className={classes.header}>
    <Typography variant="h1">Encuentra tu artista favorito</Typography>
  </Box>
}

export default withStyles(headerStyles)(Header)