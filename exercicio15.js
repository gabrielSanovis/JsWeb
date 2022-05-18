function comprar (marcaDoCarro) {
    switch(marcaDoCarro.toLowerCase()) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certezaque não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com esse modelo'
    }
}

console.log(comprar('hatch'))
console.log(comprar('sedan'))
console.log(comprar('motocicleta'))
console.log(comprar('caminhonete'))
console.log(comprar('bike'))