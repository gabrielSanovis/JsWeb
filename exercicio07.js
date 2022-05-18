function bhaskara (b, a, c) {
    let delta = (b ** 2) - (4 * a * c)
    if (0 >= delta) {
        return 'Desculpe, mas o valor de delta é negativo'
    }
    let bhaskaraLine1 = (-b + Math.sqrt(delta)) / 2 * a
    let bhaskaraLine2 = (-b - Math.sqrt(delta)) / 2 * a
    return `
    X¹ = ${bhaskaraLine1.toFixed(2).toString().replace('.', ',')}
    x² = ${bhaskaraLine2.toFixed(2).toString().replace('.', ',')} 
    delta = ${delta}`
    
    
}
console.log(bhaskara(4, 1, -12))