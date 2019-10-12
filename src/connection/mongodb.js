'use strict'

const mongoose = require('mongoose')

const db = 'instituto'
const URL = `mongodb://localhost/${db}`

const isConnectMongoDB = () =>
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(res => true)
    .catch(err => console.log(err))

module.exports = { isConnectMongoDB }
