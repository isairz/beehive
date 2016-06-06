import Manga from '../models/Manga'

export default async function (req, res) {
  try {
    const result = await Manga.remove({_id: req.params.id})
    res.status(200).end()
  } catch(error) {
    console.error(error) // eslint-disable-line
    res.status(500).end()
    return;
  }
}
