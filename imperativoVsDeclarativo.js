const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let valorTotal = 0
for(let i = 0; i < alunos.length; i++) {
    valorTotal += alunos[i].nota
}
console.log(valorTotal / alunos.length)

// Declarativo
const getNota = element => element.nota
const soma = (acumulador, num) =>  acumulador += num
const resultado = alunos.map(getNota).reduce(soma)
console.log(resultado / alunos.length)