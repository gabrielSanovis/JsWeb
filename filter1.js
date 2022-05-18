const produtos = [ 
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
const elementosCaros = elementos => elementos.preco > 500
const elementosFrageis = elementos => elementos.fragil
const resultado = produtos.filter(elementosCaros).filter(elementosFrageis)

console.log(resultado)