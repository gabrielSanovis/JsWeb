function inverso(element) {
    if(typeof element === typeof true) {
        return !element
    }else if(typeof element === typeof 0) {
        if(element > 0) {
            return -element
        }else {
            return -element
        }
    }else {
        return `booleano ou números esperado, mas o parâmetro é do tipo ${typeof element}`
    }
}

console.log(inverso(-2000))
console.log(inverso(true))
console.log(inverso('1'))
console.log(inverso('programação'))