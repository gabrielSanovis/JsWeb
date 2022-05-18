const fs = require('fs')

const celular = {
    marca: 'Lenovo',
    preco: 1100.00,
    modelo: 'Moto G6 Play'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(celular), err => {
    console.log(err || 'Arquivo salvo com sucesso!!')
})