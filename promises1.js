const primeiroElemento = arrayOuString => arrayOuString[0][0]

const letraMinuscula = letra =>  letra.toLowerCase()

new Promise(cumprirPromessa => {
    return cumprirPromessa(['Ana', 'Graziela', 'Gabriel', 'Fabiana'])
})
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)