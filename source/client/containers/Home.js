import React from 'react'

import 'static/vendor/font-awesome/css/font-awesome.min.css'
import styles from './styles.css'

export default () => (
  <div>
    <p className={styles.tCenter}>
      <b>Welcome.</b>
      <br />
      You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
    </p>
    <div className={styles.footer}>
      asasdasdadfasd
      <br /><br />
      built with <i className="fa fa-heart" /> by <a href="https://github.com/flipace" target="_blank">@flipace</a>
    </div>
  </div>
)
