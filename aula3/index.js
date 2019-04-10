const variaveis = require('./variables')
const funcoes = require('./funcoes')

funcoes.salvar(variaveis, (e, data) => {
    if(!e) {
        console.log(data)
        return
    }
    console.log(data)
})

const novaInf = {
    nome: 'Macbook Pro',
    preco: 15000.99
}

funcoes.editar(variaveis, '0', novaInf,(e, data) => {
    if(!e) {
        console.log(data)
        return
    }
    console.log(data)
})