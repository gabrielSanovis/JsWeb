function getNumero(array, digito) {
    const newArray = []
    const transformaString = array.map(number => number.toString())
    const getDigito = transformaString.filter(elemento => elemento.length === digito)
    for(let i = 0; i < getDigito.length; i++) {
        const numInteiro = parseInt(getDigito[i], 10)
        newArray.push(numInteiro)
    }
    return newArray
}

console.log(getNumero([38, 2, 365, 10, 125, 11], 2))
console.log(getNumero([5, 9, 1, 125, 11], 1))
//getNumero([38, 2, 365, 10, 125, 11], 2)