Array.prototype.forEach2 = function(callBack) {
    for(i = 0; i < this.length; i++) {
        callBack(this[i], i, this)
    }
}


const aprovados = ['Gabriel', 'Fernanda', 'Marcelo', 'Bruna']
aprovados.forEach(function(nome, indice) { // ainda tem o terceiro param que é o array
    console.log(`${indice + 1}) ${nome}`)
})
