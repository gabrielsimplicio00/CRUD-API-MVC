const Pessoas = require('../models/pessoasSchema.js')

class PessoaController {

    static exibeMensagem(req, res) {
        return res.redirect("/docs")
        // return res.status(200).send({mensagem: 'Welcome to the API! (/docs -> swagger documentation)'})
    }

    static async exibePessoas(req, res) {
        const pessoas = await Pessoas.find({})
        return res.status(200).send(pessoas)
    }

    static async criaPessoa(req, res) {
        const novaPessoa = await Pessoas.create(req.body)
        return res.status(200).send(novaPessoa)
    }

    static async exibeUmaPessoa(req, res){
        const { id } = req.params
        const pessoa = await Pessoas.findById(id)
        if (!pessoa) {
            return res.status(404).send("O usuário não foi encontrado")
        }
        return res.status(200).send(pessoa)
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const dados = req.body
        const pessoaAtt = await Pessoas.findByIdAndUpdate(id, dados)
        if (!pessoaAtt) {
            return res.status(404).send("O usuário não foi encontrado")
        }
        return res.status(200).send(pessoaAtt)
    }

    static async deletaPessoa(req, res){
        const { id } = req.params
        if ( !(await Pessoas.exists({_id: id})) ) {
            return res.status(404).send("O usuário não foi encontrado")
        }
        await Pessoas.findByIdAndDelete(id, {$exists: true})
        return res.status(200).send({message: "Usuário deletado com sucesso"})
    }
}

module.exports = PessoaController
