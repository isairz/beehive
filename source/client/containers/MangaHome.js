import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import MangaList from '../components/MangaList'
import { load as loadManga } from '../../common/reducers/manga'

const MangaHome = ({ loading, list, load }) => {
  if (_.isEmpty(list)) {
    if (!loading) load()
    return <div /> // FIXME: Loading Page
  }
  return <MangaList list={list} />
}

export default connect(
  state => ({
    loading: state.manga.loading,
    list: state.manga.list,
  }),
  dispatch => ({
    load: () => dispatch(loadManga()),
  })
)(MangaHome)
