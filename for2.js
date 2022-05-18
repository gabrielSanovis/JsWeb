const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notas) {
    console.log(`${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Barbosa Dos Santos',
    idade: `${18} anos`,
    peso: `${90} Kg`
}
for (let atribuicao in pessoa) {
    console.log(`${atribuicao}: ${pessoa[atribuicao]}`)
}