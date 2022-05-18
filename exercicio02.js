function triangulo (ladoDirt, ladoEsq, base) {
    if (base && ladoEsq == ladoDirt) {
        return `
        Triângulo equilátero com lado direto medindo ${ladoDirt} metros, 
        lado esquerdo ${ladoEsq} metros e base ${base} metros`
    }else if(ladoDirt == ladoEsq || ladoDirt == base || ladoEsq == base) {
        return `
        Triângulo isósceles com lado direito medindo ${ladoDirt} metros,
        lado esquerdo ${ladoEsq} metros e base ${base} metros`
    }else {
        return `
        Triângulo escaleno com lado direito medindo ${ladoDirt} metros,
        lado esquerdo ${ladoEsq} metros e base ${base} metros`
    }
}

console.log(triangulo(1, 3, 2))