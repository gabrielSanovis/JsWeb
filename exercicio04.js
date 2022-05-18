function restoDaDivisao (dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    return `divisão = ${Math.floor(resultado)} e resto = ${resto}`
}
console.log(restoDaDivisao(8, 3))