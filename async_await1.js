function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

function retornaValor() {
    return new Promise(resolve => setTimeout(() => {resolve(10)}, 5000))
}

async function executar () {
    let valor = await retornaValor()
    console.log(`Executando ${valor}`)

    await esperarPor()
    console.log(`Executando ${valor + 1}`)
    
    await esperarPor()
    console.log(`Executando ${valor + 2}`)
    
    await esperarPor()
    console.log(`Executando ${valor + 3}`)

    return valor + 4
}
async function executarDeVerdade() {
    let valor = await executar()
    console.log(valor)
}
executarDeVerdade()