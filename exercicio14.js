function comprar (fruta) {
    switch(fruta.toLowerCase()) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            return '“Estamos com escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'Erro, fruta inválida'
    }
}

console.log(comprar('MelANciA'))
console.log(comprar('dale'))