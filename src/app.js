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

app.use(cors({
    origin: '*'
}))

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/docs");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(express.json())
   .use(express.urlencoded({extended: true}))
   .use(router)

module.exports = app
