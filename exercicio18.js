function string (inteiro) {
    switch(inteiro) {
        case 0:
            return 'Zero'
            break
        case 1:
            return 'Um'
            break
        case 2:
            return 'Dois'
            break
        case 3:
            return 'Três'
            break
        case 4:
            return 'Quatro'
            break
        case 5: 
            return 'Cinco'
            break
        case 6:
            return 'Seis'
            break
        case 7:
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return 'Nove'
            break
        case 10:
            return 'Dez'
            break
        default:
            return `Tem certeza que ${inteiro} está entre 0 a 10 ? digite novamento...`
    }
}

console.log(string(0))
console.log(string(1))
console.log(string(2))
console.log(string(3))
console.log(string(4))
console.log(string(5))
console.log(string(6))
console.log(string(7))
console.log(string(8))
console.log(string(9))
console.log(string(10))
console.log(string(11))