'use strict'

const { Usuario } = require('../model/Instituto')

const DELETE_ALL = server => {
  server.route({
    method: 'DELETE',
    path: '/estudiante',
    handler: (request, h) => deleteCollection(),
  })
}

const deleteCollection = () => {
  return Usuario.deleteMany()
    .then(res => {
      return {
        estado: 'delete',
        message: 'Colección eliminada correctamente',
      }
    })
    .catch(err => {
      return {
        estado: 'error',
        message: 'Error al eliminar la colección',
      }
    })
}

module.exports = { DELETE_ALL }
