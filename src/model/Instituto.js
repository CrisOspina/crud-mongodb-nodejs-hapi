'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const estudianteSchema = new Schema({
  nombre: {},
  apellido: {},
  edad: {},
})

const Usuario = mongoose.model('estudiantes', estudianteSchema)

module.exports = { Usuario }
