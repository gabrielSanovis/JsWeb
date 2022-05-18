function novoSalario (plano, salario) {
    if (typeof plano != typeof ' ' || typeof salario != typeof 0) {
        return 'Informações inválidas'
    }else {
        switch(plano.toUpperCase()) {
            case 'A':
                return `Seu novo salário: ${salario * 1.1}`
                break
            case 'B':
                return `Seu novo salário: ${salario * 1.15}`
                break
            case 'C':
                return `Seu novo salário: ${salario * 1.20}`
                break
            default:
                return `O plano informado é inválido`
        }
    }
}
console.log(novoSalario(0, 'cara'))
console.log(novoSalario('a', 1000))
console.log(novoSalario('B', 1000))
console.log(novoSalario('C', 1000))
console.log(novoSalario('D', 1000))