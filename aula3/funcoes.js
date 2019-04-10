const crud = {
    salvar: (dados, cb) => {
        if(dados) {
            cb(true, 'Dados armazenados com sucesso!')
            return
        }
        cb(false, 'Sem dados')
    },
    inserir: (dados, novoDado, cb) => {
        if(dados && novoDado) {
            dados.push(novoDado)
            cb(true, dados)
            return
        }
        cb(false, 'Faltam dados')
    },
    excluir: (dados, id, qtd, cb) => {
        if(dados && id) {
            dados.splice(id, qtd)
            cb(true, dados)
            return
        }
        cb(false, 'Faltam dados')
    },
    editar: (dados, id, novoDado, cb) => {
        if(dados && id && novoDado) {
            dados[id] = novoDado
            cb(true, dados)
            return
        }
        cb(false, 'Faltam dados.')
    }
}

module.exports = crud