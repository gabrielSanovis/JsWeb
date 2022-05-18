const fs = require('fs')
const path = require('path')

const exibirConteudo = (_, conteudo) => console.log(conteudo.toString())

const arquivoOut = (modulo) => {
    return new Promise(resolve => {
        const caminho = path.join(__dirname, modulo + '.txt')
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

arquivoOut('dados')
    .then(console.log)