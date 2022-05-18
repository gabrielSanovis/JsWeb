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

const obterAlunos = async () => {
    const turmaA = await getAluno('A')
    const turmaB = await getAluno('B')
    const turmaC = await getAluno('C')
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(alunos => console.log(alunos))