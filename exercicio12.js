function fatorar (fatorial) {
    if(fatorial === 0) {return 1}
    let fatoracao = fatorial
    for (i = 1; i < fatorial; i++) {
        fatoracao *= i
    }
    return fatoracao
}
console.log(fatorar(0))