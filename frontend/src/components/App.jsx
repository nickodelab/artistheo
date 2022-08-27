import React, { useState, useEffect } from 'react'
import { Pagination } from '@material-ui/lab'
import { withStyles } from '@material-ui/core'

import Header from './Header'
import ArtistList from './ArtistList'
import SearchArtistForm from './SearchArtistForm'
import Layout from './Layout'
import usePagination from './Pagination'
import logic from '../logic'

const appStyles = theme => ({
  pagination: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  }
})

const App = ({ classes }) => {
  const [page, setPage] = useState(1);
  const [artistsList, setArtistsList] = useState(false);
  const PER_PAGE = 10;
  const count = Math.ceil(artistsList.length / PER_PAGE);

  const _DATA = usePagination(artistsList, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    loadArtist()
  }, [])

  const loadArtist = async (type = 'musico') => {
    const artists = await logic.getArtistByType(type)
    setArtistsList(artists)
  }

  return <Layout>
    <Header />
    <SearchArtistForm loadArtists={artists => setArtistsList(artists)} />
    {artistsList && <ArtistList artists={_DATA.currentData()} />}
    <div className={classes.pagination}>
      {artistsList && <Pagination
          color="primary"
          count={count}
          size="large"
          page={page}
          variant="text"
          shape="rounded"
          onChange={handleChange}
        />}
      </div>
  </Layout>
}

export default withStyles(appStyles)(App)
