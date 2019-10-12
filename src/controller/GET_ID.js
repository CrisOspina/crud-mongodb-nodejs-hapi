'use strict'

const { Usuario } = require('../model/Instituto')

const GET_ID = server => {
  server.route({
    method: 'GET',
    path: '/estudiante/{id}',
    handler: (request, h) => validateID(request),
  })
}

const validateID = async request => {
  return Usuario.find({ _id: request.params.id }).catch(err => {
    return {
      estado: 'error',
      message: 'ID no encontrado',
    }
  })
}

module.exports = { GET_ID }
