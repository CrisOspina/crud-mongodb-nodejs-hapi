'use strict'

const { Usuario } = require('../model/Instituto')

const POST = server => {
  server.route({
    method: 'POST',
    path: '/estudiante',
    handler: (request, h) => validationAndInsertDB(request),
  })
}

const validationAndInsertDB = request => {
  let estudiante = new Usuario({
    nombre: request.payload.nombre,
    apellido: request.payload.apellido,
    edad: request.payload.edad,
  })

  const { nombre, apellido, edad } = estudiante

  if (nombre === '' || apellido === '' || edad === '') {
    return {
      estado: 'error',
      message: 'Campos obligatorios',
    }
  } else {
    estudiante.save()
    return {
      estado: 'OK',
      message: 'Registro exitoso',
      id: estudiante._id,
    }
  }
}

module.exports = { POST }
