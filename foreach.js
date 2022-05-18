const aprovados = ['Gabriel', 'Fernanda', 'Marcelo', 'Bruna']
aprovados.forEach(function(nome, indice) { // ainda tem o terceiro param que é o array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAlunos = nome => console.log(nome)
aprovados.forEach(exibirAlunos)