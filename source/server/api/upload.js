import decompress from 'decompress'
import path from 'path'
import _ from 'lodash'
import sharp from 'sharp'
import fs from 'fs-promise'

import Manga from '../models/Manga'

const options = {
  map: (unpack, idx) => ({
    ...unpack,
    path: idx + path.extname(unpack.path),
  })
}

const makeThumbnail = (source, dest) => (
  sharp(source)
    .resize(null, 360)
    .toFile(dest)
)

const makePage = (source, dest) => (
  sharp(source)
    // .resize(null, 1080)
    .toFile(dest)
)

export default async function upload (req, res) {
  const { title } = req.body
  try {
    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i]
      const tmpDir = file.path + '_'
      const targetDir = path.join(tmpDir, 'result');
      const unpacks = await decompress(file.path, tmpDir, options)
      if (unpacks.length === 0) throw('Not Compress File')

      await fs.mkdir(targetDir)

      let idx = 0
      for (let j = 0; j < unpacks.length; j++) {
        const unpack = unpacks[j]
        const ext = path.extname(unpack.path)
        const source = unpack.data
        const thumbnail = path.join(targetDir, `${idx}s.jpg`)
        const page = path.join(targetDir, `${idx}p.jpg`)
        try {
          await makeThumbnail(source, thumbnail)
          await makePage(source, page)
          idx++;
        } catch (err) {
          console.error(err)
          // Nothing...
        }
      }

      const manga = new Manga ({
        title,
        path: title,
        page: idx,
      })
      const { _id } = await manga.save()

      await fs.move(targetDir, `./files/${_id}`)
    }
  } catch(error) {
    console.error(error) // eslint-disable-line
    res.status(500).end()
    return;
  }
  res.status(200).end()
}
