function gerarNumeroEntre(min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }
    
    return new Promise((resolve, reject) => { 
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repedito!')
        }else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    let numeros = []
    try{
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    }catch(e) {
        if(tentativas > 10) {
            throw 'Que chato!!!'
        }else{
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)