function diasDaSemana (dia) {
    switch (dia) {
        case 1:
            return 'Domingo fim de semana'
            break
        case 2:
            return 'Segunda dia útil'
            break
        case 3:
            return 'Terça dia útil'
            break
        case 4:
            return 'Quarta dia útil'
            break
        case 5:
            return 'Quinta dia útil'
            break
        case 6:
            return 'Sexta dia útil'
            break
        case 7:
            return 'Sábado fim de semana'
            break
        default: 
            return 'Dia inválido'
    }
}
console.log(diasDaSemana(4))
console.log(diasDaSemana(5))
console.log(diasDaSemana(6))
console.log(diasDaSemana(7))
console.log(diasDaSemana(8))