function divisivel (inteiro) {
    if(inteiro === undefined) {
        return `Digite um número`
    }else if (typeof inteiro !== typeof 0) {return `(${inteiro}) não é um número inteiro`}
    let comparacao = inteiro % 3 === 0
    return !!comparacao
}

console.log(divisivel(4))
console.log(divisivel(6))
console.log(divisivel(150))
console.log(divisivel(null))
console.log(divisivel())