import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'

import mangalist from './mangalist'
import upload from './upload'
import remove from './remove'

const api = express.Router()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

api.get('/manga', mangalist)
api.post('/upload', multer({ dest: './temp' }).array('files'), upload)
api.delete('/upload/:id', remove)

module.exports = api
