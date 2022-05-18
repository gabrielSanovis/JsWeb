function seRepete(caractere ,frase) {
    const newArray = frase.split('')
    const getCaractere = newArray.filter(elemento => elemento === caractere)
    return getCaractere.length
}

console.log(seRepete('r', "A sorte favorece os audazes"))
console.log(seRepete("c", "Conhece-te a ti mesmo"))