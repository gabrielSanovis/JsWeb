function anoBissexto (ano) {
    if (typeof ano !== typeof 0) {
        return `Digite somente números`
    }else if (ano <= 0) {
        return `Informe um ano válido`
    }else if (ano % 400 === 0) {
        return `O ano de ${ano} é bissexto (${true})`
    }else if (ano % 100 === 0) {
        return `O ano de ${ano} é bissexto (${true})`
    }else if (ano % 4 === 0) {
        return `O ano de ${ano} é bissexto (${true})`
    }else  {
        return `O ano de ${ano} não é bissexto (${false})`
    }
}
console.log(anoBissexto(0))