function gerarNumeroEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
    }
    
    return new Promise(resolve => { 
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(10, 60, 4000),
        gerarNumeroEntre(10, 60, 1000),
        gerarNumeroEntre(10, 60, 500),
        gerarNumeroEntre(10, 60, 1500),
        gerarNumeroEntre(10, 60, 3000),
        gerarNumeroEntre(10, 60, 2000),
    ])
}
gerarVariosNumeros()
    .then(console.log)