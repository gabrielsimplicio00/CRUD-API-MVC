const { beforeEach, afterEach, describe, it, expect } = require('@jest/globals')
const app = require('../../app')
const request = require('supertest')

MOCK_PESSOA = {
    __v: 0,
    _id: "63237a2ad3df9e35fb9fbecd",
    nome: "Maria",
    sobrenome: "Alves",
    idade: 27,
    email: "maria_alves@contato.com",
    profissao: "Arquiteta"
}

let server;
beforeEach( () => {
    const port = process.env.PORT
    server = app.listen(port)
})

afterEach( () => {
    server.close();
})

describe('Suite de testes das rotas de pessoas', () => {
    it('Exibe mensagem do endpoint principal', async () => {
        const resultado = await request(app)
            .get('/')
            .expect({mensagem: 'Welcome to the API'})
    })

    it('Get pessoas/ retorna lista de pessoas', async () => {
        const resposta = await request(app)
            .get('/pessoas')
            .expect(200)

        expect(resposta.body[0]).toEqual(MOCK_PESSOA)
    })
})
