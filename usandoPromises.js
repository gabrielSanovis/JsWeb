const http = require('http')

function getAluno(letra) {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try { 
                    resolve(JSON.parse(resultado))
                } catch(e) { 
                    reject(e)
                }
            })
        })
    })
}

let nomes = []

Promise.all([getAluno('A'), getAluno('B'), getAluno('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getAluno('D').catch(e => console.log(e.message))