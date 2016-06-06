import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const connection = mongoose.connect('mongodb://localhost/beehive')
autoIncrement.initialize(connection)
