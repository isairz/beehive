import React from 'react'

import NavBar from '../components/NavBar'

import 'static/vendor/font-awesome/css/font-awesome.min.css'
import styles from './styles.css'

const App = ({ children }) => (
  <div>
    <NavBar />
    <div className={styles.container}>
      {children}
    </div>
    <div className={styles.footer}>
    </div>
  </div>
)

export default App
