function excluir(frase) {
    const vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}
console.log(excluir('Fundamentos'))
console.log(excluir('COD3r'))