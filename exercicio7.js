function entre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) {
        return numero >= minimo && numero <= maximo
    }
    return numero > minimo && numero < maximo
}
console.log(entre(10, 100, 50))
console.log(entre(3, 100, 160))
console.log(entre(3, 160, 3))
console.log(entre(3, 160, 3, true))