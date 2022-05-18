function soNoticiaBoa(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soNoticiaBoa(8.1)
soNoticiaBoa(6.1)

function seForVerdade(valor) {
    if(valor) {                         // se for true ele imprime
        console.log('É verdade ' + valor)
    }
    if(!valor) {                        // se for false ele imprime
        console.log('Não é verdade... ' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([ 1, 2 ])
seForVerdade({})