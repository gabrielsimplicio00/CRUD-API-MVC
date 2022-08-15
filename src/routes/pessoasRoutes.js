const express = require('express')
const PessoasController = require('../controllers/PessoasController.js')

const router = express.Router()


router.get('/', PessoasController.exibeMensagem)
      .get('/pessoas', PessoasController.exibePessoas)
      .get('/pessoas/:id', PessoasController.exibeUmaPessoa)
      .post('/pessoas', PessoasController.criaPessoa)
      .put('/pessoas/:id', PessoasController.atualizaPessoa)
      .delete('/pessoas/:id', PessoasController.deletaPessoa)

module.exports = router