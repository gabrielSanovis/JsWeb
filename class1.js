class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class ClicoFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addFinancas(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConstante = 0
        this.lancamentos.forEach(l => {
            valorConstante += l.valor
        })
        return valorConstante
    }
}
const salario = new Lancamento('Programador', 45000)
const contaDeLuz = new Lancamento('Energia', -230)

const contas = new ClicoFinanceiro(9, 2018)
contas.addFinancas(salario, contaDeLuz)

console.log(contas.sumario())