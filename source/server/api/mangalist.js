import Manga from '../models/Manga'

export default async function mangalist (req, res) {
  try {
    const list = await Manga.find()
    res.status(200).json(list)
  } catch(error) {
    console.error(error) // eslint-disable-line
    res.status(500).end()
    return;
  }
}
