import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

import styles from './styles'

export default ({ list }) => (
  <div className={styles.container}>
    {_.map(list,
      item => (
        <div className={styles.item}>
          <Link to={item.link}>
            <img
              className={styles.thumbnail}
              src={'http://schoolidol.org:8080/' + item.thumbnail}
              alt={item.name}
            />
            <div className={styles.title}>
              {item.name}
            </div>
          </Link>
        </div>
      )
    )}
  </div>
)

/*
JSON.stringify(
  {
    list:
      $('.mdl-card').map(function() {
        return {
          thumbnail: 'http://schoolidol.org:8080/' + $(this).find('img').attr('src'),
          name: $(this).find('.mdl-card__title-text').text(),
          link: $(this).find('a').attr('href'),
        }
      })
  }
)
*/
