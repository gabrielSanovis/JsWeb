let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"


function avaliacao (stringPontuacoes, novoJogo) {
    let pontuacoes = stringPontuacoes.split(", ")
    pontuacoes.push(novoJogo)
    let recordesQuebrados = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    
    for (let i = 1; i <= pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            recordesQuebrados++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return `
        Sua pior pontuação foi seu ${piorJogo}
        Você quebrou seu recorde ${recordesQuebrados} vezes, parabéns`
}
console.log(avaliacao(stringPontuacoes, 60))