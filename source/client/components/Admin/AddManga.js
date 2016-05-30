import React from 'react'
import Dropzone from 'react-dropzone'
import _ from 'lodash'

import styles from './styles.css'

const Manager = {
  Manga: {
    'Category' : "array",
    'Name' : "string",
    'Authors' : "array",
    'Published' : "array",
    'Charactors' : "array",
    'Tags': "array",
  },
}

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      files: [],
    }
  }

  onDrop (files) {
    this.setState({ files })
  }

  onSubmit () {
    const data = new FormData()
    data.append('file', this.state.files[0])
    fetch('/upload/manga', {
      method: 'POST',
      body: data,
    })
  }

  render () {
    const { files } = this.state
    console.log(files)
    return (
      <div>
        <form id="updateManga" action="action_page.php" method="POST">
          <Dropzone
            ref="dropzone"
            className={styles.dropzone}
            onDrop={(e) => this.onDrop(e)}
            disableClick
          >
            {_.map(files, file => (
              <div className={styles.fileCard}>
                <div className={styles.thumbnail}>
                  <img src={file.preview} alt={file.name} />
                </div>
                <div className={styles.content}>
                  <div className={styles.textfield}>
                    <input defaultValue={file.name.replace(/\.[^/.]+$/, '')} />
                    <label>FileName</label>
                  </div>
                  <div>{file.type}</div>
                  <div>{`${(file.size / 1024 / 1024).toFixed(3)} MB`}</div>
                </div>
              </div>
            ))}
          </Dropzone>
          <input type="button" onClick={() => this.refs.dropzone.open()} />
          <input type="button" onClick={() => this.onSubmit()} />
        </form>
      </div>
    )
  }
}
