console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Olá Tudo bem'.reverse())

Array.prototype.first = function() {
    return this[1]
}

console.log([ 1, 2, 3, 4, 5 ].first())
console.log([ 'a', 'b', 'c', 'd' ].first())

String.prototype.toString = function() {  // Nunca faça isso, nunca altere uma função que já existe
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())