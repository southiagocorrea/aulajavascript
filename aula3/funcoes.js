const crud = {
    salvar: (dados, cb) => {
        if(dados) {
            cb(true, 'Dados armazenados com sucesso!')
            return
        }
        cb(false, 'Sem dados')
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