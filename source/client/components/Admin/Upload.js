import React from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import _ from 'lodash'

import { upload } from '../../../common/reducers/upload'

import styles from './styles.css'

class Upload extends React.Component {
  constructor () {
    super()
    this.state = {
      files: [],
    }
  }

  onDrop (files) {
    this.setState({ files })
  }

  render () {
    const { files } = this.state
    // FIXME: use redux-form
    return (
      <div>
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <input type="button" value="Add" onClick={() => this.refs.dropzone.open()} />
          <input type="submit" />
          <Dropzone
            ref="dropzone"
            className={styles.dropzone}
            name="files"
            onDrop={(e) => this.onDrop(e)}
            disableClick
          >
            {_.map(files, file => (
              <div key={file.name} className={styles.fileCard}>
                <div className={styles.thumbnail}>
                  <img src={file.preview} alt={file.name} />
                </div>
                <div className={styles.content}>
                  <div className={styles.textfield}>
                    <input name="title" defaultValue={file.name.replace(/\.[^/.]+$/, '')} />
                    <label>FileName</label>
                  </div>
                  <div>{file.type}</div>
                  <div>{`${(file.size / 1024 / 1024).toFixed(3)} MB`}</div>
                </div>
              </div>
            ))}
          </Dropzone>
        </form>
      </div>
    )
  }
}


export default connect(
  () => ({}),
  dispatch => ({
    onSubmit: (e) => {
      e.preventDefault()
      dispatch(upload(new FormData(e.target)))
    },
  })
)(Upload)
