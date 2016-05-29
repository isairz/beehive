import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

export default () => (
  <header>
    <nav className={styles.nav}>
      <div className={styles.header}>
        <a href="/"><div className={styles.brand}>School Idol</div></a>
      </div>
      <div className={styles.items}>
        <ul>
          <li><Link to="/manga">만화</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)
