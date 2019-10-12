'use strict'

const { initHapi } = require('./connection/hapi')
const { isConnectMongoDB } = require('./connection/mongodb')

// Verificar que los servicios esten activos
initHapi()
  .then(res => console.log('Hapi === success'))
  .catch(err => console.log('Hapi === failed'))

isConnectMongoDB()
  .then(res => console.log(`mongodb === success`))
  .catch(err => console.log(`mongodb === failed`))
