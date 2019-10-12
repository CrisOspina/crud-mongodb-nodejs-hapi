'use strict'

const { Usuario } = require('../model/Instituto')

const GET_ALL = server => {
  server.route({
    method: 'GET',
    path: '/estudiante',
    handler: (request, h) => Usuario.find(),
  })
}

module.exports = { GET_ALL }
