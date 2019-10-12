'use strict'

const { Usuario } = require('../model/Instituto')

const PUT = server => {
  server.route({
    method: 'PUT',
    path: '/estudiante/{id}',
    handler: (request, h) => updateUser(request),
  })
}

const updateUser = async request => {
  const id = request.params.id

  return Usuario.findByIdAndUpdate(id, request.payload, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
    .then(res => {
      return {
        estado: 'update',
        message: 'Registro actualizado',
      }
    })
    .catch(err => {
      return {
        estado: 'error',
        message: 'Error al actualizar registro',
      }
    })
}

module.exports = { PUT }
