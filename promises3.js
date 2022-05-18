function gerarNumeroEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }
    
    return new Promise(resolve => { 
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(aleatorio)
    })
}
gerarNumeroEntre(10, 11)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)