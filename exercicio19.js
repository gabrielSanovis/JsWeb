function cardapio (cod, quantidade = 1) {
    switch(cod) {
        case 100:
            console.log(`Você pediu ${quantidade} Cachorro-quente, sua conta deu: ${quantidade * 3.00} Reais`)
            break
        case 200:
            console.log(`Você pediu ${quantidade} Hambúrguer Simples, sua conta deu:  ${quantidade * 4.00}Reais`)
            break
        case 300:
            console.log(`Você pediu ${quantidade} Cheesseburguer, sua conta deu: ${quantidade * 5.50} Reais`)
            break
        case 400:
            console.log(`Você pediu ${quantidade} Bauru, sua conta deu: ${quantidade * 7.50} Reais`)
            break
        case 500:
            console.log(`Você pediu ${quantidade} Refrigerante, sua conta deu: ${quantidade * 3.50} Reais`)
            break
        case 600:
            console.log(`VocÊ pediu ${quantidade} Suco, sua conta deu: ${quantidade * 2.80} Reais`)
            break
        default:
            console.log('Não servimos esse tipo de lanche')
    }
}
cardapio(100, 2)
cardapio(200)
cardapio(300, 3)
cardapio(400, 5)
cardapio(500, 6)
cardapio(600, 4)
cardapio(700)