function repitir(repitido, qntsVezes) {
    const newArray = []
    for(let i = 0; i < qntsVezes; i++) {
        newArray.push(repitido)
    }
    return newArray
}
console.log(repitir(7, 3))
console.log(repitir('Code', 2))