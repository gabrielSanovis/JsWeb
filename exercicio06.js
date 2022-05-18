function jurosSimples (capInicial, taxJuros, tempAplicacao) {
    let montante = capInicial * (1 + taxJuros * tempAplicacao)
    return `R$ ${montante.toFixed(2).toString().replace('.', ',')}`
}

console.log(jurosSimples(1000, 0.5, 12))

function jurosComposto (capInicial, taxJuros, tempAplicacao) {
    let montante = capInicial * (1 + taxJuros) ** tempAplicacao
    return `R$ ${montante.toFixed(2).toString().replace('.', ',')}`
}

console.log(jurosComposto(1000, 0.05, 1))