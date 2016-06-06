import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

import styles from './styles'

export default ({ list }) => (
  <div className={styles.container}>
    {_.map(list,
      item => (
        <div key={item.id} className={styles.item}>
          <Link to={item.link || `/manga/${item.id}`}>
            <img
              className={styles.thumbnail}
              src={item.thumbnail || `/file/${item.id}/0s.jpg`}
              alt={item.title}
            />
            <div className={styles.title}>
              {item.title}
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
