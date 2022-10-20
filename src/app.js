const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')
const cors = require('cors')
const router = require('./routes/pessoasRoutes.js')
const db = require('./database/connection.js')
const app = express()

db.on('error', () => {
    throw new Error('Não foi possível se conectar ao banco.')
})
db.once('open', () => {
    console.log('Conexão com o banco feita com sucesso.')
})

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://crud-api-9vkx.onrender.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json())
   .use(express.urlencoded({extended: true}))
   .use(router)

module.exports = app