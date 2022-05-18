function google(buscar, array) {
    const newArray = array.filter(elemento => elemento.startsWith(buscar))
    return newArray
}
console.log(google('pro', ["programação", "mobile", "profissional"]))
console.log(google("python", ["javascript", "java", "c++"]))