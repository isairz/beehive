import React from 'react'
import _ from 'lodash'

import AddManga from '../components/Admin/AddManga'
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

export default ({ list }) => (
  <div>
    <table>
      <thead>
        <tr>
          {_.map(Manager.Manga,
            (type, field) => (
              <th>{field}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {_.map(list, (item) => (
          <tr>
            {_.map(Manager.Manga, (type, field) => (
              <th>{item[field]}</th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    <AddManga />
  </div>
)
