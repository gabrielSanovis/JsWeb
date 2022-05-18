
function funcionarOuNao (valor, porcentagem) {
    return new Promise((resolve, reject) => {
        try {
            con.log('Temp')
            if(porcentagem > Math.random()) {
                reject('Ocorreu um error!')
            } else{
                resolve(valor)
            }

        }catch(e) {
            reject(e)
        }
    })
}
funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Error: ${err}`))
    .then(() => console.log('Fim!'))