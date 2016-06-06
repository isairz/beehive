import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import MangaViewer from '../components/MangaViewer'
import { load as loadManga } from '../../common/reducers/manga'

const Viewer = ({ loading, manga, load }) => {
  if (!manga) {
    if (!loading) load()
    return <div /> // FIXME: loading page
  }

  const pages = manga.pages || _.map(_.range(manga.page), idx => (
    `/file/${manga.id}/${idx}p.jpg`
  ))
  return <MangaViewer pages={pages} />
}

export default connect(
  (state, ownProps) => ({
    loading: state.manga.loading,
    manga: state.manga.list[ownProps.routeParams.id],
  }),
  dispatch => ({
    load: () => dispatch(loadManga()),
  })
)(Viewer)
