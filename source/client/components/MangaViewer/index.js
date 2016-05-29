import React from 'react'
import _ from 'lodash'
import styles from './styles'

export default ({ pages }) => (
  <div className={styles.container}>
    {_.map(pages,
      page => (
        <div className={styles.page}>
          <img src={'http://schoolidol.org:8080/' + page} role="presentation" />
        </div>
      )
    )}
  </div>
)
