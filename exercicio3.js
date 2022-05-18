function salario(workHours, workedHours) {
    const resultado = workHours * workedHours
    return `Salário igual a R$${resultado.toFixed(2).replace('.', ',')}`
}
console.log(salario(150, 40.5))