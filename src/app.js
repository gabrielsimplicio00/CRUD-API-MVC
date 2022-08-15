const express = require('express')
const router = require('./routes/pessoasRoutes.js')
const db = require('./database/connection.js')
const app = express()

db.on('error', () => {
    throw new Error('Não foi possível se conectar ao banco.')
})
db.once('open', () => {
    console.log('Conexão com o banco feita com sucesso.')
})

app.use(express.json())
   .use(express.urlencoded({extended: true}))
   .use(router)

module.exports = app