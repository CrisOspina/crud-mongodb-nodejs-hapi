'use strict'

const Hapi = require('@hapi/hapi')

// CRUD
const { POST } = require('../controller/POST')
const { GET_ALL } = require('../controller/GET_ALL')
const { GET_ID } = require('../controller/GET_ID')
const { PUT } = require('../controller/PUT')
const { DELETE_ID } = require('../controller/DELETE_ID')
const { DELETE_ALL } = require('../controller/DELETE_ALL')

const initHapi = async () => {
  const http = { port: 3000, host: 'localhost' }
  const server = Hapi.server(http)

  // CRUD
  POST(server)
  GET_ALL(server)
  GET_ID(server)
  PUT(server)
  DELETE_ID(server)
  DELETE_ALL(server)

  await server.start()
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

module.exports = { initHapi }
