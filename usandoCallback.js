const http = require('http')

function getAluno(letra, callback) {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getAluno('A', alunos => {
    nomes = nomes.concat(alunos.map(e => `A: ${e.nome}`))
    
    getAluno('B', alunos => {
        nomes = nomes.concat(alunos.map(e => `B: ${e.nome}`))
        getAluno('C', alunos => {
            nomes = nomes.concat(alunos.map(e => `C: ${e.nome}`))
            console.log(nomes)
        })
    })
})