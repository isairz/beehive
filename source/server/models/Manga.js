import mongoose, { Schema } from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const mangaSchema = new Schema({
  title: String,
  author: String,
  publish: Date,
  upload: { type: Date, default: Date.now },
  type: String,
  page: Number,
})

mangaSchema.plugin(autoIncrement.plugin, 'Manga')
module.exports = mongoose.model('Manga', mangaSchema)
