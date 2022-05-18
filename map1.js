const nums = [ 1, 2, 3, 4, 5 ]

// For com propósito
let resultado = nums.map(function(element) {
    return element * 2
}) 
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const formata = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
resultado = nums.map(soma10).map(triplo).map(formata)
console.log(resultado)