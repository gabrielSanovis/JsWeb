function mes(num) {
    if(num > 12 || num < 1) {
        return `mes ${num} não existe em nosso banco de dados!`
    }
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
    return meses[--num]
}
console.log(mes(1), mes(0), mes(13))