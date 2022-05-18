const champions = ['Darius', 'Wukong', 'Yasuo', 'Galio', 'Ezreal']
champions.pop() // remove o último
console.log(champions)

champions.push('Jinx')
console.log(champions)

champions.shift() // remove o primeiro
console.log(champions)

champions.unshift('Fiora')
console.log(champions)

//splice pode adicionar e remover elementos

// Adicionar
champions.splice(2, 0, 'Darius', 'Ezreal')
console.log(champions)

// Remover
champions.splice(3, 1)
console.log(champions)

const algunsChampions1 = champions.slice(2) // criar novo array
console.log(algunsChampions1)

const algunsChampions2 = champions.slice(1, 4)
console.log(algunsChampions2)