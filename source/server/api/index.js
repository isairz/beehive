import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'

const api = express.Router()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

api.post('/upload', multer({ dest: "./tmp" }).array('files'), (req, res) => {
  console.log(req.body)
  console.log(req.files)
  res.end()
})

module.exports = api
