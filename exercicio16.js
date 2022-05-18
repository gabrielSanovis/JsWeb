function realizarCalculo (x = 0, operador, y = 0) {
    if(typeof x && typeof y != typeof 0) {
        return 'Digete um número, por favor!'
    }else {
        switch(operador) {
            case '+':
                return `A soma de ${x} mais ${y} é = ${x + y}`
                break
            case '-':
                return `A subtração de ${x} menos ${y} é = ${x - y}`
                break
            case '*':
                return `A multiplicação de ${x} vezes ${y} é = ${x * y}`
                break
            case '/':
                return `A divisão de ${x} divido por ${y} é = ${x / y}`
            default:
                return 'Digite uma operação válida'
        }
    }
}
console.log(realizarCalculo(3, '+', 4))
console.log(realizarCalculo(3, '-', 4))
console.log(realizarCalculo(3, '*', 4))
console.log(realizarCalculo(3, '/', 4))
console.log(realizarCalculo('a'))