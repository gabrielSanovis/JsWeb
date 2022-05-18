// Objeto literal
const obj1 = {}
console.log(obj1)

// Obj em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getCalcularDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getCalcularDesconto(), p2.getCalcularDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getCalcularSalario: function() {
            return (salarioBase / 30) * (30 - faltas)
        } 
    }
}
const f1 = criarFuncionario('Gabriel', 1000, 3)
const f2 = criarFuncionario('Graziela', 10000, 10)
console.log(f1.getCalcularSalario().toFixed(2), f2.getCalcularSalario().toFixed(2))