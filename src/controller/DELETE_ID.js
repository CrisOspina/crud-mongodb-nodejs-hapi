'use strict'

const { Usuario } = require('../model/Instituto')

const DELETE_ID = server => {
  server.route({
    method: 'DELETE',
    path: '/estudiante/{id}',
    handler: (request, h) => deleteUser(request),
  })
}

const deleteUser = async request => {
  return Usuario.findByIdAndRemove(request.params.id)
    .then(res => {
      return {
        estado: 'delete',
        message: 'Eliminado correctamente',
      }
    })
    .catch(err => {
      return {
        estado: 'error',
        message: 'Error correctamente',
      }
    })
}

module.exports = { DELETE_ID }
