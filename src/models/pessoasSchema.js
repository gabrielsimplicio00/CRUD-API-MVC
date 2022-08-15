const mongoose = require('mongoose')
const { Schema } = mongoose

const pessoaSchema = new Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    idade: {type: Number, required: true},
    email: {type: String, unique: true, sparse: true},
    profissao: {type: String}
})

const Pessoa = mongoose.model('Pessoa', pessoaSchema)

module.exports = Pessoa