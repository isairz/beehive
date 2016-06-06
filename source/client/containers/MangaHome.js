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
  const reverse = _.reduceRight(list, (rlist, item) => {
    rlist.push(item)
    return rlist
  }, [])
  return <MangaList list={reverse} />
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
