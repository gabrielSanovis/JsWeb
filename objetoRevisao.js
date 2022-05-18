// coleção dinãmica de pares chaves/valor
const produtos = new Object
produtos.nome = 'Cadeira'
produtos['marca do produto'] = 'Generica'
produtos.preco = 220

console.log(produtos)
delete produtos['marca do produto']
delete produtos.preco
console.log(produtos)

const carro = {
    modelo: 'A4',
    preco: 89000,
    proprietario: {
        nome: 'Gabriel',
        idade: 18,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 441
        }
    },
    condutores: [{
        nome: 'Fabiana',
        idade: 43
    },
    {
        nome:'Graziela',
        idade: 19
    }],
    calcularValorDoSeguro: function() {

    }
}
carro.proprietario.endereco.logradouro = 'Av izabel de góes'
carro['proprietario'] ['endereco'] ['numero'] = 1000
console.log(carro)
delete carro.calcularValorDoSeguro
delete carro.proprietario.endereco
delete carro.condutores
console.log(carro)