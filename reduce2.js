const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista ?

const temBolsa = (acumulador, elemento) => acumulador && elemento
console.log(alunos.map(a => a.bolsista).reduce(temBolsa))

// Desafio 2: Algum aluno é bolsista ?

const bolsa = (acumulador, alemento) => acumulador || elemento
console.log(alunos.map(e => e.bolsista).reduce(bolsa))