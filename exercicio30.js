const soma = function (array) {
    return array.reduce((acumulador, atual) => acumulador + atual, 0)
}
const media = function(array) {
    return soma(array) / array.length
}

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map(estudantes => {
        const chave = 0,
        valor = 1
        return {nome: estudantes[0], media: media(estudantes[valor])}
    })
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}


console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))