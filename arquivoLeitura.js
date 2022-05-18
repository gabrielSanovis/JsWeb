const fs = require('fs')

const caminho = __dirname + "/arquivo.json"
// sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assicrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db)
})

const config = require('./arquivo.json')
console.log(config.db.port)

fs.readdir(__dirname, (err, arquivo) => {
    console.log(arquivo)
})