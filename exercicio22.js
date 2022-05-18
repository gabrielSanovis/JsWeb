function sorteio (numero) {
    const sortear = Math.floor(Math.random() * (11 - 0) + 0)
    if(numero == sortear) {
    return `Parabéns! O número sorteado foi o ${numero}`
    }else {
        return `Que pena! O número sorteado foi o ${sortear}`
    }
}
console.log(sorteio(4))
console.log(sorteio(7))
console.log(sorteio(2))
console.log(sorteio(9))