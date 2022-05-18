function inverter(objeto) {
    const newArray = Object.entries(objeto)
    const array = newArray.map(elemento => elemento.reverse())
    return Object.fromEntries(array)
}

console.log(inverter({ a: 1, b: 2, c: 3}))