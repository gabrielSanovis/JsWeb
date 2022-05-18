function segundoMaior(array) {
    const maior = Math.max(...array)
    const newArray = array.filter(elemento => elemento < maior)
    return Math.max(...newArray)
    
}
console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))