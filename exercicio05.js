function soma (x, y) {
    let resultado = (x + y).toFixed(2)
    console.log(`R$ ${resultado.toString().replace('.', ',')}`)
}
soma(0.1, 0.2)