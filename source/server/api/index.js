import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'

import mangalist from './mangalist'
import upload from './upload'

const api = express.Router()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

api.get('/manga', mangalist)
api.post('/upload', multer({ dest: './temp' }).array('files'), upload)

module.exports = api
