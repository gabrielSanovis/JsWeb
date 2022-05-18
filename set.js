// não aceita repetição/ não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const timesNordestino = ['Santa cruz', 'Sport', 'Nautico', 'Baiha', 'Sport']
timesNordestino.forEach(time => {
    times.add(time)
    return times
})
console.log(times)

const nomes = ['Gabriel', 'Graziela', 'Fernanda', 'Marcelo']
const nomesSet = new Set(nomes)
console.log(nomesSet)