import Manga from '../models/Manga'
import _ from 'lodash'

export default async function mangalist (req, res) {
  try {
    const list = await Manga.find()
    res.status(200).json(
      _(list)
        .keyBy('_id')
        .mapValues(item => ({
          id: item._id,
          title: item.title,
          page: item.page,
        }))
        .value()
    )
  } catch(error) {
    console.error(error) // eslint-disable-line
    res.status(500).end()
    return;
  }
}
