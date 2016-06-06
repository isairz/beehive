import React from 'react'
import _ from 'lodash'
import styles from './styles'

export default ({ pages }) => (
  <div className={styles.container}>
    {_.map(pages,
      page => (
        <div key={page} className={styles.page}>
          <img src={page} role="presentation" />
        </div>
      )
    )}
  </div>
)
